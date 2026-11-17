import { NextRequest, NextResponse } from "next/server";
import { defaultLocale } from "@/app/lib/site";

/**
 * 1. Locale routing: "/" serves the default language (EN) without a prefix,
 *    "/en" permanently redirects to "/" (one canonical URL), /da /uk /bs are native routes.
 * 2. Pings Telegram when the site is opened from Instagram / Facebook in-app browsers.
 */
export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Instagram / Facebook link-click notification (fire-and-forget)
  const ua = req.headers.get("user-agent") ?? "unknown";
  if (
    /instagram|facebookexternalhit/i.test(ua) &&
    process.env.TELEGRAM_BOT_TOKEN &&
    process.env.TELEGRAM_CHAT_ID
  ) {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ??
      req.headers.get("x-real-ip") ??
      "unknown";
    fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: `📸 Instagram hit\nPath: ${pathname}\nIP: ${ip}\nUA: ${ua}`,
      }),
    }).catch(() => {});
  }

  const first = pathname.split("/")[1] ?? "";

  // metadata image routes (e.g. /en/opengraph-image-xxxx) are served as-is
  if (first === defaultLocale && !pathname.includes("opengraph-image")) {
    const url = req.nextUrl.clone();
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }

  if (pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
