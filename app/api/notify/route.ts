import { NextResponse } from "next/server";

type ClientData = {
  userAgent?: string;
  isMobile?: boolean;
  language?: string;
  screen?: {
    width?: number;
    height?: number;
  };
  cookieEnabled?: boolean;
};

export async function POST(req: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json(
      { error: "Telegram config missing" },
      { status: 500 }
    );
  }

  // 🔹 Дані з клієнта
  let body: ClientData = {};
  try {
    body = await req.json();
  } catch {
    // ignore
  }

  // 🔹 Дані з сервера
  const userAgent = req.headers.get("user-agent") ?? "unknown";

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0] ??
    req.headers.get("x-real-ip") ??
    "unknown";

  // 🔹 Перевірки
  const isBot = /bot|crawl|spider|slurp|headless/i.test(
    userAgent.toLowerCase()
  );

  const deviceType = body.isMobile ? "📱 Мобільний" : "🖥️ Десктоп";

  // 🔹 Повідомлення
  const message = `
👀 *Новий відвідувач*
🕒 ${new Date().toLocaleString()}

${deviceType}
🤖 Бот: ${isBot ? "так" : "ні"}

🌍 Мова: ${body.language ?? "невідомо"}
🖥️ Екран: ${body.screen?.width ?? "?"}x${body.screen?.height ?? "?"}

🌐 IP: ${ip}
🧠 UA: ${userAgent}
  `.trim();

  // 🔹 Відправка в Telegram
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: "Markdown",
    }),
  });

  return NextResponse.json({ success: true });
}
