import { links, localeUrl, SITE_URL, localeMeta, type Locale } from "@/app/lib/site";
import type { Dict } from "@/app/lib/dictionary";

/** Server-rendered schema.org graph: Person, Organization, WebSite, ProfilePage, FAQPage, ItemList. */
export default function JsonLd({ lang, dict }: { lang: Locale; dict: Dict }) {
  const pageUrl = localeUrl(lang);
  const personId = `${SITE_URL}/#person`;
  const orgId = `${links.webhjerte}/#organization`;

  const sameAs = [
    links.linkedin,
    links.instagram,
    links.instagramBusiness,
    links.github,
    links.webhjerte,
    links.telegram,
  ];

  const graph = [
    {
      "@type": "Person",
      "@id": personId,
      name: "Ivan Kohan",
      alternateName: ["Іван Кохан"],
      url: SITE_URL,
      image: `${SITE_URL}/avatar.png`,
      email: `mailto:${links.email}`,
      jobTitle: "Web Developer",
      description: dict.meta.ogDescription,
      worksFor: { "@id": orgId },
      knowsLanguage: ["uk", "en", "da", "bs"],
      knowsAbout: [
        "Web development",
        "Next.js",
        "React",
        "TypeScript",
        "Search engine optimization",
        "Google Search Console",
        "Meta Ads",
        "Automation",
      ],
      sameAs,
    },
    {
      "@type": "ProfessionalService",
      "@id": orgId,
      name: "WebHjerte",
      url: links.webhjerte,
      founder: { "@id": personId },
      areaServed: [{ "@type": "Country", name: "Denmark" }],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Horsens",
        addressCountry: "DK",
      },
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
    {
      "@type": "ProfilePage",
      "@id": `${pageUrl}#profile`,
      url: pageUrl,
      name: dict.meta.title,
      description: dict.meta.description,
      inLanguage: localeMeta[lang].hreflang,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": personId },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ivan Kohan", item: pageUrl },
        ],
      },
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}#work`,
      name: dict.projects.title,
      itemListElement: [
        { name: "WebHjerte", url: links.webhjerte },
        { name: "Lønbæks", url: "https://xn--lnbks-ura7j.dk" },
        { name: "Veka Center", url: "https://veka.center" },
      ].map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "WebSite", name: p.name, url: p.url, author: { "@id": personId } },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      inLanguage: localeMeta[lang].hreflang,
      mainEntity: dict.faq.items.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(
    /</g,
    "\\u003c",
  );

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
