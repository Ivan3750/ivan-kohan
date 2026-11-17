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
  minutes: number;
  tags: string[];
  t: Record<BlogLocale, PostText>;
};

export const posts: Post[] = [
  {
    slug: "google-search-console-setup",
    date: "2026-11-17",
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
    slug: "website-checklist-small-business",
    date: "2026-11-17",
    minutes: 4,
    tags: ["Website", "Small business"],
    t: {
      en: {
        title: "Is your website working for you? A simple checklist",
        description:
          "Seven quick questions to find out whether your website brings you customers — no technical knowledge needed.",
        intro:
          "A website is not finished when it goes online. It is finished when it brings you customers. Here are seven questions you can answer in ten minutes, without any technical knowledge.",
        sections: [
          {
            h: "1. Can people tell what you do in five seconds?",
            p: [
              "Open your homepage on your phone. Within a few seconds a stranger should understand what you offer, who it is for and where you work. If you need a paragraph to explain it, the page needs a clearer headline.",
            ],
          },
          {
            h: "2. Is it easy to contact you?",
            p: [
              "Your phone number, email or a contact button should be visible without scrolling or searching. Every extra click costs you enquiries.",
            ],
          },
          {
            h: "3. Does it load fast on a phone?",
            p: [
              "Most visitors arrive on mobile. If a page takes more than a few seconds to appear, many people leave. Very large photos are the most common cause.",
            ],
          },
          {
            h: "4. Can people find you on Google?",
            list: [
              "Search your business name, and your service plus your town. Do you appear?",
              "Each page should have its own clear title and a short description.",
              "If you serve local customers, add your business to Google Business Profile.",
            ],
          },
          {
            h: "5. Does it build trust?",
            p: [
              "Real photos, clear prices or price ranges, customer reviews and your company details make people feel safe to get in touch.",
            ],
          },
          {
            h: "6. Is it up to date?",
            p: [
              "Old opening hours, outdated prices or a copyright year from five years ago make visitors doubt you. Review your content a few times a year.",
            ],
          },
          {
            h: "7. Do you know how many people visit?",
            p: [
              "Free tools such as Google Search Console show which searches bring visitors. Look at them once a month.",
            ],
          },
        ],
        outro: "You don't need to fix everything at once. Pick the two weakest points and improve them first.",
      },
      da: {
        title: "Arbejder din hjemmeside for dig? En enkel tjekliste",
        description:
          "Syv hurtige spørgsmål, der viser, om din hjemmeside skaffer dig kunder — uden teknisk viden.",
        intro:
          "En hjemmeside er ikke færdig, når den går online. Den er færdig, når den skaffer dig kunder. Her er syv spørgsmål, du kan besvare på ti minutter uden teknisk viden.",
        sections: [
          {
            h: "1. Kan folk se, hvad du laver, på fem sekunder?",
            p: [
              "Åbn din forside på mobilen. Inden for få sekunder skal en fremmed forstå, hvad du tilbyder, hvem det er til, og hvor du arbejder. Skal du bruge et helt afsnit til at forklare det, har siden brug for en tydeligere overskrift.",
            ],
          },
          {
            h: "2. Er det nemt at kontakte dig?",
            p: [
              "Dit telefonnummer, din e-mail eller en kontaktknap skal være synlig uden at scrolle eller lede. Hvert ekstra klik koster dig henvendelser.",
            ],
          },
          {
            h: "3. Loader den hurtigt på mobilen?",
            p: [
              "De fleste besøgende kommer fra mobil. Tager en side mere end et par sekunder at vise, går mange igen. Meget store billeder er den almindeligste årsag.",
            ],
          },
          {
            h: "4. Kan folk finde dig på Google?",
            list: [
              "Søg på dit firmanavn og på din ydelse plus din by. Dukker du op?",
              "Hver side skal have sin egen tydelige titel og en kort beskrivelse.",
              "Betjener du lokale kunder, så tilføj din virksomhed i Google Business Profile.",
            ],
          },
          {
            h: "5. Skaber den tillid?",
            p: [
              "Rigtige billeder, tydelige priser eller prisintervaller, kundeanmeldelser og dine virksomhedsoplysninger gør, at folk føler sig trygge ved at tage kontakt.",
            ],
          },
          {
            h: "6. Er den opdateret?",
            p: [
              "Gamle åbningstider, forældede priser eller et copyright-årstal fra for fem år siden får besøgende til at tvivle. Gennemgå dit indhold et par gange om året.",
            ],
          },
          {
            h: "7. Ved du, hvor mange der besøger den?",
            p: [
              "Gratis værktøjer som Google Search Console viser, hvilke søgninger der giver besøg. Kig på dem en gang om måneden.",
            ],
          },
        ],
        outro: "Du behøver ikke rette alt på én gang. Vælg de to svageste punkter og forbedr dem først.",
      },
      uk: {
        title: "Чи працює ваш сайт на вас? Простий чекліст",
        description:
          "Сім швидких запитань, які покажуть, чи приводить сайт клієнтів, — без технічних знань.",
        intro:
          "Сайт не готовий, коли він з'явився в інтернеті. Він готовий, коли приводить клієнтів. Ось сім запитань, на які можна відповісти за десять хвилин без технічних знань.",
        sections: [
          {
            h: "1. Чи зрозуміло за п'ять секунд, чим ви займаєтесь?",
            p: [
              "Відкрийте головну сторінку на телефоні. За кілька секунд незнайомець має зрозуміти, що ви пропонуєте, для кого і де працюєте. Якщо для пояснення потрібен цілий абзац, заголовок треба зробити зрозумілішим.",
            ],
          },
          {
            h: "2. Чи легко з вами зв'язатися?",
            p: [
              "Телефон, email або кнопка зв'язку мають бути видимі без прокручування й пошуків. Кожен зайвий клік коштує вам звернень.",
            ],
          },
          {
            h: "3. Чи швидко він вантажиться на телефоні?",
            p: [
              "Більшість відвідувачів приходять з мобільного. Якщо сторінка відкривається довше кількох секунд, багато людей йдуть. Найчастіша причина — надто великі фото.",
            ],
          },
          {
            h: "4. Чи знаходять вас у Google?",
            list: [
              "Введіть назву бізнесу, а також послугу й місто. Чи є ви в результатах?",
              "Кожна сторінка має мати власний зрозумілий заголовок і короткий опис.",
              "Якщо працюєте з місцевими клієнтами, додайте бізнес у Google Business Profile.",
            ],
          },
          {
            h: "5. Чи викликає він довіру?",
            p: [
              "Справжні фото, зрозумілі ціни або діапазони, відгуки клієнтів і дані про компанію допомагають людям звернутися без остраху.",
            ],
          },
          {
            h: "6. Чи він актуальний?",
            p: [
              "Старі години роботи, застарілі ціни чи рік копірайту п'ятирічної давності змушують сумніватися. Переглядайте вміст кілька разів на рік.",
            ],
          },
          {
            h: "7. Чи знаєте ви, скільки людей його відвідує?",
            p: [
              "Безкоштовні інструменти, як-от Google Search Console, показують, які запити приводять відвідувачів. Заглядайте туди раз на місяць.",
            ],
          },
        ],
        outro: "Не потрібно виправляти все одразу. Оберіть два найслабші місця й покращіть їх першими.",
      },
    },
  },
  {
    slug: "healthy-habits-desk-work",
    date: "2026-11-17",
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
