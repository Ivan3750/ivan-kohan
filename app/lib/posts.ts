export type BlogLocale = "en" | "da" | "uk";

type Section = { h: string; p?: string[]; list?: string[] };

export type PostText = {
  title: string;
  description: string;
  intro: string;
  sections: Section[];
  outro?: string;
};

export type Post = {
  slug: string;
  date: string; // ISO
  emoji: string;
  minutes: number;
  tags: string[];
  t: Record<BlogLocale, PostText>;
};

export const posts: Post[] = [
  {
    slug: "google-search-console-setup",
    date: "2026-11-17",
    emoji: "🔎",
    minutes: 4,
    tags: ["SEO", "Google Search Console"],
    t: {
      en: {
        title: "Google Search Console for small businesses: set it up in 10 minutes",
        description:
          "A practical beginner's guide: verify your site, submit a sitemap, request indexing and read the three reports that actually matter.",
        intro:
          "Google Search Console (GSC) is free and shows how Google sees your website: which pages are indexed, which searches bring people in and what is broken. If you own a website, you should have it set up. Here is the short version.",
        sections: [
          {
            h: "1. Add and verify your site",
            p: [
              "Open Search Console and add a property. Choose “Domain” if you can edit DNS records — you verify once with a TXT record at your domain registrar and it covers http, https and every subdomain. If you can't touch DNS, use “URL prefix” and verify with an HTML tag or file instead.",
            ],
          },
          {
            h: "2. Submit your sitemap",
            p: [
              "Under “Sitemaps”, enter the path of your sitemap, usually sitemap.xml. It helps Google discover your pages faster. In Next.js you can generate it automatically with an app/sitemap.ts file.",
            ],
          },
          {
            h: "3. Request indexing for your key pages",
            p: [
              "Paste an important URL into the inspection bar at the top, wait for the result and click “Request indexing”. Do this for your home page and your most important pages after launch or a big update. There is no need to repeat it every day.",
            ],
          },
          {
            h: "4. The three reports worth checking",
            list: [
              "Performance — queries, clicks, impressions, click-through rate and average position. This shows what people actually search for.",
              "Pages (Indexing) — which pages are indexed and why others are not, for example “noindex”, redirects or duplicates.",
              "Experience / Core Web Vitals — whether your pages are fast and stable on mobile and desktop.",
            ],
          },
          {
            h: "5. Make it a weekly habit",
            p: [
              "Spend ten minutes a week: look for new errors, see which queries grow and improve the pages that get impressions but few clicks (usually a better title or description helps). Small, regular improvements beat big one-off rewrites.",
            ],
          },
        ],
        outro: "Set it up once, check it weekly, and let the data tell you what to improve next.",
      },
      da: {
        title: "Google Search Console til små virksomheder: sæt det op på 10 minutter",
        description:
          "En praktisk begyndervejledning: verificér din side, indsend sitemap, anmod om indeksering og læs de tre rapporter, der virkelig betyder noget.",
        intro:
          "Google Search Console (GSC) er gratis og viser, hvordan Google ser din hjemmeside: hvilke sider der er indekseret, hvilke søgninger der giver besøg, og hvad der er i stykker. Har du en hjemmeside, bør du have det sat op. Her er kortversionen.",
        sections: [
          {
            h: "1. Tilføj og verificér din side",
            p: [
              "Åbn Search Console og tilføj en ejendom. Vælg “Domæne”, hvis du kan redigere DNS-poster — du verificerer én gang med en TXT-post hos din domæneudbyder, og det dækker http, https og alle underdomæner. Kan du ikke ændre DNS, så brug “URL-præfiks” og verificér med et HTML-tag eller en fil.",
            ],
          },
          {
            h: "2. Indsend dit sitemap",
            p: [
              "Under “Sitemaps” indtaster du stien til dit sitemap, typisk sitemap.xml. Det hjælper Google med at finde dine sider hurtigere. I Next.js kan du generere det automatisk med en app/sitemap.ts-fil.",
            ],
          },
          {
            h: "3. Anmod om indeksering af dine vigtigste sider",
            p: [
              "Indsæt en vigtig URL i inspektionsfeltet øverst, vent på resultatet og klik “Anmod om indeksering”. Gør det for forsiden og dine vigtigste sider efter lancering eller en større opdatering. Du behøver ikke gøre det hver dag.",
            ],
          },
          {
            h: "4. De tre rapporter, der er værd at tjekke",
            list: [
              "Effektivitet — søgninger, klik, visninger, klikrate og gennemsnitlig placering. Her ser du, hvad folk faktisk søger efter.",
              "Sider (indeksering) — hvilke sider der er indekseret, og hvorfor andre ikke er, f.eks. “noindex”, omdirigeringer eller dubletter.",
              "Oplevelse / Core Web Vitals — om dine sider er hurtige og stabile på mobil og computer.",
            ],
          },
          {
            h: "5. Gør det til en ugentlig vane",
            p: [
              "Brug ti minutter om ugen: se efter nye fejl, find de søgninger der vokser, og forbedr de sider, der får visninger men få klik (ofte hjælper en bedre titel eller beskrivelse). Små, jævnlige forbedringer slår store engangsomskrivninger.",
            ],
          },
        ],
        outro: "Sæt det op én gang, tjek det ugentligt, og lad data vise, hvad du skal forbedre næste gang.",
      },
      uk: {
        title: "Google Search Console для малого бізнесу: налаштування за 10 хвилин",
        description:
          "Практичний гайд для початківців: підтвердіть сайт, додайте sitemap, запросіть індексацію та дивіться три звіти, які справді важливі.",
        intro:
          "Google Search Console (GSC) безкоштовний і показує, як Google бачить ваш сайт: які сторінки проіндексовано, які запити приводять людей і що зламано. Якщо у вас є сайт, GSC має бути налаштований. Ось коротка версія.",
        sections: [
          {
            h: "1. Додайте й підтвердіть сайт",
            p: [
              "Відкрийте Search Console і додайте ресурс. Обирайте «Домен», якщо можете редагувати DNS: один раз підтверджуєте TXT-записом у реєстратора домену, і це охоплює http, https та всі піддомени. Якщо DNS недоступний, оберіть «Префікс URL» і підтвердіть HTML-тегом або файлом.",
            ],
          },
          {
            h: "2. Додайте sitemap",
            p: [
              "У розділі «Файли Sitemap» вкажіть шлях до карти сайту, зазвичай sitemap.xml. Це допомагає Google швидше знаходити сторінки. У Next.js її можна генерувати автоматично через файл app/sitemap.ts.",
            ],
          },
          {
            h: "3. Запросіть індексацію ключових сторінок",
            p: [
              "Вставте важливу URL-адресу в поле перевірки зверху, дочекайтеся результату й натисніть «Запросити індексування». Зробіть це для головної та найважливіших сторінок після запуску чи великого оновлення. Повторювати щодня не потрібно.",
            ],
          },
          {
            h: "4. Три звіти, які варто дивитися",
            list: [
              "Ефективність — запити, кліки, покази, CTR і середня позиція. Тут видно, що люди справді шукають.",
              "Сторінки (індексування) — які сторінки проіндексовано й чому інші ні: «noindex», перенаправлення чи дублікати.",
              "Взаємодія / Core Web Vitals — чи швидкі й стабільні сторінки на мобільному та комп'ютері.",
            ],
          },
          {
            h: "5. Зробіть це щотижневою звичкою",
            p: [
              "Витрачайте десять хвилин на тиждень: шукайте нові помилки, дивіться, які запити ростуть, і покращуйте сторінки з показами, але малою кількістю кліків (часто допомагає кращий заголовок чи опис). Малі регулярні покращення працюють краще за рідкісні великі переписування.",
            ],
          },
        ],
        outro: "Налаштуйте один раз, перевіряйте щотижня й дозвольте даним підказувати, що покращувати далі.",
      },
    },
  },
  {
    slug: "nextjs-seo-checklist",
    date: "2026-11-17",
    emoji: "✅",
    minutes: 5,
    tags: ["SEO", "Next.js"],
    t: {
      en: {
        title: "Next.js SEO checklist for a small-business website",
        description:
          "Metadata, canonical URLs, sitemap, structured data, hreflang and speed — a practical checklist to make a Next.js website easy for Google to understand.",
        intro:
          "Next.js gives you a strong SEO foundation: server rendering, fast pages and a great metadata API. But you still need to use it well. Here is a checklist you can run through before you launch.",
        sections: [
          {
            h: "Content and structure",
            list: [
              "One unique <title> and meta description per page, written for people, not just robots (generateMetadata makes this easy).",
              "Exactly one <h1> per page and a logical order of <h2>/<h3> headings.",
              "Descriptive alt text on every meaningful image.",
              "Real text in the HTML — not only inside images or loaded after a click.",
            ],
          },
          {
            h: "Technical basics",
            list: [
              "Canonical URL on every page so duplicates don't compete.",
              "app/sitemap.ts and app/robots.ts, and the sitemap submitted in Google Search Console.",
              "Permanent (308/301) redirects for any old URLs you change.",
              "Correct status codes: real 404 pages for missing content.",
            ],
          },
          {
            h: "Multilingual sites",
            p: [
              "If your site has several languages, give each one its own URL (for example /da and /uk), set <html lang>, and add hreflang alternates including x-default so Google serves the right version to the right person.",
            ],
          },
          {
            h: "Structured data",
            p: [
              "Add JSON-LD that matches the page: Organization or LocalBusiness for a company, Person for a personal site, FAQPage for real questions, BlogPosting for articles. Only describe what is actually visible on the page, and test with Google's Rich Results Test.",
            ],
          },
          {
            h: "Speed and experience",
            list: [
              "next/image for images and next/font for fonts to avoid layout shifts.",
              "Keep client-side JavaScript small — render as much as possible on the server.",
              "Make it work and look good on mobile first.",
              "Add an Open Graph image so links look good when shared (opengraph-image.tsx).",
            ],
          },
        ],
        outro:
          "After launch, measure with Search Console and PageSpeed Insights, and improve one thing at a time.",
      },
      da: {
        title: "Next.js SEO-tjekliste til en lille virksomheds hjemmeside",
        description:
          "Metadata, canonical-URL'er, sitemap, struktureret data, hreflang og hastighed — en praktisk tjekliste, så Google nemt forstår din Next.js-hjemmeside.",
        intro:
          "Next.js giver et stærkt SEO-fundament: servergengivelse, hurtige sider og et godt metadata-API. Men du skal stadig bruge det rigtigt. Her er en tjekliste, du kan gennemgå før lancering.",
        sections: [
          {
            h: "Indhold og struktur",
            list: [
              "Én unik <title> og meta description pr. side, skrevet til mennesker og ikke kun robotter (generateMetadata gør det nemt).",
              "Præcis én <h1> pr. side og en logisk rækkefølge af <h2>/<h3>.",
              "Beskrivende alt-tekst på alle meningsfulde billeder.",
              "Rigtig tekst i HTML — ikke kun i billeder eller indlæst efter et klik.",
            ],
          },
          {
            h: "Tekniske grundting",
            list: [
              "Canonical-URL på hver side, så dubletter ikke konkurrerer.",
              "app/sitemap.ts og app/robots.ts, og sitemap indsendt i Google Search Console.",
              "Permanente (308/301) omdirigeringer for gamle URL'er, du ændrer.",
              "Korrekte statuskoder: rigtige 404-sider til manglende indhold.",
            ],
          },
          {
            h: "Flersprogede sider",
            p: [
              "Har din side flere sprog, så giv hvert sprog sin egen URL (f.eks. /da og /uk), sæt <html lang>, og tilføj hreflang-alternativer inkl. x-default, så Google viser den rigtige version til den rigtige person.",
            ],
          },
          {
            h: "Struktureret data",
            p: [
              "Tilføj JSON-LD, der matcher siden: Organization eller LocalBusiness for en virksomhed, Person for en personlig side, FAQPage til rigtige spørgsmål, BlogPosting til artikler. Beskriv kun det, der faktisk kan ses på siden, og test med Googles Rich Results Test.",
            ],
          },
          {
            h: "Hastighed og oplevelse",
            list: [
              "next/image til billeder og next/font til skrifttyper for at undgå layoutspring.",
              "Hold klient-JavaScript småt — gengiv så meget som muligt på serveren.",
              "Gør det godt på mobil først.",
              "Tilføj et Open Graph-billede, så links ser pæne ud, når de deles (opengraph-image.tsx).",
            ],
          },
        ],
        outro:
          "Efter lancering: mål med Search Console og PageSpeed Insights, og forbedr én ting ad gangen.",
      },
      uk: {
        title: "SEO-чекліст Next.js для сайту малого бізнесу",
        description:
          "Метадані, canonical, sitemap, структуровані дані, hreflang і швидкість — практичний чекліст, щоб Google легко розумів ваш сайт на Next.js.",
        intro:
          "Next.js дає сильну SEO-основу: серверний рендеринг, швидкі сторінки й чудовий API метаданих. Але ним треба вміти користуватися. Ось чекліст, який варто пройти перед запуском.",
        sections: [
          {
            h: "Контент і структура",
            list: [
              "Один унікальний <title> і meta description на сторінку, написані для людей, а не лише для роботів (generateMetadata це спрощує).",
              "Рівно один <h1> на сторінку та логічний порядок заголовків <h2>/<h3>.",
              "Змістовний alt-текст на всіх важливих зображеннях.",
              "Справжній текст в HTML — а не лише в зображеннях чи після кліку.",
            ],
          },
          {
            h: "Технічна база",
            list: [
              "Canonical-URL на кожній сторінці, щоб дублікати не конкурували.",
              "app/sitemap.ts і app/robots.ts, а sitemap додано в Google Search Console.",
              "Постійні (308/301) редиректи для старих адрес, які ви змінюєте.",
              "Правильні коди відповіді: справжні 404 для неіснуючих сторінок.",
            ],
          },
          {
            h: "Багатомовні сайти",
            p: [
              "Якщо на сайті кілька мов, дайте кожній власну адресу (наприклад, /da та /uk), задайте <html lang> і додайте hreflang, включно з x-default, щоб Google показував правильну версію правильній людині.",
            ],
          },
          {
            h: "Структуровані дані",
            p: [
              "Додайте JSON-LD, що відповідає сторінці: Organization або LocalBusiness для компанії, Person для персонального сайту, FAQPage для реальних питань, BlogPosting для статей. Описуйте лише те, що справді видно на сторінці, і перевіряйте в Rich Results Test від Google.",
            ],
          },
          {
            h: "Швидкість і досвід користувача",
            list: [
              "next/image для зображень і next/font для шрифтів, щоб уникати стрибків макета.",
              "Тримайте клієнтський JavaScript малим — рендерте якомога більше на сервері.",
              "Спершу добре працюйте на мобільному.",
              "Додайте Open Graph-зображення, щоб посилання гарно виглядали при поширенні (opengraph-image.tsx).",
            ],
          },
        ],
        outro:
          "Після запуску вимірюйте через Search Console і PageSpeed Insights та покращуйте по одній речі за раз.",
      },
    },
  },
  {
    slug: "healthy-habits-desk-work",
    date: "2026-11-17",
    emoji: "💪",
    minutes: 3,
    tags: ["Habits", "Health"],
    t: {
      en: {
        title: "Healthy habits for people who work at a computer",
        description:
          "Simple, realistic habits for desk work: movement, strength training, eating well, sleep and a tiny habit tracker. General tips, not medical advice.",
        intro:
          "Sitting at a computer all day is easy on the schedule and hard on the body. You don't need a perfect routine — a few small habits, repeated, make the biggest difference. Here are the ones worth starting with.",
        sections: [
          {
            h: "Move a little every hour",
            p: [
              "Stand up, stretch or walk for a couple of minutes each hour. A simple timer works. The point is to break long stretches of sitting, not to do a full workout.",
            ],
          },
          {
            h: "Strength training 2–3 times a week",
            p: [
              "Strength training supports posture, energy and long-term health. Short, consistent sessions beat rare, heroic ones. Start light, learn the technique and add weight slowly.",
            ],
          },
          {
            h: "Eat simply and plan ahead",
            list: [
              "Prepare easy meals in advance so you don't decide when you're tired.",
              "Include protein and vegetables in most meals.",
              "Keep water on your desk.",
            ],
          },
          {
            h: "Protect your eyes and sleep",
            list: [
              "Try the 20-20-20 idea: every 20 minutes, look at something about 20 feet (6 metres) away for 20 seconds.",
              "Keep a regular sleep schedule and put screens away before bed when you can.",
            ],
          },
          {
            h: "Track one or two habits",
            p: [
              "Don't track everything. Pick one or two habits — for example “walk 20 minutes” and “train 3×/week” — and tick them off every day. Seeing a streak is surprisingly motivating.",
            ],
          },
        ],
        outro:
          "These are general ideas, not medical advice. If you have health concerns, talk to a professional — and start small.",
      },
      da: {
        title: "Sunde vaner, når du arbejder ved en computer",
        description:
          "Enkle, realistiske vaner til skrivebordsarbejde: bevægelse, styrketræning, sund mad, søvn og en lille vanetracker. Generelle råd, ikke lægelig rådgivning.",
        intro:
          "At sidde ved en computer hele dagen er nemt for kalenderen, men hårdt for kroppen. Du behøver ikke en perfekt rutine — et par små vaner, gentaget, gør den største forskel. Her er dem, det er værd at starte med.",
        sections: [
          {
            h: "Bevæg dig lidt hver time",
            p: [
              "Rejs dig, stræk ud eller gå et par minutter hver time. En simpel timer virker. Pointen er at bryde lange stræk med siddende arbejde, ikke at lave en hel træning.",
            ],
          },
          {
            h: "Styrketræning 2–3 gange om ugen",
            p: [
              "Styrketræning understøtter kropsholdning, energi og sundhed på langt sigt. Korte, regelmæssige sessioner slår sjældne, heroiske. Start let, lær teknikken og øg vægten langsomt.",
            ],
          },
          {
            h: "Spis enkelt og planlæg",
            list: [
              "Forbered nemme måltider på forhånd, så du ikke skal beslutte, når du er træt.",
              "Tag protein og grøntsager med i de fleste måltider.",
              "Hav vand stående på skrivebordet.",
            ],
          },
          {
            h: "Pas på øjne og søvn",
            list: [
              "Prøv 20-20-20-ideen: hvert 20. minut kigger du på noget ca. 6 meter væk i 20 sekunder.",
              "Hold en fast søvnrytme, og læg skærmene væk før sengetid, når det er muligt.",
            ],
          },
          {
            h: "Track en eller to vaner",
            p: [
              "Track ikke alt. Vælg en eller to vaner — f.eks. “gå 20 minutter” og “træn 3×/uge” — og sæt kryds hver dag. At se en stribe er overraskende motiverende.",
            ],
          },
        ],
        outro:
          "Det er generelle idéer, ikke lægelig rådgivning. Har du helbredsbekymringer, så tal med en fagperson — og start småt.",
      },
      uk: {
        title: "Здорові звички для тих, хто працює за комп'ютером",
        description:
          "Прості реалістичні звички для офісної роботи: рух, силові тренування, харчування, сон і маленький трекер звичок. Загальні поради, не медична консультація.",
        intro:
          "Цілий день за комп'ютером — зручно для графіка, але важко для тіла. Ідеальний режим не потрібен: кілька малих звичок, які повторюєш, дають найбільший ефект. Ось з чого варто почати.",
        sections: [
          {
            h: "Трохи рухайтеся щогодини",
            p: [
              "Вставайте, розтягуйтеся чи пройдіться кілька хвилин щогодини. Допоможе простий таймер. Мета — перервати довге сидіння, а не зробити повне тренування.",
            ],
          },
          {
            h: "Силові тренування 2–3 рази на тиждень",
            p: [
              "Силові тренування підтримують поставу, енергію та довгострокове здоров'я. Короткі регулярні заняття кращі за рідкісні героїчні. Починайте легко, вивчіть техніку й повільно додавайте вагу.",
            ],
          },
          {
            h: "Їжте просто й плануйте наперед",
            list: [
              "Готуйте прості страви заздалегідь, щоб не вирішувати, коли втомилися.",
              "Додавайте білок і овочі до більшості прийомів їжі.",
              "Тримайте воду на столі.",
            ],
          },
          {
            h: "Бережіть очі та сон",
            list: [
              "Спробуйте правило 20-20-20: кожні 20 хвилин дивіться на щось за приблизно 6 метрів 20 секунд.",
              "Дотримуйтеся режиму сну й за можливості прибирайте екрани перед сном.",
            ],
          },
          {
            h: "Відстежуйте одну-дві звички",
            p: [
              "Не відстежуйте все. Оберіть одну-дві звички — наприклад, «ходити 20 хвилин» і «тренуватися 3 рази на тиждень» — і щодня ставте позначку. Серія днів напрочуд мотивує.",
            ],
          },
        ],
        outro:
          "Це загальні ідеї, а не медична порада. Якщо є проблеми зі здоров'ям, зверніться до фахівця — і починайте з малого.",
      },
    },
  },
];

export const blogLocales: BlogLocale[] = ["en", "da", "uk"];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function postsSorted() {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}
