import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/app/lib/dictionary";
import { isLocale, pageUrl } from "@/app/lib/site";
import { pageMetadata } from "@/app/lib/seo";
import Contact from "@/app/components/site/Contact";
import { Ld, breadcrumbLd } from "@/app/components/site/JsonLd";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const d = getDictionary(lang);
  return pageMetadata({ lang, slug: "contact", title: d.pages.contact.title, description: d.pages.contact.intro });
}

export default async function ContactPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);
  return (
    <>
      <Ld
        graph={[
          {
            "@type": "ContactPage",
            "@id": `${pageUrl(lang, "contact")}#contact`,
            url: pageUrl(lang, "contact"),
            name: d.pages.contact.title,
            about: { "@id": "https://ivankohan.com/#person" },
          },
          breadcrumbLd([
            { name: "Ivan Kohan", url: pageUrl(lang) },
            { name: d.pages.contact.title, url: pageUrl(lang, "contact") },
          ]),
        ]}
      />
      <main id="main">
        <Contact dict={d.contact} lang={lang} external={d.a11y.external} h1 />
      </main>
    </>
  );
}
