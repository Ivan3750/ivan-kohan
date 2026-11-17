import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/app/lib/dictionary";
import { isLocale, hiddenLocales, navHref, pagePath } from "@/app/lib/site";
import { pageMetadata, formatDate } from "@/app/lib/seo";
import { postsSorted } from "@/app/lib/posts";
import Hero from "@/app/components/site/Hero";
import Marquee from "@/app/components/site/Marquee";
import About from "@/app/components/site/About";
import Services from "@/app/components/site/Services";
import WebHjerteSection from "@/app/components/site/WebHjerteSection";
import ContactBand from "@/app/components/site/ContactBand";
import { BlogTeaser } from "@/app/components/site/BlogCards";
import { toCardItems } from "@/app/lib/blogCards";
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
  const showBlog = !hiddenLocales.includes(lang);
  const blogLang = lang === "bs" ? "en" : lang;
  const latest = postsSorted().slice(0, 3);

  return (
    <>
      <Ld graph={[profilePageLd(lang, dict, "", dict.meta.title, dict.meta.description)]} />
      <main id="main">
        <Hero dict={dict} contactHref={navHref(lang, "contact")} />
        <Marquee items={dict.marquee} />
        <About dict={dict.about} compact more={{ href: pagePath(lang, "about"), label: dict.home.aboutMore }} />
        <Services dict={dict.services} />
        {showBlog && (
          <BlogTeaser
            items={toCardItems(latest, blogLang, (iso) => formatDate(iso, lang))}
            lang={lang}
            readTime={dict.blog.readTime}
            label={dict.nav.blog}
            title={dict.home.blogTitle}
            intro={dict.home.blogIntro}
            all={dict.home.blogAll}
          />
        )}
        <WebHjerteSection dict={dict.webhjerte} external={dict.a11y.external} />
        <ContactBand lang={lang} band={dict.home.band} emailLabel={dict.contact.emailLabel} />
      </main>
    </>
  );
}

