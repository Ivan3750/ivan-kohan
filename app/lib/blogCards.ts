import type { Post, BlogLocale } from "./posts";

export type BlogCardItem = {
  slug: string;
  date: string;
  dateLabel: string;
  minutes: number;
  title: string;
  description: string;
  tags: string[];
};

export function toCardItems(posts: Post[], lang: BlogLocale, dateFmt: (iso: string) => string): BlogCardItem[] {
  return posts.map((p) => ({
    slug: p.slug,
    date: p.date,
    dateLabel: dateFmt(p.date),
    minutes: p.minutes,
    title: p.t[lang].title,
    description: p.t[lang].description,
    tags: p.tags,
  }));
}
