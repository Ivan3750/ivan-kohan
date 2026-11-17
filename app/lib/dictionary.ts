import type { Locale } from "./site";

const en = {
  meta: {
    title: "Ivan Kohan — From Ukraine to Denmark, founder of WebHjerte",
    description:
      "Ivan Kohan's personal site: a short story from Ukraine to Denmark, languages, studies and WebHjerte, a small web studio.",
    ogDescription:
      "From Ukraine to Denmark — a short life story, and WebHjerte, a small web studio.",
    keywords: [
      "Ivan Kohan",
      "Ukrainian in Denmark",
      "WebHjerte founder",
      "personal website",
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
    story: "Story",
    studio: "Studio",
    contact: "Contact",
    cta: "Say hi",
  },
  hero: {
    name: "I'm Ivan Kohan.",
    line: "From Ukraine. Living in Denmark. Still learning, still building.",
    scroll: "Start the story",
  },
  story: {
    label: "My story",
    title: "A life in six chapters.",
    intro: "Not a CV — just the short version of where I come from and where I'm heading.",
    from: "Ukraine",
    to: "Denmark",
    chapters: [
      { name: "Roots", head: "Born in Ukraine.", text: "Where my language and my culture come from — and where a part of me always stays." },
      { name: "Crossing", head: "A new home in Denmark.", text: "A new country, a new language, a new way of living. Every day teaches me something." },
      { name: "Voices", head: "Four languages, one me.", text: "Ukrainian at the core, English and Danish growing every day — and a little Bosnian on the side." },
      { name: "Books", head: "Back to studying.", text: "An engineering preparatory course: the first step towards Software Engineering." },
      { name: "Side quest", head: "A small studio.", text: "Along the way I started WebHjerte — a one-person web studio that builds websites for small businesses." },
      { name: "Next", head: "To be continued.", text: "Software Engineering is next. I'm open to new things — there will be more chapters." },
    ],
  },
  studio: {
    label: "Side quest",
    title: "WebHjerte — a small web studio.",
    text: "Along the way I started my own web studio, registered in Denmark. It builds simple, fast websites for small businesses — one project at a time.",
    visit: "Visit webhjerte.dk",
    follow: "@WebHjerte on Instagram",
    madeTitle: "Made so far",
  },
  pages: {
    contact: { title: "Contact", intro: "Say hi, ask a question or talk about a project. I reply personally." },
  },
  home: {
    band: { title: "Say hi.", text: "A question, a project or just a hello — I read every message.", cta: "Write to me" },
  },
  contact: {
    label: "Contact",
    title: { pre: "Let's talk —", em: "say hello." },
    lead: "Want to collaborate, ask something or just say hi? Write to me — I answer personally in English, Dansk or Українська.",
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
      messagePh: "What's on your mind?",
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
    tagline: "From Ukraine, living in Denmark. Founder of WebHjerte.",
    navTitle: "Navigate",
    socialTitle: "Social",
    rights: "All rights reserved.",
    support: "Support Ukraine — UNITED24",
  },
};

export type Dict = typeof en;

const da: Dict = {
  meta: {
    title: "Ivan Kohan — fra Ukraine til Danmark, grundlægger af WebHjerte",
    description:
      "Ivan Kohans personlige side: en kort historie fra Ukraine til Danmark, sprog, studier og WebHjerte, et lille webstudie.",
    ogDescription:
      "Fra Ukraine til Danmark — en kort livshistorie og WebHjerte, et lille webstudie.",
    keywords: [
      "Ivan Kohan",
      "ukrainer i Danmark",
      "WebHjerte grundlægger",
      "personlig hjemmeside",
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
    story: "Historie",
    studio: "Studie",
    contact: "Kontakt",
    cta: "Sig hej",
  },
  hero: {
    name: "Jeg er Ivan Kohan.",
    line: "Fra Ukraine. Bosat i Danmark. Stadig i gang med at lære og bygge.",
    scroll: "Start historien",
  },
  story: {
    label: "Min historie",
    title: "Et liv i seks kapitler.",
    intro: "Ikke et CV — bare kortversionen af, hvor jeg kommer fra, og hvor jeg er på vej hen.",
    from: "Ukraine",
    to: "Danmark",
    chapters: [
      { name: "Rødder", head: "Født i Ukraine.", text: "Her kommer mit sprog og min kultur fra — og her bliver en del af mig altid." },
      { name: "Overgang", head: "Et nyt hjem i Danmark.", text: "Et nyt land, et nyt sprog, en ny hverdag. Hver dag lærer jeg noget nyt." },
      { name: "Stemmer", head: "Fire sprog, ét jeg.", text: "Ukrainsk i kernen, engelsk og dansk der vokser hver dag — og lidt bosnisk ved siden af." },
      { name: "Bøger", head: "Tilbage til studierne.", text: "Et forberedende ingeniørkursus: det første skridt mod Software Engineering." },
      { name: "Sidemission", head: "Et lille studie.", text: "Undervejs startede jeg WebHjerte — et webstudie med én mand, der bygger hjemmesider til små virksomheder." },
      { name: "Næste", head: "Fortsættelse følger.", text: "Software Engineering er næste skridt. Jeg er åben over for nyt — der kommer flere kapitler." },
    ],
  },
  studio: {
    label: "Sidemission",
    title: "WebHjerte — et lille webstudie.",
    text: "Undervejs startede jeg mit eget webstudie, registreret i Danmark. Det bygger enkle, hurtige hjemmesider til små virksomheder — ét projekt ad gangen.",
    visit: "Besøg webhjerte.dk",
    follow: "@WebHjerte på Instagram",
    madeTitle: "Lavet indtil nu",
  },
  pages: {
    contact: { title: "Kontakt", intro: "Sig hej, stil et spørgsmål eller snak om et projekt. Jeg svarer personligt." },
  },
  home: {
    band: { title: "Sig hej.", text: "Et spørgsmål, et projekt eller bare et hej — jeg læser alle beskeder.", cta: "Skriv til mig" },
  },
  contact: {
    label: "Kontakt",
    title: { pre: "Lad os snakke —", em: "sig hej." },
    lead: "Vil du samarbejde, spørge om noget eller bare sige hej? Skriv til mig — jeg svarer personligt på dansk, English eller Українська.",
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
      messagePh: "Hvad har du på hjerte?",
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
    tagline: "Fra Ukraine, bosat i Danmark. Grundlægger af WebHjerte.",
    navTitle: "Navigation",
    socialTitle: "Sociale medier",
    rights: "Alle rettigheder forbeholdes.",
    support: "Støt Ukraine — UNITED24",
  },
};

const uk: Dict = {
  meta: {
    title: "Іван Кохан — з України до Данії, засновник WebHjerte",
    description:
      "Особистий сайт Івана Кохана: коротка історія з України до Данії, мови, навчання та WebHjerte — маленька веб-студія.",
    ogDescription:
      "З України до Данії — коротка історія життя та WebHjerte, маленька веб-студія.",
    keywords: [
      "Іван Кохан",
      "українець у Данії",
      "засновник WebHjerte",
      "особистий сайт",
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
    story: "Історія",
    studio: "Студія",
    contact: "Контакти",
    cta: "Привітатися",
  },
  hero: {
    name: "Я — Іван Кохан.",
    line: "З України. Живу в Данії. Досі вчуся й створюю.",
    scroll: "Почати історію",
  },
  story: {
    label: "Моя історія",
    title: "Життя в шести розділах.",
    intro: "Не резюме — лише коротка версія того, звідки я і куди рухаюся.",
    from: "Україна",
    to: "Данія",
    chapters: [
      { name: "Коріння", head: "Народився в Україні.", text: "Звідси моя мова й культура — і тут частина мене залишається назавжди." },
      { name: "Перехід", head: "Новий дім у Данії.", text: "Нова країна, нова мова, новий ритм життя. Щодня я вчуся чогось нового." },
      { name: "Голоси", head: "Чотири мови, одне я.", text: "Українська в основі, англійська та данська ростуть щодня — і трохи боснійської." },
      { name: "Книжки", head: "Знову навчання.", text: "Підготовчий курс до інженерних програм: перший крок до Software Engineering." },
      { name: "Побічний квест", head: "Маленька студія.", text: "Дорогою я створив WebHjerte — веб-студію з однієї людини, яка робить сайти для малого бізнесу." },
      { name: "Далі", head: "Далі буде.", text: "Наступний крок — Software Engineering. Я відкритий до нового — розділів буде більше." },
    ],
  },
  studio: {
    label: "Побічний квест",
    title: "WebHjerte — маленька веб-студія.",
    text: "Дорогою я створив власну веб-студію, зареєстровану в Данії. Вона робить прості, швидкі сайти для малого бізнесу — проєкт за проєктом.",
    visit: "Відкрити webhjerte.dk",
    follow: "@WebHjerte в Instagram",
    madeTitle: "Зроблено досі",
  },
  pages: {
    contact: { title: "Контакти", intro: "Привітайтеся, поставте питання або обговоріть проєкт. Відповідаю особисто." },
  },
  home: {
    band: { title: "Привіт.", text: "Питання, проєкт чи просто привіт — я читаю кожне повідомлення.", cta: "Написати мені" },
  },
  contact: {
    label: "Контакти",
    title: { pre: "Поговорімо —", em: "привіт." },
    lead: "Хочете співпрацювати, запитати щось або просто привітатися? Напишіть мені — відповідаю особисто українською, English або Dansk.",
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
      messagePh: "Що у вас на думці?",
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
    tagline: "З України, живу в Данії. Засновник WebHjerte.",
    navTitle: "Навігація",
    socialTitle: "Соцмережі",
    rights: "Усі права захищено.",
    support: "Підтримати Україну — UNITED24",
  },
};

const bs: Dict = {
  meta: {
    title: "Ivan Kohan — iz Ukrajine u Dansku, osnivač WebHjerte",
    description:
      "Lični sajt Ivana Kohana: kratka priča iz Ukrajine u Dansku, jezici, studij i WebHjerte, mali web studio.",
    ogDescription:
      "Iz Ukrajine u Dansku — kratka životna priča i WebHjerte, mali web studio.",
    keywords: [
      "Ivan Kohan",
      "Ukrajinac u Danskoj",
      "osnivač WebHjerte",
      "lični sajt",
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
    story: "Priča",
    studio: "Studio",
    contact: "Kontakt",
    cta: "Pozdravi",
  },
  hero: {
    name: "Ja sam Ivan Kohan.",
    line: "Iz Ukrajine. Živim u Danskoj. Još uvijek učim i gradim.",
    scroll: "Započni priču",
  },
  story: {
    label: "Moja priča",
    title: "Život u šest poglavlja.",
    intro: "Nije CV — samo kratka verzija odakle dolazim i kuda idem.",
    from: "Ukrajina",
    to: "Danska",
    chapters: [
      { name: "Korijeni", head: "Rođen u Ukrajini.", text: "Odavde su moj jezik i kultura — i ovdje će dio mene uvijek ostati." },
      { name: "Prelazak", head: "Novi dom u Danskoj.", text: "Nova zemlja, novi jezik, novi način života. Svakog dana naučim nešto novo." },
      { name: "Glasovi", head: "Četiri jezika, jedan ja.", text: "Ukrajinski u temelju, engleski i danski rastu svakog dana — i malo bosanskog." },
      { name: "Knjige", head: "Opet učim.", text: "Pripremni kurs za inženjerske programe: prvi korak prema Software Engineeringu." },
      { name: "Sporedna misija", head: "Mali studio.", text: "Usput sam pokrenuo WebHjerte — web-studio s jednom osobom koji pravi sajtove za mala preduzeća." },
      { name: "Dalje", head: "Nastavlja se.", text: "Software Engineering je sljedeći korak. Otvoren sam za novo — bit će još poglavlja." },
    ],
  },
  studio: {
    label: "Sporedna misija",
    title: "WebHjerte — mali web studio.",
    text: "Usput sam pokrenuo vlastiti web-studio registrovan u Danskoj. Pravi jednostavne, brze sajtove za mala preduzeća — projekat po projekat.",
    visit: "Posjeti webhjerte.dk",
    follow: "@WebHjerte na Instagramu",
    madeTitle: "Napravljeno do sada",
  },
  pages: {
    contact: { title: "Kontakt", intro: "Pozdravite, postavite pitanje ili razgovarajmo o projektu. Odgovaram lično." },
  },
  home: {
    band: { title: "Pozdravi.", text: "Pitanje, projekat ili samo pozdrav — čitam svaku poruku.", cta: "Piši mi" },
  },
  contact: {
    label: "Kontakt",
    title: { pre: "Hajde da razgovaramo —", em: "pozdravi." },
    lead: "Želite saradnju, imate pitanje ili samo želite pozdraviti? Pišite mi — odgovaram lično na ukrajinskom, engleskom ili danskom.",
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
      messagePh: "Šta vam je na umu?",
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
    tagline: "Iz Ukrajine, živim u Danskoj. Osnivač WebHjerte.",
    navTitle: "Navigacija",
    socialTitle: "Društvene mreže",
    rights: "Sva prava zadržana.",
    support: "Podrži Ukrajinu — UNITED24",
  },
};

const dictionaries: Record<Locale, Dict> = { en, da, uk, bs };

export function getDictionary(locale: Locale): Dict {
  return dictionaries[locale];
}
