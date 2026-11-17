import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/app/lib/dictionary";
import { isLocale } from "@/app/lib/site";
import { pageMetadata } from "@/app/lib/seo";
import Hero from "@/app/components/site/Hero";
import Story from "@/app/components/site/Story";
import Voices from "@/app/components/site/Voices";
import AboutMe from "@/app/components/site/AboutMe";
import Studio from "@/app/components/site/Studio";
import ContactBand from "@/app/components/site/ContactBand";
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
        <Hero dict={dict} />
        <Story dict={dict.story} />
        <Voices dict={dict.voices} />
        <AboutMe dict={dict.me} />
        <Studio dict={dict.studio} external={dict.a11y.external} />
        <ContactBand lang={lang} band={dict.home.band} emailLabel={dict.contact.emailLabel} />
      </main>
    </>
  );
}
