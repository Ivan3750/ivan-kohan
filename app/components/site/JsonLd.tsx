import { links, pageUrl, SITE_URL, localeMeta, type Locale } from "@/app/lib/site";
import type { Dict } from "@/app/lib/dictionary";

const personId = `${SITE_URL}/#person`;
const orgId = `${links.webhjerte}/#organization`;

export function Ld({ graph }: { graph: object[] }) {
  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

/** Sitewide entities: Person, WebHjerte business, WebSite. */
export function siteGraph(lang: Locale, dict: Dict): object[] {
  return [
    {
      "@type": "Person",
      "@id": personId,
      name: "Ivan Kohan",
      alternateName: ["Іван Кохан"],
      url: SITE_URL,
      image: `${SITE_URL}/avatar.png`,
      email: `mailto:${links.email}`,
      jobTitle: "Founder of WebHjerte",
      description: dict.meta.ogDescription,
      worksFor: { "@id": orgId },
      knowsLanguage: ["uk", "en", "da", "bs"],
      knowsAbout: ["Web development", "Entrepreneurship", "Languages"],
      sameAs: [links.linkedin, links.instagram, links.instagramBusiness, links.github, links.webhjerte],
    },
    {
      "@type": "ProfessionalService",
      "@id": orgId,
      name: "WebHjerte",
      url: links.webhjerte,
      founder: { "@id": personId },
      areaServed: [{ "@type": "Country", name: "Denmark" }],
      address: { "@type": "PostalAddress", addressLocality: "Horsens", addressCountry: "DK" },
      serviceType: [
        "Website development",
        "Search engine optimization",
        "Social media advertising",
        "Automation and AI tools",
      ],
      sameAs: [links.instagramBusiness, links.webhjerte],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Ivan Kohan",
      inLanguage: localeMeta[lang].hreflang,
      publisher: { "@id": personId },
    },
  ];
}

export function profilePageLd(lang: Locale, dict: Dict, slug: string, name: string, description: string): object {
  return {
    "@type": "ProfilePage",
    "@id": `${pageUrl(lang, slug)}#profile`,
    url: pageUrl(lang, slug),
    name,
    description,
    inLanguage: localeMeta[lang].hreflang,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntity: { "@id": personId },
  };
}

export function breadcrumbLd(items: { name: string; url: string }[]): object {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: it.url })),
  };
}



export { personId };
