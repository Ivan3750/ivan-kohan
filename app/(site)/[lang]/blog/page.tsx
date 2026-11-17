import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/app/lib/dictionary";
import { isLocale, hiddenLocales, pageUrl } from "@/app/lib/site";
import { pageMetadata, formatDate } from "@/app/lib/seo";
import { postsSorted, type BlogLocale } from "@/app/lib/posts";
import PageHeader from "@/app/components/site/PageHeader";
import ContactBand from "@/app/components/site/ContactBand";
import { BlogGrid } from "@/app/components/site/BlogCards";
import { toCardItems } from "@/app/lib/blogCards";
import { Ld, breadcrumbLd } from "@/app/components/site/JsonLd";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang) || hiddenLocales.includes(lang)) return {};
  const d = getDictionary(lang);
  return pageMetadata({ lang, slug: "blog", title: d.pages.blog.title, description: d.pages.blog.intro });
}

export default async function BlogIndex({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang) || hiddenLocales.includes(lang)) notFound();
  const d = getDictionary(lang);
  const items = toCardItems(postsSorted(), lang as BlogLocale, (iso) => formatDate(iso, lang));

  return (
    <>
      <Ld
        graph={[
          {
            "@type": "Blog",
            "@id": `${pageUrl(lang, "blog")}#blog`,
            url: pageUrl(lang, "blog"),
            name: d.pages.blog.title,
            description: d.pages.blog.intro,
            inLanguage: lang,
            author: { "@id": "https://ivankohan.com/#person" },
            blogPost: postsSorted().map((p) => ({
              "@type": "BlogPosting",
              headline: p.t[lang as BlogLocale].title,
              url: pageUrl(lang, `blog/${p.slug}`),
              datePublished: p.date,
            })),
          },
          breadcrumbLd([
            { name: "Ivan Kohan", url: pageUrl(lang) },
            { name: d.pages.blog.title, url: pageUrl(lang, "blog") },
          ]),
        ]}
      />
      <main id="main">
        <PageHeader label={d.nav.blog} title={d.pages.blog.title} intro={d.pages.blog.intro} watermark="Blog" />
        <section className="relative bg-paper text-ink">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
            <BlogGrid items={items} lang={lang} readTime={d.blog.readTime} />
          </div>
        </section>
        <ContactBand lang={lang} band={d.home.band} emailLabel={d.contact.emailLabel} />
      </main>
    </>
  );
}
