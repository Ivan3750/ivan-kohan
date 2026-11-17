import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/app/lib/dictionary";
import { isLocale, publicLocales, hiddenLocales, localeMeta, localeUrl, SITE_URL } from "@/app/lib/site";
import Hero from "@/app/components/site/Hero";
import Marquee from "@/app/components/site/Marquee";
import About from "@/app/components/site/About";
import Services from "@/app/components/site/Services";
import WebHjerteSection from "@/app/components/site/WebHjerteSection";
import Skills from "@/app/components/site/Skills";
import Projects from "@/app/components/site/Projects";
import Faq from "@/app/components/site/Faq";
import Contact from "@/app/components/site/Contact";
import Footer from "@/app/components/site/Footer";
import JsonLd from "@/app/components/site/JsonLd";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const d = getDictionary(lang);

  const languages: Record<string, string> = Object.fromEntries(
    publicLocales.map((l) => [localeMeta[l].hreflang, localeUrl(l)]),
  );
  languages["x-default"] = SITE_URL;

  return {
    title: { absolute: d.meta.title },
    description: d.meta.description,
    keywords: d.meta.keywords,
    alternates: { canonical: localeUrl(lang), languages: hiddenLocales.includes(lang) ? undefined : languages },
    robots: hiddenLocales.includes(lang) ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "website",
      siteName: "Ivan Kohan",
      title: d.meta.title,
      description: d.meta.ogDescription,
      url: localeUrl(lang),
      locale: localeMeta[lang].og,
      alternateLocale: publicLocales.filter((l) => l !== lang).map((l) => localeMeta[l].og),
    },
    twitter: {
      card: "summary_large_image",
      title: d.meta.title,
      description: d.meta.ogDescription,
    },
  };
}

export default async function Home({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <JsonLd lang={lang} dict={dict} />
      <main id="main">
        <Hero dict={dict} />
        <Marquee items={dict.marquee} />
        <About dict={dict.about} />
        <Services dict={dict.services} />
        <Skills dict={dict.skills} />
        <WebHjerteSection dict={dict.webhjerte} external={dict.a11y.external} />
        <Projects dict={dict.projects} external={dict.a11y.external} />
        <Faq dict={dict.faq} />
        <Contact dict={dict.contact} lang={lang} external={dict.a11y.external} />
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
