/**
 * Dr. Sabina Azimova — Atelier Data Store
 * Complete Bilingual (RU / EN) Data Dictionary
 */

export const siteContent = {
  ru: {
    brandName: "Д-р Сабина Азимова",
    brandRole: "Стоматология & Забота об улыбке",
    city: "Санкт-Петербург",
    nav: {
      philosophy: "Философия",
      kids: "Детям",
      gallery: "До / После",
      menu: "Услуги",
      journal: "Блог",
      booking: "Запись",
      cta: "Записаться"
    },
    hero: {
      tag: "Санкт-Петербург • Бережный прием",
      titleLine1: "Здоровая улыбка",
      titleLine2: "для всей семьи",
      statement: "Швейцарский протокол бережной гигиены AirFlow GBT, легкая адаптация детей без страха и слез, отбеливание и терапия в уютном кабинете в центре Петербурга.",
      btnBook: "Записаться на прием",
      btnTelegram: "Консультация в Telegram →",
      captionDoctor: "Доктор Сабина Азимова",
      captionCity: "Санкт-Петербург"
    },
    manifesto: [
      {
        num: "01",
        title: "Швейцарский протокол GBT",
        text: "Мягкий порошок на основе глицина деликатно очищает налет даже в труднодоступных местах, не царапая эмаль и не травмируя нежные десны."
      },
      {
        num: "02",
        title: "Любовь к детям & Адаптация",
        text: "Первый визит без страха и слез. В игровой форме учимся дружить со стоматологом, правильно держать щетку и с удовольствием ухаживать за зубами."
      },
      {
        num: "03",
        title: "Спокойный прием без боли",
        text: "Никакой спешки, навязанных услуг и белых халатов. Уютный кабинет в центре Петербурга, бережные руки и честный фотопротокол."
      }
    ],
    kids: {
      tag: "Особый подход к детям",
      title: "Стоматолог, к которому ребенок идет с улыбкой",
      desc: "Я искренне люблю детей и знаю, как важно бережно сформировать первое впечатление о докторе. Мы не пугаем строгими правилами и уколами: мы играем, знакомимся с инструментами, чистим зубки веселым персонажам и учимся правильно ухаживать за улыбкой дома.",
      features: [
        {
          title: "Игровая адаптация",
          desc: "Знакомимся со «щеткой-ветерком» и волшебным зеркальцем без слез."
        },
        {
          title: "Урок правильной чистки",
          desc: "Показываем наглядную технику и подбираем идеальную мягкую щетку и пасту."
        },
        {
          title: "Защита молочных зубов",
          desc: "Укрепление эмали ягодным фтор-гелем для надежной профилактики кариеса."
        },
        {
          title: "Подарок каждому герою",
          desc: "Закрепляем позитивный опыт маленьким памятным сувениром после приема."
        }
      ],
      btnAction: "Записать ребенка на адаптационный визит"
    },
    gallery: {
      tag: "Результаты работ",
      title: "Галерея До & После",
      subtitle: "Потяните интерактивную линию, чтобы в деталях рассмотреть чистоту и текстуру эмали.",
      badge: "Клинический случай",
      lblDuration: "Длительность",
      lblResult: "Результат",
      btnBook: "Записаться на прием",
      btnTg: "Консультация в Telegram →",
      tagBefore: "ДО",
      tagAfter: "ПОСЛЕ",
      cases: [
        {
          id: "case-airflow",
          category: "hygiene",
          tabLabel: "Комплекс AirFlow",
          title: "Бережное снятие пигментного налета и камня",
          description: "Очищение наддесневых отложений ультразвуком Piezon, снятие чайного налета мягким порошком глицина и глубокое фторирование эмали.",
          duration: "55 минут",
          result: "Осветление на 2 тона за счет идеальной чистоты",
          beforeImage: "assets/images/before-hygiene.jpg",
          afterImage: "assets/images/after-hygiene.jpg"
        },
        {
          id: "case-kids",
          category: "kids",
          tabLabel: "Детская гигиена",
          title: "Мягкая адаптационная чистка для ребенка",
          description: "Удаление мягкого налета приятной ягодной пастой, полировка щеточками, укрепление эмали и увлекательный урок чистки зубов.",
          duration: "35 минут",
          result: "Чистые здоровые зубы и ребенок с улыбкой",
          beforeImage: "assets/images/before-hygiene.jpg",
          afterImage: "assets/images/after-hygiene.jpg"
        },
        {
          id: "case-whitening",
          category: "whitening",
          tabLabel: "Отбеливание",
          title: "Безопасное клиническое осветление эмали",
          description: "Щадящая бескислотная методика с предварительной реминерализирующей терапией для защиты чувствительных шеек зубов.",
          duration: "75 минут",
          result: "Осветление на 5 тонов по шкале VITA",
          beforeImage: "assets/images/before-hygiene.jpg",
          afterImage: "assets/images/after-hygiene.jpg"
        }
      ]
    },
    menu: {
      tag: "Процедуры и прайс",
      title: "Услуги и стоимость",
      subtitle: "Честная прозрачная стоимость без скрытых манипуляций и навязанного лечения.",
      btnSelect: "Выбрать",
      items: [
        {
          id: "gbt-hygiene",
          index: "01",
          title: "Комплексная взрослая гигиена (AirFlow GBT)",
          duration: "60 минут",
          price: "4 900 ₽",
          description: "Индикация налета, бережный ультразвук, AirFlow с мягким глицином, полировка и глубокое укрепление эмали."
        },
        {
          id: "kids-hygiene-ritual",
          index: "02",
          title: "Детский адаптационный прием & Гигиена",
          duration: "40 минут",
          price: "2 900 ₽",
          description: "Игровой осмотр, деликатная чистка мягкими щеточками, реминерализация, урок гигиены и подарок маленькому герою."
        },
        {
          id: "gentle-whitening",
          index: "03",
          title: "Бережное отбеливание эмали",
          duration: "75 минут",
          price: "12 900 ₽",
          description: "Осветление на 5–8 тонов с защитой десен жидким коффердамом и антистресс-покрытием от гиперчувствительности."
        },
        {
          id: "aesthetic-therapy",
          index: "04",
          title: "Лечение кариеса & Эстетическая реставрация",
          duration: "50 минут",
          price: "от 3 800 ₽",
          description: "Изоляция коффердамом, бесследное восстановление анатомической формы зуба премиальными японскими нанокомпозитами."
        },
        {
          id: "ortho-hygiene",
          index: "05",
          title: "Гигиена с брекетами и элайнерами",
          duration: "60 минут",
          price: "5 500 ₽",
          description: "Тончайшая микроочистка вокруг каждого замочка брекетов, подбор монопучковых щеток и защитное покрытие."
        }
      ]
    },
    journal: {
      tag: "Полезный блог",
      title: "Лайфхаки & Обучающие рилсы",
      subtitle: "Короткие видео и советы доктора: как ухаживать за зубами детям и взрослым.",
      btnWatch: "Смотреть в Telegram →",
      bannerTitle: "Telegram-канал доктора",
      bannerDesc: "Честные разборы зубных паст, полезные лайфхаки по уходу за зубами и анонсы свободных окошек на прием.",
      bannerBtn: "Открыть Telegram-канал →",
      entries: [
        {
          id: "entry-kids",
          category: "Дети и родители",
          title: "Как научить ребенка чистить зубы без слез?",
          description: "Простые родительские лайфхаки: правила игры, выбор первой звуковой щетки и превращение чистки в радость.",
          image: "assets/images/reel-hygiene.jpg",
          url: "https://t.me/sabina_teeth_spb"
        },
        {
          id: "entry-floss",
          category: "Гайд по уходу",
          title: "Зубная нить vs Ирригатор: почему нужны оба?",
          description: "Ирригатор вымывает остатки пищи, но не снимает биопленку. Разбираем правильную связку средств.",
          image: "assets/images/clinic.jpg",
          url: "https://t.me/sabina_teeth_spb"
        },
        {
          id: "entry-airflow",
          category: "Наука о чистоте",
          title: "AirFlow: почему зубы светлеют без химии?",
          description: "Макро-видео: как деликатный глициновый порошок удаляет налет от кофе и чая, возвращая естественный цвет.",
          image: "assets/images/dr-sabina.jpg",
          url: "https://t.me/sabina_teeth_spb"
        }
      ]
    },
    concierge: {
      tag: "Личный прием",
      title: "Забронировать визит",
      subtitle: "Выберите желаемую процедуру и удобный формат связи",
      lblProcedure: "Процедура",
      lblTime: "Желаемое время",
      lblName: "Ваше имя",
      lblContact: "Телефон или Telegram",
      phName: "Как к вам обращаться?",
      phContact: "+7 (999) 000-00-00 или @username",
      btnTelegram: "Записаться через Telegram →",
      btnDirect: "Оставить заявку на сайте",
      confirmTitle: "Благодарим за обращение",
      confirmDesc: "Доктор Сабина Азимова или ассистент свяжется с вами в течение 15 минут для подтверждения времени.",
      timeOptions: [
        "Ближайшие дни (Утро 10:00–13:00)",
        "Ближайшие дни (День 13:00–17:00)",
        "Ближайшие дни (Вечер 17:00–21:00)",
        "Выходные дни"
      ]
    },
    footer: {
      desc: "Бережная взрослая и детская стоматология, профессиональная гигиена полости рта и забота об улыбке в Санкт-Петербурге.",
      clinicsTitle: "Клиники в Санкт-Петербурге",
      contactTitle: "Связь с доктором",
      tgChannel: "✈️ Telegram-канал",
      tgPersonal: "💬 Личный Telegram Сабины",
      igReels: "📸 Instagram Reels",
      whatsapp: "🟢 WhatsApp",
      copyright: "© 2026 Д-р Сабина Азимова. Все права защищены.",
      subnote: "Санкт-Петербург • Прием по предварительной записи"
    },
    floatingTg: "Записаться в Telegram"
  },

  en: {
    brandName: "Dr. Sabina Azimova",
    brandRole: "Oral Health & Aesthetic Dental Care",
    city: "Saint Petersburg",
    nav: {
      philosophy: "Philosophy",
      kids: "For Kids",
      gallery: "Before / After",
      menu: "Treatments",
      journal: "Journal",
      booking: "Reserve",
      cta: "Book Appointment"
    },
    hero: {
      tag: "Saint Petersburg • Gentle Dental Care",
      titleLine1: "The Art of a Natural",
      titleLine2: "Healthy Smile",
      statement: "Swiss GBT AirFlow protocol, gentle fear-free adaptation for children, teeth whitening, and aesthetic restoration in central Saint Petersburg.",
      btnBook: "Book Appointment",
      btnTelegram: "Consult on Telegram →",
      captionDoctor: "Dr. Sabina Azimova",
      captionCity: "Saint Petersburg"
    },
    manifesto: [
      {
        num: "01",
        title: "Swiss GBT Protocol",
        text: "Soft glycine-based powder gently removes dental biofilm without scratching enamel or irritating sensitive gums."
      },
      {
        num: "02",
        title: "Gentle Care for Children",
        text: "Zero tears, zero fear. In a fun playful setting, children learn to enjoy dental care and build lifelong healthy oral habits."
      },
      {
        num: "03",
        title: "Quiet Care Without Pain",
        text: "No rush, no pushy sales. A serene modern clinic in the heart of St. Petersburg with thoughtful care and photo documentation."
      }
    ],
    kids: {
      tag: "Special Approach for Children",
      title: "The Dentist Your Child Loves to Visit",
      desc: "I genuinely adore children and understand how crucial the first dental visit is. We replace fear with curiosity: playing with dental models, exploring the gentle 'breeze brush', and learning how to care for teeth happily at home.",
      features: [
        {
          title: "Playful Adaptation",
          desc: "Getting acquainted with the 'magic mirror' and gentle tools without stress."
        },
        {
          title: "Interactive Brushing Lesson",
          desc: "Hands-on demonstration with tooth models, choosing the right toothbrush and tasty safe paste."
        },
        {
          title: "Enamel Protection",
          desc: "Strengthening baby and permanent teeth with fruit-flavored fluoride remineralization."
        },
        {
          title: "Gift for Every Little Hero",
          desc: "Reinforcing a joyful memory with a sweet souvenir after each session."
        }
      ],
      btnAction: "Book a Child Adaptation Visit"
    },
    gallery: {
      tag: "Clinical Results",
      title: "Before & After Gallery",
      subtitle: "Drag the interactive line to examine enamel texture and spotless clean results.",
      badge: "Clinical Case",
      lblDuration: "Duration",
      lblResult: "Outcome",
      btnBook: "Book This Treatment",
      btnTg: "Inquire on Telegram →",
      tagBefore: "BEFORE",
      tagAfter: "AFTER",
      cases: [
        {
          id: "case-airflow",
          category: "hygiene",
          tabLabel: "AirFlow Complex",
          title: "Gentle Tartar & Tea Stain Removal",
          description: "Ultrasonic Piezon tartar removal, soft glycine AirFlow polishing, and deep enamel remineralization.",
          duration: "55 minutes",
          result: "2 shades brighter via spotless cleanliness",
          beforeImage: "assets/images/before-hygiene.jpg",
          afterImage: "assets/images/after-hygiene.jpg"
        },
        {
          id: "case-kids",
          category: "kids",
          tabLabel: "Pediatric Hygiene",
          title: "Gentle Preventive Cleaning for Kids",
          description: "Soft plaque removal with berry polishing paste, enamel fluoridation, and an engaging brushing tutorial.",
          duration: "35 minutes",
          result: "Healthy clean teeth & happy smiling child",
          beforeImage: "assets/images/before-hygiene.jpg",
          afterImage: "assets/images/after-hygiene.jpg"
        },
        {
          id: "case-whitening",
          category: "whitening",
          tabLabel: "Teeth Whitening",
          title: "Safe In-Office Clinical Whitening",
          description: "Gentle acid-free whitening with pre-treatment remineralization to protect sensitive tooth necks.",
          duration: "75 minutes",
          result: "5 shades brighter on VITA scale",
          beforeImage: "assets/images/before-hygiene.jpg",
          afterImage: "assets/images/after-hygiene.jpg"
        }
      ]
    },
    menu: {
      tag: "Treatments & Rates",
      title: "Curated Treatment Menu",
      subtitle: "Honest transparent pricing with no hidden fees or unnecessary procedures.",
      btnSelect: "Select",
      items: [
        {
          id: "gbt-hygiene",
          index: "01",
          title: "Adult Complex Oral Hygiene (AirFlow GBT)",
          duration: "60 minutes",
          price: "4 900 ₽",
          description: "Biofilm disclosure, gentle Piezon ultrasound, AirFlow with glycine powder, polishing & deep remineralization."
        },
        {
          id: "kids-hygiene-ritual",
          index: "02",
          title: "Pediatric Adaptation & Preventive Cleaning",
          duration: "40 minutes",
          price: "2 900 ₽",
          description: "Playful checkup, soft brush cleaning, remineralizing varnish, brushing masterclass & souvenir gift."
        },
        {
          id: "gentle-whitening",
          index: "03",
          title: "Gentle Clinical Teeth Whitening",
          duration: "75 minutes",
          price: "12 900 ₽",
          description: "5–8 shades lightening with liquid dam gum protection and anti-sensitivity mineral coating."
        },
        {
          id: "aesthetic-therapy",
          index: "04",
          title: "Caries Therapy & Aesthetic Restoration",
          duration: "50 minutes",
          price: "from 3 800 ₽",
          description: "Rubber dam isolation, seamless anatomical restoration using premium Japanese nano-composites."
        },
        {
          id: "ortho-hygiene",
          index: "05",
          title: "Special Hygiene for Braces & Aligners",
          duration: "60 minutes",
          price: "5 500 ₽",
          description: "Micro-cleaning around each bracket, single-tuft brush training, and protective fluoridation."
        }
      ]
    },
    journal: {
      tag: "Educational Blog",
      title: "Doctor's Notes & Reels",
      subtitle: "Short video guides and dental care tips for adults and parents.",
      btnWatch: "Watch on Telegram →",
      bannerTitle: "Doctor's Telegram Channel",
      bannerDesc: "Honest toothpaste reviews, daily oral care hacks, and early announcements of available appointment slots.",
      bannerBtn: "Join Telegram Channel →",
      entries: [
        {
          id: "entry-kids",
          category: "Kids & Parents",
          title: "How to Teach Your Child to Brush Without Tears?",
          description: "Practical parent tips: playful rules, choosing the first sonic toothbrush, and making brushing fun.",
          image: "assets/images/reel-hygiene.jpg",
          url: "https://t.me/sabina_teeth_spb"
        },
        {
          id: "entry-floss",
          category: "Care Guide",
          title: "Dental Floss vs Water Flosser: Why You Need Both?",
          description: "Water flossers rinse debris but don't remove sticky biofilm. Discover the optimal combo.",
          image: "assets/images/clinic.jpg",
          url: "https://t.me/sabina_teeth_spb"
        },
        {
          id: "entry-airflow",
          category: "Oral Science",
          title: "AirFlow: Why Teeth Look Whiter Without Chemicals?",
          description: "Macro video: how soft glycine powder removes tea and coffee pigment, revealing natural brightness.",
          image: "assets/images/dr-sabina.jpg",
          url: "https://t.me/sabina_teeth_spb"
        }
      ]
    },
    concierge: {
      tag: "Private Appointment",
      title: "Reserve Your Visit",
      subtitle: "Choose your preferred treatment and communication channel",
      lblProcedure: "Treatment",
      lblTime: "Preferred Time",
      lblName: "Your Name",
      lblContact: "Phone or Telegram",
      phName: "How should we address you?",
      phContact: "+7 (999) 000-00-00 or @username",
      btnTelegram: "Book via Telegram →",
      btnDirect: "Submit Request on Website",
      confirmTitle: "Thank You for Your Request",
      confirmDesc: "Dr. Sabina Azimova or her assistant will contact you within 15 minutes to confirm the exact time slot.",
      timeOptions: [
        "Upcoming days (Morning 10:00–13:00)",
        "Upcoming days (Afternoon 13:00–17:00)",
        "Upcoming days (Evening 17:00–21:00)",
        "Weekend slots"
      ]
    },
    footer: {
      desc: "Gentle adult and pediatric dental care, professional oral hygiene, and smile health in Saint Petersburg.",
      clinicsTitle: "Clinics in Saint Petersburg",
      contactTitle: "Get in Touch",
      tgChannel: "✈️ Telegram Channel",
      tgPersonal: "💬 Dr. Sabina's Personal Chat",
      igReels: "📸 Instagram Reels",
      whatsapp: "🟢 WhatsApp",
      copyright: "© 2026 Dr. Sabina Azimova. All rights reserved.",
      subnote: "Saint Petersburg • By appointment only"
    },
    floatingTg: "Chat on Telegram"
  }
};

export const clinicsData = [
  {
    metro: { ru: "Петроградская", en: "Petrogradskaya" },
    address: { ru: "Каменноостровский проспект", en: "Kamennoostrovsky Prospect" },
    note: { ru: "Исторический центр, немецкое оборудование KaVo, парковка", en: "Historic center, German KaVo equipment, parking" }
  },
  {
    metro: { ru: "Невский Проспект", en: "Nevsky Prospect" },
    address: { ru: "Центральный район", en: "Central District" },
    note: { ru: "3 минуты от метро, панорамные виды, спокойные вечерние часы приема", en: "3 min from metro, panoramic views, evening appointments" }
  }
];

export const siteConfig = {
  telegramUsername: "sabina_dental_spb",
  telegramChannelUrl: "https://t.me/sabina_teeth_spb",
  instagramUrl: "https://instagram.com",
  phoneDisplay: "+7 (999) 000-24-12",
  phoneRaw: "79990002412"
};
