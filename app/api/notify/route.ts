import { NextResponse } from "next/server";

export async function POST() {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json(
      { error: "Telegram config missing" },
      { status: 500 }
    );
  }
  /* Checks */

  const message = `👀 Новий відвідувач на сайті\n🕒 ${new Date().toLocaleString()}`;

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  });

  return NextResponse.json({ success: true });
}
