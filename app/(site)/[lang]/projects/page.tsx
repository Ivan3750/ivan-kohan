import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/app/lib/dictionary";
import { isLocale, pageUrl } from "@/app/lib/site";
import { pageMetadata } from "@/app/lib/seo";
import Projects from "@/app/components/site/Projects";
import WebHjerteSection from "@/app/components/site/WebHjerteSection";
import ContactBand from "@/app/components/site/ContactBand";
import { Ld, breadcrumbLd, workListLd } from "@/app/components/site/JsonLd";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const d = getDictionary(lang);
  return pageMetadata({ lang, slug: "projects", title: d.pages.projects.title, description: d.pages.projects.intro });
}

export default async function ProjectsPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);
  return (
    <>
      <Ld
        graph={[
          workListLd(lang, d, "projects"),
          breadcrumbLd([
            { name: "Ivan Kohan", url: pageUrl(lang) },
            { name: d.pages.projects.title, url: pageUrl(lang, "projects") },
          ]),
        ]}
      />
      <main id="main" className="pt-20">
        <Projects dict={d.projects} external={d.a11y.external} h1 />
        <WebHjerteSection dict={d.webhjerte} external={d.a11y.external} />
        <ContactBand lang={lang} band={d.home.band} emailLabel={d.contact.emailLabel} />
      </main>
    </>
  );
}
