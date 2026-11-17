import type { Locale } from "./site";

const en = {
  meta: {
    title: "Ivan Kohan — Web Developer & Founder of WebHjerte (Denmark)",
    description:
      "Ivan Kohan is a web developer in Denmark and founder of WebHjerte. Fast Next.js websites, SEO and Meta ads for small businesses.",
    ogDescription:
      "Web developer based in Denmark. Founder of WebHjerte — fast Next.js websites, SEO and social growth for small businesses.",
    keywords: [
      "Ivan Kohan",
      "web developer Denmark",
      "WebHjerte",
      "Next.js developer",
      "SEO Denmark",
      "website for small business",
    ],
  },
  a11y: {
    skip: "Skip to content",
    home: "Ivan Kohan — home",
    menu: "Open menu",
    close: "Close menu",
    primaryNav: "Primary",
    language: "Language",
    backToTop: "Back to top",
    external: "opens in a new tab",
  },
  nav: {
    about: "About",
    services: "Services",
    webhjerte: "WebHjerte",
    work: "Work",
    skills: "Skills",
    contact: "Contact",
    cta: "Let's talk",
  },
  hero: {
    status: "Taking on new projects",
    title: { pre: "Websites with a", em: "heartbeat." },
    lead: "I'm Ivan Kohan — web developer and founder of WebHjerte. I build fast, SEO-ready Next.js websites for small businesses in Denmark and beyond.",
    cta1: "Start a project",
    cta2: "See my work",
    location: "Based in Denmark",
    scroll: "Scroll",
    facts: [
      { big: "3", small: "languages" },
      { big: "1", small: "person studio" },
      { big: "Fixed", small: "price packages" },
    ],
  },
  marquee: [
    "Next.js websites",
    "Technical SEO",
    "Google Search Console",
    "Meta ads",
    "Instagram · Facebook · LinkedIn",
    "Automation & AI tools",
  ],
  about: {
    label: "About",
    title: "A web developer who cares about the business behind the website.",
    manifesto:
      "I build websites that work as hard as the people behind them. Minimal on the surface, serious underneath — fast, findable and made with care. I think about the owner who just wants a site that brings in customers.",
    paragraphs: [
      "I'm a web developer and the founder of WebHjerte, a one-person web studio registered in Denmark. I help small businesses with websites, SEO and social media — directly, without agency layers.",
    ],
    factsTitle: "At a glance",
    facts: [
      { k: "Based in", v: "Denmark" },
      { k: "Studio", v: "WebHjerte" },
      { k: "Languages", v: "Ukrainian · English · Danish" },
    ],
  },
  services: {
    label: "Services",
    title: "Everything your website needs to actually bring customers.",
    intro:
      "One person from the first call to launch day — no agency layers, no surprises.",
    items: [
      {
        title: "Websites",
        text: "Modern Next.js (App Router) websites for small businesses. Fixed-price packages, fast delivery and one person you talk to directly.",
        tags: ["Next.js", "React", "Vercel", "Responsive"],
      },
      {
        title: "SEO",
        text: "Technical SEO, structured data, speed and Google Search Console — so the right people find you on Google.",
        tags: ["Search Console", "Schema.org", "Core Web Vitals", "Local SEO"],
      },
      {
        title: "Social & ads",
        text: "Meta ads and content for Instagram, Facebook and LinkedIn that looks and sounds like your website.",
        tags: ["Meta Ads", "Instagram", "Facebook", "LinkedIn"],
      },
      {
        title: "Automation & AI",
        text: "Custom automations and AI tools: Claude Code workflows, Raspberry Pi 5 projects and dashboards that save hours.",
        tags: ["Claude Code", "Raspberry Pi 5", "Dashboards", "Linux"],
      },
    ],
  },
  webhjerte: {
    label: "WebHjerte",
    title: "WebHjerte — my studio, my heart.",
    text: "WebHjerte (Danish for “web heart”) is my own web studio, registered in Denmark. The idea is simple: websites built with care, for people who care about their business.",
    points: [
      { title: "Fixed packages", text: "You know the scope and the price before we start." },
      { title: "Fast delivery", text: "Small, focused projects shipped quickly — not months of meetings." },
      { title: "One person", text: "You talk to the person who builds your site. Always." },
    ],
    visit: "Visit webhjerte.dk",
    follow: "@WebHjerte on Instagram",
  },
  skills: {
    label: "Skills",
    title: "Tools I trust, habits I keep.",
    intro: "A practical stack for shipping quickly — and the human skills that make projects go smoothly.",
    groups: [
      {
        title: "Build",
        items: [
          { name: "Next.js", note: "App Router, SSR/SSG, SEO-first" },
          { name: "React", note: "Components & interactive UI" },
          { name: "TypeScript", note: "Safer, maintainable code" },
          { name: "Tailwind CSS", note: "Fast, consistent styling" },
          { name: "Vercel", note: "Deploys & hosting" },
          { name: "Git", note: "Version control & workflow" },
        ],
      },
      {
        title: "Run & automate",
        items: [
          { name: "Raspberry Pi / Linux", note: "Home server & experiments" },
          { name: "SSH", note: "Remote access & deployment" },
          { name: "Claude Code", note: "AI-assisted engineering" },
          { name: "Dashboards", note: "Custom tools & automations" },
        ],
      },
      {
        title: "Grow",
        items: [
          { name: "SEO", note: "Technical & local search" },
          { name: "Google Search Console", note: "Indexing & performance" },
          { name: "Meta Ads", note: "Instagram & Facebook campaigns" },
          { name: "Content", note: "Instagram, Facebook, LinkedIn" },
        ],
      },
    ],
  },
  projects: {
    label: "Work",
    title: "Selected work.",
    intro: "Real websites for real businesses — built to be fast, clear and found.",
    visit: "Visit site",
    drag: "Scroll",
    flagship: [
      {
        key: "webhjerte",
        tag: "Studio",
        title: "WebHjerte",
        text: "My own studio website — minimal, positive and built to earn trust and rank in Danish search.",
      },
      {
        key: "lonbaeks",
        tag: "Driving school",
        title: "Lønbæks",
        text: "Website for a Danish driving school — clear, fast and easy to use on mobile.",
      },
      {
        key: "veka",
        tag: "Windows",
        title: "Veka Center",
        text: "Website for a Ukrainian windows business — product-focused, fast and straightforward.",
      },
    ],
    moreTitle: "More builds & concepts",
    more: {
      pizzle: "Pizzeria site with online ordering and menu management.",
      hireon: "Job search platform with an admin dashboard.",
      workout: "Fitness tracking dashboard with progress analytics.",
      vzlom: "Safes store with product management dashboard.",
      clubhorse: "Information site for a horse club — events, horses, membership.",
      ukraine: "Awareness website about the war in Ukraine.",
    },
    soon: "Physiotherapy, sports and automotive projects — coming soon.",
  },
  faq: {
    label: "FAQ",
    title: "Good questions.",
    items: [
      {
        q: "Who is Ivan Kohan?",
        a: "Ivan Kohan is a web developer and the founder of WebHjerte (webhjerte.dk), a Danish-registered one-person web studio.",
      },
      {
        q: "What does WebHjerte do?",
        a: "WebHjerte builds fast Next.js websites for small businesses with fixed-price packages. It also helps with SEO, Google Search Console, Meta ads and content for Instagram, Facebook and LinkedIn.",
      },
      {
        q: "Which technologies do you use?",
        a: "Next.js (App Router), React, TypeScript and Tailwind CSS, hosted on Vercel, with Git, Linux and Claude Code to move faster without cutting corners.",
      },
      {
        q: "How does working together look?",
        a: "You work with one person from the first call to launch. I propose a fixed-price package, build quickly, and we agree on next steps for SEO and growth after launch.",
      },
      {
        q: "Which languages can we work in?",
        a: "Ukrainian, English and Danish — whichever is most comfortable for you.",
      },
      {
        q: "Can you help with SEO and social media?",
        a: "Yes. I set up technical SEO and Google Search Console, and I run Meta ads and content for Instagram, Facebook and LinkedIn so everything points the same way as your website.",
      },
      {
        q: "Where are you based?",
        a: "In Denmark. I work remotely with clients across Denmark and beyond.",
      },
    ],
  },
  contact: {
    label: "Contact",
    title: { pre: "Let's build something", em: "with heart." },
    lead: "Got a project, a website that isn't pulling its weight, or just an idea? Write to me — I answer personally in English, Dansk or Українська.",
    emailLabel: "Email me directly",
    socialsTitle: "Find me online",
    form: {
      name: "Your name",
      namePh: "Anna Hansen",
      email: "Email",
      emailPh: "anna@example.dk",
      website: "Your website (optional)",
      websitePh: "https://yoursite.dk",
      message: "Message",
      messagePh: "Tell me about your business and what you need…",
      send: "Send message",
      sending: "Sending…",
      sentTitle: "Message sent!",
      sentText: "Thank you — I'll get back to you personally, usually within 24 hours.",
      again: "Send another",
      error: "Something went wrong. Please email me directly at",
      invalid: "Please fill in your name, a valid email and a message.",
    },
  },
  footer: {
    tagline: "Web developer & founder of WebHjerte. Fast websites, honest SEO, made with heart in Denmark.",
    navTitle: "Navigate",
    socialTitle: "Social",
    madeIn: "Made with",
    madeInIn: "in Denmark",
    rights: "All rights reserved.",
  },
};

export type Dict = typeof en;

const da: Dict = {
  meta: {
    title: "Ivan Kohan — Webudvikler & grundlægger af WebHjerte (Danmark)",
    description:
      "Ivan Kohan er webudvikler i Danmark og grundlægger af WebHjerte. Hurtige Next.js-hjemmesider, SEO og Meta-annoncer til små virksomheder.",
    ogDescription:
      "Webudvikler bosat i Danmark. Grundlægger af WebHjerte — hurtige Next.js-hjemmesider, SEO og sociale medier til små virksomheder.",
    keywords: [
      "Ivan Kohan",
      "webudvikler Danmark",
      "WebHjerte",
      "hjemmeside til små virksomheder",
      "SEO Danmark",
      "Next.js udvikler",
    ],
  },
  a11y: {
    skip: "Gå til indhold",
    home: "Ivan Kohan — forside",
    menu: "Åbn menu",
    close: "Luk menu",
    primaryNav: "Hovedmenu",
    language: "Sprog",
    backToTop: "Tilbage til toppen",
    external: "åbner i et nyt faneblad",
  },
  nav: {
    about: "Om mig",
    services: "Ydelser",
    webhjerte: "WebHjerte",
    work: "Projekter",
    skills: "Kompetencer",
    contact: "Kontakt",
    cta: "Lad os snakke",
  },
  hero: {
    status: "Tager nye projekter",
    title: { pre: "Hjemmesider med", em: "hjerteblod." },
    lead: "Jeg er Ivan Kohan — webudvikler og grundlægger af WebHjerte. Jeg bygger hurtige, SEO-klare Next.js-hjemmesider til små virksomheder i Danmark og udenfor.",
    cta1: "Start et projekt",
    cta2: "Se mine projekter",
    location: "Bosat i Danmark",
    scroll: "Scroll",
    facts: [
      { big: "3", small: "sprog" },
      { big: "1", small: "mand i studiet" },
      { big: "Fast", small: "pris på pakker" },
    ],
  },
  marquee: [
    "Next.js-hjemmesider",
    "Teknisk SEO",
    "Google Search Console",
    "Meta-annoncer",
    "Instagram · Facebook · LinkedIn",
    "Automatisering & AI-værktøjer",
  ],
  about: {
    label: "Om mig",
    title: "En webudvikler, der går op i forretningen bag hjemmesiden.",
    manifesto:
      "Jeg bygger hjemmesider, der arbejder lige så hårdt som menneskerne bag dem. Minimalistiske på overfladen, seriøse indeni — hurtige, nemme at finde og lavet med omtanke. Jeg tænker på ejeren, der bare vil have en side, der skaffer kunder.",
    paragraphs: [
      "Jeg er webudvikler og grundlægger af WebHjerte, et webstudie med én mand, registreret i Danmark. Jeg hjælper små virksomheder med hjemmesider, SEO og sociale medier — direkte, uden bureaulag.",
    ],
    factsTitle: "Kort fortalt",
    facts: [
      { k: "Bosat i", v: "Danmark" },
      { k: "Studie", v: "WebHjerte" },
      { k: "Sprog", v: "Ukrainsk · Engelsk · Dansk" },
    ],
  },
  services: {
    label: "Ydelser",
    title: "Alt, din hjemmeside skal bruge for at skaffe kunder.",
    intro:
      "Én person fra første samtale til lanceringsdagen — ingen bureaulag, ingen overraskelser.",
    items: [
      {
        title: "Hjemmesider",
        text: "Moderne Next.js-hjemmesider (App Router) til små virksomheder. Faste priser, hurtig levering og én person, du taler direkte med.",
        tags: ["Next.js", "React", "Vercel", "Responsivt"],
      },
      {
        title: "SEO",
        text: "Teknisk SEO, struktureret data, hastighed og Google Search Console — så de rigtige mennesker finder dig på Google.",
        tags: ["Search Console", "Schema.org", "Core Web Vitals", "Lokal SEO"],
      },
      {
        title: "Sociale medier & annoncer",
        text: "Meta-annoncer og indhold til Instagram, Facebook og LinkedIn, der ligner og lyder som din hjemmeside.",
        tags: ["Meta Ads", "Instagram", "Facebook", "LinkedIn"],
      },
      {
        title: "Automatisering & AI",
        text: "Skræddersyede automatiseringer og AI-værktøjer: Claude Code-workflows, Raspberry Pi 5-projekter og dashboards, der sparer timer.",
        tags: ["Claude Code", "Raspberry Pi 5", "Dashboards", "Linux"],
      },
    ],
  },
  webhjerte: {
    label: "WebHjerte",
    title: "WebHjerte — mit studie, mit hjerte.",
    text: "WebHjerte er mit eget webstudie, registreret i Danmark. Idéen er enkel: hjemmesider bygget med omtanke til folk, der brænder for deres forretning.",
    points: [
      { title: "Faste pakker", text: "Du kender omfang og pris, før vi starter." },
      { title: "Hurtig levering", text: "Små, fokuserede projekter leveret hurtigt — ikke måneder med møder." },
      { title: "Én person", text: "Du taler med den, der bygger din side. Altid." },
    ],
    visit: "Besøg webhjerte.dk",
    follow: "@WebHjerte på Instagram",
  },
  skills: {
    label: "Kompetencer",
    title: "Værktøjer jeg stoler på, vaner jeg holder.",
    intro: "En praktisk stak til at levere hurtigt — og de menneskelige egenskaber, der får projekter til at glide.",
    groups: [
      {
        title: "Byg",
        items: [
          { name: "Next.js", note: "App Router, SSR/SSG, SEO først" },
          { name: "React", note: "Komponenter og interaktivt UI" },
          { name: "TypeScript", note: "Sikrere, vedligeholdelig kode" },
          { name: "Tailwind CSS", note: "Hurtig, ensartet styling" },
          { name: "Vercel", note: "Deploy og hosting" },
          { name: "Git", note: "Versionsstyring og workflow" },
        ],
      },
      {
        title: "Drift & automatisering",
        items: [
          { name: "Raspberry Pi / Linux", note: "Hjemmeserver og eksperimenter" },
          { name: "SSH", note: "Fjernadgang og deployment" },
          { name: "Claude Code", note: "AI-assisteret udvikling" },
          { name: "Dashboards", note: "Egne værktøjer og automatiseringer" },
        ],
      },
      {
        title: "Vækst",
        items: [
          { name: "SEO", note: "Teknisk og lokal søgning" },
          { name: "Google Search Console", note: "Indeksering og performance" },
          { name: "Meta Ads", note: "Instagram- og Facebook-kampagner" },
          { name: "Indhold", note: "Instagram, Facebook, LinkedIn" },
        ],
      },
    ],
  },
  projects: {
    label: "Projekter",
    title: "Udvalgte projekter.",
    intro: "Rigtige hjemmesider til rigtige virksomheder — bygget til at være hurtige, tydelige og nemme at finde.",
    visit: "Besøg siden",
    drag: "Scroll",
    flagship: [
      {
        key: "webhjerte",
        tag: "Studie",
        title: "WebHjerte",
        text: "Mit eget studies hjemmeside — minimalistisk, positiv og bygget til at skabe tillid og ranke i danske søgninger.",
      },
      {
        key: "lonbaeks",
        tag: "Køreskole",
        title: "Lønbæks",
        text: "Hjemmeside til en dansk køreskole — tydelig, hurtig og nem at bruge på mobilen.",
      },
      {
        key: "veka",
        tag: "Vinduer",
        title: "Veka Center",
        text: "Hjemmeside til en ukrainsk vinduesvirksomhed — produktfokuseret, hurtig og ligetil.",
      },
    ],
    moreTitle: "Flere projekter & koncepter",
    more: {
      pizzle: "Pizzeria-side med online bestilling og menuhåndtering.",
      hireon: "Jobsøgningsplatform med admin-dashboard.",
      workout: "Træningsdashboard med fremgangsanalyse.",
      vzlom: "Pengeskabsbutik med produktstyring i dashboard.",
      clubhorse: "Informationsside for en rideklub — events, heste, medlemskab.",
      ukraine: "Oplysningsside om krigen i Ukraine.",
    },
    soon: "Fysioterapi-, sports- og bilprojekter — kommer snart.",
  },
  faq: {
    label: "FAQ",
    title: "Gode spørgsmål.",
    items: [
      {
        q: "Hvem er Ivan Kohan?",
        a: "Ivan Kohan er webudvikler og grundlægger af WebHjerte (webhjerte.dk), et danskregistreret webstudie med én mand.",
      },
      {
        q: "Hvad laver WebHjerte?",
        a: "WebHjerte bygger hurtige Next.js-hjemmesider til små virksomheder med faste priser. Studiet hjælper også med SEO, Google Search Console, Meta-annoncer og indhold til Instagram, Facebook og LinkedIn.",
      },
      {
        q: "Hvilke teknologier bruger du?",
        a: "Next.js (App Router), React, TypeScript og Tailwind CSS, hostet på Vercel — samt Git, Linux og Claude Code til at arbejde hurtigere uden at gå på kompromis.",
      },
      {
        q: "Hvordan foregår et samarbejde?",
        a: "Du arbejder med én person fra første samtale til lancering. Jeg tilbyder en pakke til fast pris, bygger hurtigt, og vi aftaler næste skridt for SEO og vækst efter lanceringen.",
      },
      {
        q: "På hvilke sprog kan vi samarbejde?",
        a: "Ukrainsk, engelsk og dansk — vælg det, der føles mest naturligt for dig.",
      },
      {
        q: "Kan du hjælpe med SEO og sociale medier?",
        a: "Ja. Jeg sætter teknisk SEO og Google Search Console op, og jeg kører Meta-annoncer og indhold til Instagram, Facebook og LinkedIn, så alt peger i samme retning som din hjemmeside.",
      },
      {
        q: "Hvor holder du til?",
        a: "I Danmark. Jeg arbejder på distancen med kunder i hele Danmark og udenfor.",
      },
    ],
  },
  contact: {
    label: "Kontakt",
    title: { pre: "Lad os bygge noget", em: "med hjerte." },
    lead: "Har du et projekt, en hjemmeside der ikke leverer, eller bare en idé? Skriv til mig — jeg svarer personligt på dansk, English eller Українська.",
    emailLabel: "Skriv direkte til mig",
    socialsTitle: "Find mig online",
    form: {
      name: "Dit navn",
      namePh: "Anna Hansen",
      email: "E-mail",
      emailPh: "anna@example.dk",
      website: "Din hjemmeside (valgfrit)",
      websitePh: "https://dinside.dk",
      message: "Besked",
      messagePh: "Fortæl om din virksomhed og hvad du har brug for…",
      send: "Send besked",
      sending: "Sender…",
      sentTitle: "Beskeden er sendt!",
      sentText: "Tak — jeg vender tilbage personligt, normalt inden for 24 timer.",
      again: "Send en ny",
      error: "Noget gik galt. Skriv i stedet direkte til",
      invalid: "Udfyld venligst dit navn, en gyldig e-mail og en besked.",
    },
  },
  footer: {
    tagline: "Webudvikler og grundlægger af WebHjerte. Hurtige hjemmesider og ærlig SEO — lavet med hjerte i Danmark.",
    navTitle: "Navigation",
    socialTitle: "Sociale medier",
    madeIn: "Lavet med",
    madeInIn: "i Danmark",
    rights: "Alle rettigheder forbeholdes.",
  },
};

const uk: Dict = {
  meta: {
    title: "Іван Кохан — веб-розробник і засновник WebHjerte (Данія)",
    description:
      "Іван Кохан — веб-розробник у Данії, засновник WebHjerte. Швидкі сайти на Next.js, SEO і реклама Meta для малого бізнесу.",
    ogDescription:
      "Веб-розробник, який живе в Данії. Засновник WebHjerte — швидкі сайти на Next.js, SEO та соцмережі для малого бізнесу.",
    keywords: [
      "Іван Кохан",
      "веб-розробник Данія",
      "WebHjerte",
      "сайт для малого бізнесу",
      "SEO Данія",
      "Next.js розробник",
    ],
  },
  a11y: {
    skip: "Перейти до вмісту",
    home: "Іван Кохан — головна",
    menu: "Відкрити меню",
    close: "Закрити меню",
    primaryNav: "Основне меню",
    language: "Мова",
    backToTop: "Нагору",
    external: "відкривається в новій вкладці",
  },
  nav: {
    about: "Про мене",
    services: "Послуги",
    webhjerte: "WebHjerte",
    work: "Проєкти",
    skills: "Навички",
    contact: "Контакти",
    cta: "Поговорімо",
  },
  hero: {
    status: "Беру нові проєкти",
    title: { pre: "Сайти", em: "з серцем." },
    lead: "Я — Іван Кохан, веб-розробник і засновник WebHjerte. Створюю швидкі сайти на Next.js з готовим SEO для малого бізнесу в Данії та за її межами.",
    cta1: "Почати проєкт",
    cta2: "Мої роботи",
    location: "Живу в Данії",
    scroll: "Гортай",
    facts: [
      { big: "3", small: "мови" },
      { big: "1", small: "людина в студії" },
      { big: "Фікс", small: "ціни на пакети" },
    ],
  },
  marquee: [
    "Сайти на Next.js",
    "Технічне SEO",
    "Google Search Console",
    "Реклама Meta",
    "Instagram · Facebook · LinkedIn",
    "Автоматизація та AI-інструменти",
  ],
  about: {
    label: "Про мене",
    title: "Веб-розробник, якому важливий бізнес за сайтом.",
    manifesto:
      "Я створюю сайти, які працюють так само наполегливо, як люди за ними. Мінімалістичні зовні, серйозні всередині — швидкі, знайдені в пошуку й зроблені з турботою. Я думаю про власника, якому потрібен сайт, що приводить клієнтів.",
    paragraphs: [
      "Я веб-розробник і засновник WebHjerte — веб-студії з однієї людини, зареєстрованої в Данії. Допомагаю малому бізнесу із сайтами, SEO та соцмережами — напряму, без посередників.",
    ],
    factsTitle: "Коротко",
    facts: [
      { k: "Живу", v: "Данія" },
      { k: "Студія", v: "WebHjerte" },
      { k: "Мови", v: "Українська · English · Dansk" },
    ],
  },
  services: {
    label: "Послуги",
    title: "Усе, щоб ваш сайт справді приводив клієнтів.",
    intro:
      "Одна людина від першого дзвінка до запуску — без посередників і сюрпризів.",
    items: [
      {
        title: "Сайти",
        text: "Сучасні сайти на Next.js (App Router) для малого бізнесу. Фіксовані пакети, швидка реалізація та одна людина, з якою ви говорите напряму.",
        tags: ["Next.js", "React", "Vercel", "Адаптивність"],
      },
      {
        title: "SEO",
        text: "Технічне SEO, структуровані дані, швидкість і Google Search Console — щоб потрібні люди знаходили вас у Google.",
        tags: ["Search Console", "Schema.org", "Core Web Vitals", "Локальне SEO"],
      },
      {
        title: "Соцмережі та реклама",
        text: "Реклама Meta і контент для Instagram, Facebook та LinkedIn, що виглядає й звучить як ваш сайт.",
        tags: ["Meta Ads", "Instagram", "Facebook", "LinkedIn"],
      },
      {
        title: "Автоматизація та AI",
        text: "Власні автоматизації та AI-інструменти: процеси з Claude Code, проєкти на Raspberry Pi 5 і дашборди, що економлять години.",
        tags: ["Claude Code", "Raspberry Pi 5", "Дашборди", "Linux"],
      },
    ],
  },
  webhjerte: {
    label: "WebHjerte",
    title: "WebHjerte — моя студія, моє серце.",
    text: "WebHjerte (данською «веб-серце») — моя власна веб-студія, зареєстрована в Данії. Ідея проста: сайти, зроблені з турботою, для людей, яким небайдужий їхній бізнес.",
    points: [
      { title: "Фіксовані пакети", text: "Ви знаєте обсяг і ціну ще до старту." },
      { title: "Швидка реалізація", text: "Невеликі сфокусовані проєкти — без місяців зустрічей." },
      { title: "Одна людина", text: "Ви спілкуєтеся з тим, хто створює ваш сайт. Завжди." },
    ],
    visit: "Відкрити webhjerte.dk",
    follow: "@WebHjerte в Instagram",
  },
  skills: {
    label: "Навички",
    title: "Інструменти, яким довіряю, і звички, яких дотримуюсь.",
    intro: "Практичний стек для швидкої розробки — і людські навички, завдяки яким проєкти йдуть гладко.",
    groups: [
      {
        title: "Розробка",
        items: [
          { name: "Next.js", note: "App Router, SSR/SSG, SEO насамперед" },
          { name: "React", note: "Компоненти та інтерактивний UI" },
          { name: "TypeScript", note: "Надійніший і підтримуваний код" },
          { name: "Tailwind CSS", note: "Швидкий, послідовний стиль" },
          { name: "Vercel", note: "Деплой і хостинг" },
          { name: "Git", note: "Контроль версій і робочий процес" },
        ],
      },
      {
        title: "Запуск і автоматизація",
        items: [
          { name: "Raspberry Pi / Linux", note: "Домашній сервер і експерименти" },
          { name: "SSH", note: "Віддалений доступ і деплой" },
          { name: "Claude Code", note: "Розробка з AI-помічником" },
          { name: "Дашборди", note: "Власні інструменти й автоматизації" },
        ],
      },
      {
        title: "Зростання",
        items: [
          { name: "SEO", note: "Технічний і локальний пошук" },
          { name: "Google Search Console", note: "Індексація та ефективність" },
          { name: "Meta Ads", note: "Кампанії в Instagram і Facebook" },
          { name: "Контент", note: "Instagram, Facebook, LinkedIn" },
        ],
      },
    ],
  },
  projects: {
    label: "Проєкти",
    title: "Обрані роботи.",
    intro: "Справжні сайти для справжнього бізнесу — швидкі, зрозумілі й видимі в пошуку.",
    visit: "Відкрити сайт",
    drag: "Гортай",
    flagship: [
      {
        key: "webhjerte",
        tag: "Студія",
        title: "WebHjerte",
        text: "Сайт моєї студії — мінімалістичний, позитивний і створений викликати довіру та ранжуватися в данському пошуку.",
      },
      {
        key: "lonbaeks",
        tag: "Автошкола",
        title: "Lønbæks",
        text: "Сайт данської автошколи — зрозумілий, швидкий і зручний на телефоні.",
      },
      {
        key: "veka",
        tag: "Вікна",
        title: "Veka Center",
        text: "Сайт українського бізнесу з продажу вікон — орієнтований на продукт, швидкий і простий.",
      },
    ],
    moreTitle: "Більше робіт і концептів",
    more: {
      pizzle: "Сайт піцерії з онлайн-замовленням і керуванням меню.",
      hireon: "Платформа пошуку роботи з адмін-панеллю.",
      workout: "Дашборд фітнес-трекінгу з аналітикою прогресу.",
      vzlom: "Магазин сейфів із панеллю керування товарами.",
      clubhorse: "Інформаційний сайт кінного клубу — події, коні, членство.",
      ukraine: "Інформаційний сайт про війну в Україні.",
    },
    soon: "Фізіотерапія, спорт і авто — проєкти скоро з'являться.",
  },
  faq: {
    label: "FAQ",
    title: "Часті питання.",
    items: [
      {
        q: "Хто такий Іван Кохан?",
        a: "Іван Кохан — веб-розробник і засновник WebHjerte (webhjerte.dk), веб-студії з однієї людини, зареєстрованої в Данії.",
      },
      {
        q: "Чим займається WebHjerte?",
        a: "WebHjerte створює швидкі сайти на Next.js для малого бізнесу за фіксованими пакетами. Також допомагає з SEO, Google Search Console, рекламою Meta і контентом для Instagram, Facebook та LinkedIn.",
      },
      {
        q: "Які технології ви використовуєте?",
        a: "Next.js (App Router), React, TypeScript і Tailwind CSS із хостингом на Vercel, а також Git, Linux і Claude Code, щоб працювати швидше без компромісів у якості.",
      },
      {
        q: "Як виглядає співпраця?",
        a: "Ви працюєте з однією людиною від першого дзвінка до запуску. Я пропоную пакет із фіксованою ціною, роблю швидко, а після запуску ми домовляємось про SEO та зростання.",
      },
      {
        q: "Якими мовами можна спілкуватися?",
        a: "Українською, англійською та данською — обирайте ту, яка вам зручніша.",
      },
      {
        q: "Чи допоможете з SEO та соцмережами?",
        a: "Так. Я налаштовую технічне SEO та Google Search Console, веду рекламу Meta і контент для Instagram, Facebook та LinkedIn, щоб усе працювало в одному напрямку з вашим сайтом.",
      },
      {
        q: "Де ви знаходитесь?",
        a: "У Данії. Працюю віддалено з клієнтами по всій Данії та за її межами.",
      },
    ],
  },
  contact: {
    label: "Контакти",
    title: { pre: "Створімо щось", em: "з серцем." },
    lead: "Є проєкт, сайт, який не приносить результату, або просто ідея? Напишіть мені — відповідаю особисто українською, English або Dansk.",
    emailLabel: "Напишіть напряму",
    socialsTitle: "Я в мережі",
    form: {
      name: "Ваше імʼя",
      namePh: "Анна Хансен",
      email: "Email",
      emailPh: "anna@example.dk",
      website: "Ваш сайт (необовʼязково)",
      websitePh: "https://yoursite.dk",
      message: "Повідомлення",
      messagePh: "Розкажіть про свій бізнес і що вам потрібно…",
      send: "Надіслати",
      sending: "Надсилаю…",
      sentTitle: "Повідомлення надіслано!",
      sentText: "Дякую — відповім особисто, зазвичай протягом 24 годин.",
      again: "Надіслати ще",
      error: "Щось пішло не так. Напишіть мені напряму на",
      invalid: "Вкажіть імʼя, коректний email і повідомлення.",
    },
  },
  footer: {
    tagline: "Веб-розробник і засновник WebHjerte. Швидкі сайти, чесне SEO — зроблено з серцем у Данії.",
    navTitle: "Навігація",
    socialTitle: "Соцмережі",
    madeIn: "Зроблено з",
    madeInIn: "у Данії",
    rights: "Усі права захищено.",
  },
};


const bs: Dict = {
  meta: {
    title: "Ivan Kohan — Web developer i osnivač WebHjerte (Danska)",
    description:
      "Ivan Kohan je web developer u Danskoj i osnivač WebHjerte. Brzi Next.js sajtovi, SEO i Meta oglasi za mala preduzeća.",
    ogDescription:
      "Web developer koji živi u Danskoj. Osnivač WebHjerte — brzi Next.js sajtovi, SEO i društvene mreže za mala preduzeća.",
    keywords: [
      "Ivan Kohan",
      "web developer Danska",
      "WebHjerte",
      "web sajt za mala preduzeća",
      "SEO Danska",
      "Next.js developer",
    ],
  },
  a11y: {
    skip: "Idi na sadržaj",
    home: "Ivan Kohan — početna",
    menu: "Otvori meni",
    close: "Zatvori meni",
    primaryNav: "Glavni meni",
    language: "Jezik",
    backToTop: "Nazad na vrh",
    external: "otvara se u novom tabu",
  },
  nav: {
    about: "O meni",
    services: "Usluge",
    webhjerte: "WebHjerte",
    work: "Projekti",
    skills: "Vještine",
    contact: "Kontakt",
    cta: "Hajde da razgovaramo",
  },
  hero: {
    status: "Preuzimam nove projekte",
    title: { pre: "Web-sajtovi sa", em: "srcem." },
    lead: "Ja sam Ivan Kohan — web developer i osnivač WebHjerte. Pravim brze Next.js sajtove spremne za SEO za mala preduzeća u Danskoj i šire.",
    cta1: "Pokreni projekat",
    cta2: "Pogledaj radove",
    location: "Živim u Danskoj",
    scroll: "Skroluj",
    facts: [
      { big: "3", small: "jezika" },
      { big: "1", small: "čovjek u studiju" },
      { big: "Fiksne", small: "cijene paketa" },
    ],
  },
  marquee: [
    "Next.js web-sajtovi",
    "Tehnički SEO",
    "Google Search Console",
    "Meta oglasi",
    "Instagram · Facebook · LinkedIn",
    "Automatizacija i AI alati",
  ],
  about: {
    label: "O meni",
    title: "Web developer kojem je stalo do biznisa iza sajta.",
    manifesto:
      "Pravim sajtove koji rade jednako naporno kao ljudi iza njih. Minimalistički izvana, ozbiljni iznutra — brzi, lako pronađeni i napravljeni s pažnjom. Mislim na vlasnika kojem treba sajt koji dovodi klijente.",
    paragraphs: [
      "Ja sam web developer i osnivač WebHjerte, web-studija s jednom osobom registrovanog u Danskoj. Pomažem malim preduzećima sa sajtovima, SEO-om i društvenim mrežama — direktno, bez posrednika.",
    ],
    factsTitle: "Ukratko",
    facts: [
      { k: "Živim u", v: "Danska" },
      { k: "Studio", v: "WebHjerte" },
      { k: "Jezici", v: "Ukrajinski · Engleski · Danski" },
    ],
  },
  services: {
    label: "Usluge",
    title: "Sve što vašem sajtu treba da zaista dovodi klijente.",
    intro:
      "Jedna osoba od prvog poziva do lansiranja — bez posrednika i iznenađenja.",
    items: [
      {
        title: "Web-sajtovi",
        text: "Moderni Next.js (App Router) sajtovi za mala preduzeća. Fiksni paketi, brza isporuka i jedna osoba s kojom direktno razgovarate.",
        tags: ["Next.js", "React", "Vercel", "Responzivno"],
      },
      {
        title: "SEO",
        text: "Tehnički SEO, strukturirani podaci, brzina i Google Search Console — da vas pravi ljudi pronađu na Googleu.",
        tags: ["Search Console", "Schema.org", "Core Web Vitals", "Lokalni SEO"],
      },
      {
        title: "Društvene mreže i oglasi",
        text: "Meta oglasi i sadržaj za Instagram, Facebook i LinkedIn koji izgleda i zvuči kao vaš sajt.",
        tags: ["Meta Ads", "Instagram", "Facebook", "LinkedIn"],
      },
      {
        title: "Automatizacija i AI",
        text: "Prilagođene automatizacije i AI alati: Claude Code tokovi rada, projekti na Raspberry Pi 5 i dashboardi koji štede sate.",
        tags: ["Claude Code", "Raspberry Pi 5", "Dashboardi", "Linux"],
      },
    ],
  },
  webhjerte: {
    label: "WebHjerte",
    title: "WebHjerte — moj studio, moje srce.",
    text: "WebHjerte (na danskom „web srce“) je moj vlastiti web-studio registrovan u Danskoj. Ideja je jednostavna: sajtovi napravljeni s pažnjom, za ljude kojima je stalo do njihovog biznisa.",
    points: [
      { title: "Fiksni paketi", text: "Obim i cijenu znate prije početka." },
      { title: "Brza isporuka", text: "Mali, fokusirani projekti isporučeni brzo — bez mjeseci sastanaka." },
      { title: "Jedna osoba", text: "Razgovarate s onim ko pravi vaš sajt. Uvijek." },
    ],
    visit: "Posjeti webhjerte.dk",
    follow: "@WebHjerte na Instagramu",
  },
  skills: {
    label: "Vještine",
    title: "Alati kojima vjerujem i navike kojih se držim.",
    intro: "Praktičan stack za brzu isporuku — i ljudske vještine zbog kojih projekti teku glatko.",
    groups: [
      {
        title: "Razvoj",
        items: [
          { name: "Next.js", note: "App Router, SSR/SSG, SEO na prvom mjestu" },
          { name: "React", note: "Komponente i interaktivni UI" },
          { name: "TypeScript", note: "Sigurniji kod koji se lako održava" },
          { name: "Tailwind CSS", note: "Brz, dosljedan stil" },
          { name: "Vercel", note: "Deploy i hosting" },
          { name: "Git", note: "Kontrola verzija i radni tok" },
        ],
      },
      {
        title: "Pokretanje i automatizacija",
        items: [
          { name: "Raspberry Pi / Linux", note: "Kućni server i eksperimenti" },
          { name: "SSH", note: "Udaljeni pristup i deployment" },
          { name: "Claude Code", note: "Razvoj uz AI asistenta" },
          { name: "Dashboardi", note: "Vlastiti alati i automatizacije" },
        ],
      },
      {
        title: "Rast",
        items: [
          { name: "SEO", note: "Tehnička i lokalna pretraga" },
          { name: "Google Search Console", note: "Indeksiranje i performanse" },
          { name: "Meta Ads", note: "Kampanje na Instagramu i Facebooku" },
          { name: "Sadržaj", note: "Instagram, Facebook, LinkedIn" },
        ],
      },
    ],
  },
  projects: {
    label: "Projekti",
    title: "Odabrani radovi.",
    intro: "Pravi sajtovi za prava preduzeća — brzi, jasni i vidljivi u pretrazi.",
    visit: "Posjeti sajt",
    drag: "Skroluj",
    flagship: [
      {
        key: "webhjerte",
        tag: "Studio",
        title: "WebHjerte",
        text: "Sajt mog studija — minimalistički, pozitivan i napravljen da izazove povjerenje i rangira se u danskoj pretrazi.",
      },
      {
        key: "lonbaeks",
        tag: "Autoškola",
        title: "Lønbæks",
        text: "Sajt za dansku autoškolu — jasan, brz i jednostavan za korištenje na mobitelu.",
      },
      {
        key: "veka",
        tag: "Prozori",
        title: "Veka Center",
        text: "Sajt za ukrajinsku firmu koja prodaje prozore — fokusiran na proizvod, brz i jednostavan.",
      },
    ],
    moreTitle: "Još radova i koncepata",
    more: {
      pizzle: "Sajt picerije s online naručivanjem i upravljanjem menijem.",
      hireon: "Platforma za traženje posla s admin panelom.",
      workout: "Dashboard za praćenje treninga s analitikom napretka.",
      vzlom: "Prodavnica sefova s panelom za upravljanje proizvodima.",
      clubhorse: "Informativni sajt konjičkog kluba — događaji, konji, članstvo.",
      ukraine: "Informativni sajt o ratu u Ukrajini.",
    },
    soon: "Fizioterapija, sport i auto-projekti — uskoro.",
  },
  faq: {
    label: "FAQ",
    title: "Dobra pitanja.",
    items: [
      {
        q: "Ko je Ivan Kohan?",
        a: "Ivan Kohan je web developer i osnivač WebHjerte (webhjerte.dk), web-studija s jednom osobom registrovanog u Danskoj.",
      },
      {
        q: "Čime se bavi WebHjerte?",
        a: "WebHjerte pravi brze Next.js sajtove za mala preduzeća po fiksnim paketima. Pomaže i oko SEO-a, Google Search Console, Meta oglasa i sadržaja za Instagram, Facebook i LinkedIn.",
      },
      {
        q: "Koje tehnologije koristite?",
        a: "Next.js (App Router), React, TypeScript i Tailwind CSS uz hosting na Vercelu, te Git, Linux i Claude Code kako bih radio brže bez kompromisa u kvalitetu.",
      },
      {
        q: "Kako izgleda saradnja?",
        a: "Radite s jednom osobom od prvog poziva do lansiranja. Predložim paket po fiksnoj cijeni, brzo napravim sajt, a nakon lansiranja dogovaramo dalje korake za SEO i rast.",
      },
      {
        q: "Na kojim jezicima možemo sarađivati?",
        a: "Na ukrajinskom, engleskom i danskom — izaberite onaj koji vam je najugodniji.",
      },
      {
        q: "Možete li pomoći oko SEO-a i društvenih mreža?",
        a: "Da. Postavljam tehnički SEO i Google Search Console te vodim Meta oglase i sadržaj za Instagram, Facebook i LinkedIn kako bi sve išlo u istom smjeru kao vaš sajt.",
      },
      {
        q: "Gdje se nalazite?",
        a: "U Danskoj. Radim na daljinu s klijentima širom Danske i šire.",
      },
    ],
  },
  contact: {
    label: "Kontakt",
    title: { pre: "Napravimo nešto", em: "sa srcem." },
    lead: "Imate projekat, sajt koji ne daje rezultate ili samo ideju? Pišite mi — odgovaram lično na ukrajinskom, engleskom ili danskom.",
    emailLabel: "Pišite direktno",
    socialsTitle: "Pronađite me online",
    form: {
      name: "Vaše ime",
      namePh: "Anna Hansen",
      email: "Email",
      emailPh: "anna@example.dk",
      website: "Vaš sajt (opcionalno)",
      websitePh: "https://vasajt.dk",
      message: "Poruka",
      messagePh: "Recite mi o svom biznisu i šta vam treba…",
      send: "Pošalji poruku",
      sending: "Šaljem…",
      sentTitle: "Poruka poslana!",
      sentText: "Hvala — javit ću vam se lično, obično u roku od 24 sata.",
      again: "Pošalji novu",
      error: "Nešto nije u redu. Pišite mi direktno na",
      invalid: "Unesite ime, ispravan email i poruku.",
    },
  },
  footer: {
    tagline: "Web developer i osnivač WebHjerte. Brzi sajtovi, iskren SEO — napravljeno sa srcem u Danskoj.",
    navTitle: "Navigacija",
    socialTitle: "Društvene mreže",
    madeIn: "Napravljeno sa",
    madeInIn: "u Danskoj",
    rights: "Sva prava zadržana.",
  },
};

const dictionaries: Record<Locale, Dict> = { en, da, uk, bs };

export function getDictionary(locale: Locale): Dict {
  return dictionaries[locale];
}
