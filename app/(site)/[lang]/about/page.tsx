import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/app/lib/dictionary";
import { isLocale, pageUrl } from "@/app/lib/site";
import { pageMetadata } from "@/app/lib/seo";
import PageHeader from "@/app/components/site/PageHeader";
import About from "@/app/components/site/About";
import Skills from "@/app/components/site/Skills";
import Faq from "@/app/components/site/Faq";
import ContactBand from "@/app/components/site/ContactBand";
import { Ld, breadcrumbLd, faqLd, profilePageLd } from "@/app/components/site/JsonLd";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const d = getDictionary(lang);
  return pageMetadata({ lang, slug: "about", title: d.pages.about.title, description: d.pages.about.intro });
}

export default async function AboutPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);
  return (
    <>
      <Ld
        graph={[
          profilePageLd(lang, d, "about", d.pages.about.title, d.pages.about.intro),
          faqLd(lang, d, "about"),
          breadcrumbLd([
            { name: "Ivan Kohan", url: pageUrl(lang) },
            { name: d.pages.about.title, url: pageUrl(lang, "about") },
          ]),
        ]}
      />
      <main id="main">
        <PageHeader label={d.nav.about} title={d.pages.about.title} intro={d.pages.about.intro} watermark="About" />
        <About dict={d.about} />
        <Skills dict={d.skills} />
        <Faq dict={d.faq} />
        <ContactBand lang={lang} band={d.home.band} emailLabel={d.contact.emailLabel} />
      </main>
    </>
  );
}
