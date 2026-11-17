import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  website?: string;
  message?: string;
  company?: string; // honeypot
  lang?: string;
};

// best-effort in-memory rate limit (per server instance)
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim().slice(0, max) : "";

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // bots fill the honeypot — pretend success
  if (body.company) return NextResponse.json({ success: true });

  const name = clean(body.name, 100);
  const email = clean(body.email, 200);
  const website = clean(body.website, 300);
  const message = clean(body.message, 3000);
  const lang = clean(body.lang, 5);

  if (!name || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "Invalid input" }, { status: 422 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const text = [
    "✉️ New message from ivankohan.com",
    `🌐 Language: ${lang || "?"}`,
    `👤 ${name}`,
    `📧 ${email}`,
    website ? `🔗 ${website}` : null,
    "",
    message,
  ]
    .filter((l) => l !== null)
    .join("\n");

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
  });

  if (!res.ok) return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
  return NextResponse.json({ success: true });
}
