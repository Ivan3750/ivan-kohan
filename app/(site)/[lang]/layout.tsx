import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../../globals.css";
import { display, body, mono } from "@/app/lib/fonts";
import { isLocale, locales, SITE_URL } from "@/app/lib/site";
import { getDictionary } from "@/app/lib/dictionary";
import Providers from "@/app/components/site/Providers";
import SmoothScroll from "@/app/components/site/SmoothScroll";
import ScrollProgress from "@/app/components/site/ScrollProgress";
import Cursor from "@/app/components/site/Cursor";
import Nav from "@/app/components/site/Nav";
import VisitNotifier from "@/app/components/VisitNotifier";
import { Ld, siteGraph } from "@/app/components/site/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: "#0f0f0e",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Ivan Kohan",
  authors: [{ name: "Ivan Kohan", url: SITE_URL }],
  creator: "Ivan Kohan",
  publisher: "Ivan Kohan",
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <Providers>
          <a
            href="#main"
            className="fixed left-4 top-4 z-[200] -translate-y-24 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-ink transition focus:translate-y-0"
          >
            {dict.a11y.skip}
          </a>
          <Ld graph={siteGraph(lang, dict)} />
          <SmoothScroll />
          <ScrollProgress />
          <Cursor />
          <Nav lang={lang} nav={dict.nav} a11y={dict.a11y} />
          {children}
          <VisitNotifier />
        </Providers>
      </body>
    </html>
  );
}
