import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getDictionary } from "@/app/lib/dictionary";
import { isLocale, hiddenLocales, publicLocales, pagePath, pageUrl, SITE_URL, type Locale } from "@/app/lib/site";
import { pageMetadata, formatDate } from "@/app/lib/seo";
import { getPost, posts, postsSorted, type BlogLocale } from "@/app/lib/posts";
import PageHeader from "@/app/components/site/PageHeader";
import ContactBand from "@/app/components/site/ContactBand";
import { BlogGrid } from "@/app/components/site/BlogCards";
import { toCardItems } from "@/app/lib/blogCards";
import { Ld, breadcrumbLd, personId } from "@/app/components/site/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return publicLocales.flatMap((lang) => posts.map((p) => ({ lang, slug: p.slug })));
}

type Props = { params: Promise<{ lang: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const post = getPost(slug);
  if (!isLocale(lang) || hiddenLocales.includes(lang) || !post) return {};
  const t = post.t[lang as BlogLocale];
  return pageMetadata({
    lang,
    slug: `blog/${slug}`,
    title: t.title,
    description: t.description,
    article: { publishedTime: post.date, tags: post.tags },
    ogTitle: lang === "uk" ? undefined : t.title,
  });
}

export default async function PostPage({ params }: Props) {
  const { lang, slug } = await params;
  const post = getPost(slug);
  if (!isLocale(lang) || hiddenLocales.includes(lang) || !post) notFound();
  const d = getDictionary(lang);
  const t = post.t[lang as BlogLocale];
  const url = pageUrl(lang, `blog/${slug}`);
  const related = postsSorted().filter((p) => p.slug !== slug);

  return (
    <>
      <Ld
        graph={[
          {
            "@type": "BlogPosting",
            "@id": `${url}#post`,
            mainEntityOfPage: url,
            headline: t.title,
            description: t.description,
            inLanguage: lang,
            datePublished: post.date,
            dateModified: post.date,
            image: `${SITE_URL}/api/og${lang === "uk" ? "" : `?t=${encodeURIComponent(t.title)}`}`,
            keywords: post.tags.join(", "),
            author: { "@id": personId },
            publisher: { "@id": personId },
          },
          breadcrumbLd([
            { name: "Ivan Kohan", url: pageUrl(lang) },
            { name: d.pages.blog.title, url: pageUrl(lang, "blog") },
            { name: t.title, url },
          ]),
        ]}
      />
      <main id="main">
        <PageHeader label={post.tags.join(" · ")} title={t.title} intro={t.description} emoji={post.emoji} />

        <article className="relative bg-paper text-ink">
          <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
            <Link
              href={pagePath(lang as Locale, "blog")}
              className="label inline-flex items-center gap-2 text-graphite transition hover:text-ink"
            >
              <ArrowLeft size={14} /> {d.blog.back}
            </Link>

            <p className="label mt-8 flex flex-wrap gap-x-5 gap-y-1 text-graphite">
              <span>
                {d.blog.published} <time dateTime={post.date}>{formatDate(post.date, lang)}</time>
              </span>
              <span>
                ⏱️ {post.minutes} {d.blog.readTime}
              </span>
            </p>

            <p className="font-display mt-10 text-2xl font-medium leading-snug sm:text-3xl">{t.intro}</p>

            {t.sections.map((s) => (
              <section key={s.h} className="mt-14">
                <h2 className="font-display text-2xl font-bold leading-tight sm:text-4xl">{s.h}</h2>
                {s.p?.map((para, i) => (
                  <p key={i} className="mt-5 text-lg leading-[1.75] text-graphite">
                    {para}
                  </p>
                ))}
                {s.list && (
                  <ul className="mt-5 space-y-3 text-lg leading-[1.7] text-graphite">
                    {s.list.map((li, i) => (
                      <li key={i} className="flex gap-3">
                        <span aria-hidden className="mt-[0.55em] h-2 w-2 shrink-0 rounded-full bg-accent ring-2 ring-ink" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {t.outro && (
              <p className="font-display mt-16 border-l-4 border-accent pl-6 text-2xl font-medium leading-snug">{t.outro}</p>
            )}
          </div>
        </article>

        <section className="bg-paper text-ink">
          <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">{d.blog.more}</h2>
            <div className="mt-10">
              <BlogGrid
                items={toCardItems(related, lang as BlogLocale, (iso) => formatDate(iso, lang))}
                lang={lang}
                readTime={d.blog.readTime}
              />
            </div>
          </div>
        </section>

        <ContactBand lang={lang} band={d.home.band} emailLabel={d.contact.emailLabel} />
      </main>
    </>
  );
}
