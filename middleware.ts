import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const ua = req.headers.get("user-agent") ?? "unknown";

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0] ??
    req.headers.get("x-real-ip") ??
    "unknown";

  // фільтр статики
  if (
    req.nextUrl.pathname.startsWith("/_next") ||
    req.nextUrl.pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // тільки Instagram
  if (/instagram|facebookexternalhit/i.test(ua)) {
    fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: `📸 Instagram hit\nIP: ${ip}\nUA: ${ua}`,
        }),
      }
    );
  }

  return NextResponse.next();
}
