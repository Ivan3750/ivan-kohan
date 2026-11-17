import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/app/lib/dictionary";
import { isLocale, pageUrl } from "@/app/lib/site";
import { pageMetadata } from "@/app/lib/seo";
import PageHeader from "@/app/components/site/PageHeader";
import NowList from "@/app/components/site/NowList";
import ContactBand from "@/app/components/site/ContactBand";
import { Ld, breadcrumbLd } from "@/app/components/site/JsonLd";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const d = getDictionary(lang);
  return pageMetadata({ lang, slug: "now", title: d.pages.now.title, description: d.pages.now.intro });
}

export default async function NowPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);
  return (
    <>
      <Ld
        graph={[
          breadcrumbLd([
            { name: "Ivan Kohan", url: pageUrl(lang) },
            { name: d.pages.now.title, url: pageUrl(lang, "now") },
          ]),
        ]}
      />
      <main id="main">
        <PageHeader label={d.nav.now} title={d.pages.now.title} intro={d.pages.now.intro} emoji="⏳" watermark="Now" />
        <NowList updated={d.now.updated} items={d.now.items} />
        <ContactBand lang={lang} band={d.home.band} emailLabel={d.contact.emailLabel} />
      </main>
    </>
  );
}
