import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/app/lib/dictionary";
import { isLocale, navHref, pagePath } from "@/app/lib/site";
import { pageMetadata } from "@/app/lib/seo";
import Hero from "@/app/components/site/Hero";
import About from "@/app/components/site/About";
import Services from "@/app/components/site/Services";
import WebHjerteSection from "@/app/components/site/WebHjerteSection";
import ContactBand from "@/app/components/site/ContactBand";
import WorkTeaser from "@/app/components/site/WorkTeaser";
import { Ld, profilePageLd } from "@/app/components/site/JsonLd";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const d = getDictionary(lang);
  const m = pageMetadata({
    lang,
    title: d.meta.title,
    description: d.meta.description,
    keywords: d.meta.keywords,
    absoluteTitle: true,
  });
  return { ...m, openGraph: { ...m.openGraph, description: d.meta.ogDescription } };
}

export default async function Home({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  return (
    <>
      <Ld graph={[profilePageLd(lang, dict, "", dict.meta.title, dict.meta.description)]} />
      <main id="main">
        <Hero dict={dict} contactHref={navHref(lang, "contact")} />
        <About dict={dict.about} compact more={{ href: pagePath(lang, "about"), label: dict.home.aboutMore }} />
        <Services dict={dict.services} />
        <WebHjerteSection dict={dict.webhjerte} external={dict.a11y.external} />
        <WorkTeaser dict={dict.projects} lang={lang} more={dict.home.workMore} external={dict.a11y.external} />
        <ContactBand lang={lang} band={dict.home.band} emailLabel={dict.contact.emailLabel} />
      </main>
    </>
  );
}

