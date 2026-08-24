/**
 * Dr. Sabina Azimova — Complete Atelier Application Engine
 * High-performance, self-contained, bilingual (RU / EN) with REAL Clinical Works
 */

const siteData = {
  ru: {
    brandTitle: "SABINA AZIMOVA",
    brandSub: "Стоматолог • Гигиенист",
    nav: {
      about: "О докторе",
      works: "Работы",
      kids: "Детям",
      menu: "Услуги",
      journal: "Блог",
      booking: "Запись",
      cta: "Записаться"
    },
    hero: {
      tag: "Швейцарский протокол GBT • Детский прием • Отбеливание",
      titleLine1: "Красота и здоровье",
      titleLine2: "вашей улыбки",
      statement: "Бережная гигиена AirFlow на основе глицина, легкая адаптация маленьких пациентов без страха и слез, деликатное отбеливание и терапия премиальными материалами.",
      btnBook: "Записаться на прием",
      btnTelegram: "Консультация в Telegram →",
      captionDoctor: "Доктор Сабина Азимова",
      captionCity: "Петроградская / Невский"
    },
    trust: [
      {
        title: "Швейцарский GBT",
        desc: "Мягкий порошок глицина очищает налет без царапин на эмали."
      },
      {
        title: "Детям без страха",
        desc: "Игровой адаптационный визит, подарки и улыбки маленьких героев."
      },
      {
        title: "Фотопротокол",
        desc: "Честная макросъемка каждого этапа до и после процедуры."
      },
      {
        title: "100% Стерильность",
        desc: "Строгий 5-ступенчатый протокол автоклавирования и индивидуальные наборы."
      }
    ],
    gallery: {
      tag: "Клинические результаты",
      title: "Галерея До & После",
      subtitle: "Потяните интерактивную линию, чтобы в деталях рассмотреть чистоту и текстуру эмали.",
      badge: "Клинический случай",
      lblDuration: "Длительность",
      lblResult: "Результат",
      btnBook: "Хочу такой же результат",
      btnTg: "Спросить в Telegram →",
      tagBefore: "ДО",
      tagAfter: "ПОСЛЕ",
      cases: [
        {
          id: "case-airflow",
          category: "hygiene",
          tabLabel: "Пигментный налет & Камень",
          title: "Снятие чайного налета и поддесневого камня",
          description: "Очищение наддесневых и поддесневых отложений ультразвуком Piezon, снятие пигментации AirFlow с глицином и глубокое фторирование.",
          duration: "55 минут",
          result: "Осветление на 2 тона за счет идеальной чистоты",
          beforeImage: "assets/images/works/photo_1_2026-08-24_16-13-04.jpg",
          afterImage: "assets/images/works/photo_3_2026-08-24_16-13-04.jpg"
        },
        {
          id: "case-lingual",
          category: "hygiene",
          tabLabel: "Язычные поверхности",
          title: "Удаление плотных отложений с внутренней стороны",
          description: "Деликатная ультразвуковая чистка пришеечных участков без повреждения десны и финишная полировка.",
          duration: "50 минут",
          result: "Полное устранение воспаления и налета",
          beforeImage: "assets/images/works/photo_10_2026-08-24_16-13-04.jpg",
          afterImage: "assets/images/works/photo_11_2026-08-24_16-13-04.jpg"
        },
        {
          id: "case-ortho",
          category: "ortho",
          tabLabel: "Гигиена с ретейнером",
          title: "Микроочистка зубов с ортодонтической дугой",
          description: "Удаление скоплений налета вокруг металлического ретейнера, полировка межзубных промежутков и защита эмали.",
          duration: "60 минут",
          result: "Чистая эмаль вокруг каждого элемента ретейнера",
          beforeImage: "assets/images/works/photo_12_2026-08-24_16-13-04.jpg",
          afterImage: "assets/images/works/photo_14_2026-08-24_16-13-04.jpg"
        },
        {
          id: "case-disclosure",
          category: "gbt",
          tabLabel: "Индикация биопленки GBT",
          title: "Швейцарский протокол окрашивания налета",
          description: "2-цветный органический индикатор выявляет зрелую и свежую биопленку для 100% прицельного и бережного удаления.",
          duration: "60 минут",
          result: "Идеально гладкая эмаль и здоровые десны",
          beforeImage: "assets/images/works/photo_25_2026-08-24_16-13-04.jpg",
          afterImage: "assets/images/works/photo_28_2026-08-24_16-13-04.jpg"
        }
      ]
    },
    worksGrid: {
      tag: "Реальные фотопротоколы",
      title: "Макро-результаты процедур",
      subtitle: "Честные фотографии клинических случаев без фильтров и ретуши.",
      items: [
        {
          img: "assets/images/works/photo_3_2026-08-24_16-13-04.jpg",
          badge: "AirFlow Glycine",
          title: "Удаление плотного чайного налета",
          desc: "Восстановление естественной белизны эмали за 1 сеанс."
        },
        {
          img: "assets/images/works/photo_11_2026-08-24_16-13-04.jpg",
          badge: "Piezon Ultrasound",
          title: "Очищение нижних резцов",
          desc: "Деликатное снятие зубного камня с язычной стороны."
        },
        {
          img: "assets/images/works/photo_14_2026-08-24_16-13-04.jpg",
          badge: "Орто-протокол",
          title: "Чистка вокруг несъемного ретейнера",
          desc: "Сохранение здоровья десен после брекет-лечения."
        },
        {
          img: "assets/images/works/photo_26_2026-08-24_16-13-04.jpg",
          badge: "GBT Индикация",
          title: "Окрашивание скрытой биопленки",
          desc: "Наглядная демонстрация зон недостаточной домашней гигиены."
        },
        {
          img: "assets/images/works/photo_95_2026-08-24_16-13-04.jpg",
          badge: "Окклюзия & Фиссуры",
          title: "Микроочистка жевательных зубов",
          desc: "Глубокое очищение рельефа зубов для профилактики кариеса."
        },
        {
          img: "assets/images/works/photo_97_2026-08-24_16-13-04.jpg",
          badge: "Реминерализация",
          title: "Укрепление эмали",
          desc: "Насыщение минералами и снижение чувствительности шеек."
        }
      ]
    },
    kids: {
      tag: "Особый подход к детям",
      title: "Стоматолог, к которому ребенок идет с улыбкой",
      desc: "Я искренне люблю детей и знаю, как важно бережно сформировать первое впечатление о докторе. Мы не пугаем строгими правилами и уколами: мы играем, знакомимся со «щеткой-ветерком», чистим зубки веселым персонажам и учимся правильно ухаживать за улыбкой дома.",
      features: [
        {
          title: "Игровая адаптация",
          desc: "Знакомство с кабинетом и волшебным зеркальцем в форме увлекательной игры."
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
          description: "Изоляция коффердамом, бесследное восстановление анатомической формы зуба премиальными нанокомпозитами."
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
      confirmDesc: "Доктор Сабина Азимова свяжется с вами в течение 15 минут для подтверждения времени.",
      timeOptions: [
        "Ближайшие дни (Утро 10:00–13:00)",
        "Ближайшие дни (День 13:00–17:00)",
        "Ближайшие дни (Вечер 17:00–21:00)",
        "Выходные дни"
      ]
    },
    footer: {
      desc: "Бережная взрослая и детская стоматология, профессиональная гигиена полости рта и эстетическая терапия.",
      clinicsTitle: "Адреса приема",
      contactTitle: "Связь с доктором",
      copyright: "© 2026 Sabina Azimova Dental Atelier.",
      subnote: "Прием по предварительной записи"
    },
    floatingTg: "Записаться в Telegram"
  },

  en: {
    brandTitle: "SABINA AZIMOVA",
    brandSub: "Dentist • Hygienist",
    nav: {
      about: "About",
      works: "Works",
      kids: "For Kids",
      menu: "Treatments",
      journal: "Journal",
      booking: "Reserve",
      cta: "Book Visit"
    },
    hero: {
      tag: "Swiss GBT Protocol • Pediatric Care • Whitening",
      titleLine1: "The Art of a Natural",
      titleLine2: "Healthy Smile",
      statement: "Swiss GBT AirFlow protocol with glycine powder, fear-free playful adaptation for children, teeth whitening, and aesthetic restoration.",
      btnBook: "Book Appointment",
      btnTelegram: "Consult on Telegram →",
      captionDoctor: "Dr. Sabina Azimova",
      captionCity: "Petrogradskaya / Nevsky"
    },
    trust: [
      {
        title: "Swiss GBT Protocol",
        desc: "Soft glycine powder removes biofilm with zero enamel damage."
      },
      {
        title: "Gentle for Kids",
        desc: "Playful adaptation, rewards, and happy smiling little heroes."
      },
      {
        title: "Photo Protocol",
        desc: "Honest clinical macro photos of every treatment step."
      },
      {
        title: "100% Sterilization",
        desc: "Rigorous 5-step autoclaving and sealed sterile kits."
      }
    ],
    gallery: {
      tag: "Clinical Results",
      title: "Before & After Gallery",
      subtitle: "Drag the interactive line to examine enamel texture and spotless clean results.",
      badge: "Clinical Case",
      lblDuration: "Duration",
      lblResult: "Outcome",
      btnBook: "Book This Result",
      btnTg: "Inquire on Telegram →",
      tagBefore: "BEFORE",
      tagAfter: "AFTER",
      cases: [
        {
          id: "case-airflow",
          category: "hygiene",
          tabLabel: "Stain & Calculus Removal",
          title: "Tartar & Pigment Removal via Glycine AirFlow",
          description: "Piezon ultrasonic scaling, gentle glycine air polishing, and deep enamel remineralization.",
          duration: "55 minutes",
          result: "2 shades brighter via natural cleanliness",
          beforeImage: "assets/images/works/photo_1_2026-08-24_16-13-04.jpg",
          afterImage: "assets/images/works/photo_3_2026-08-24_16-13-04.jpg"
        },
        {
          id: "case-lingual",
          category: "hygiene",
          tabLabel: "Lingual Surfaces",
          title: "Deep Cleaning of Lingual Lower Incisors",
          description: "Subgingival scaling without gingival trauma, followed by ultra-smooth enamel polishing.",
          duration: "50 minutes",
          result: "Full elimination of calculus & inflammation",
          beforeImage: "assets/images/works/photo_10_2026-08-24_16-13-04.jpg",
          afterImage: "assets/images/works/photo_11_2026-08-24_16-13-04.jpg"
        },
        {
          id: "case-ortho",
          category: "ortho",
          tabLabel: "Retainer Hygiene",
          title: "Micro-cleaning Around Orthodontic Wire",
          description: "Biofilm removal around bonded retainer, interdental polishing, and protective fluoridation.",
          duration: "60 minutes",
          result: "Spotless enamel around every retainer link",
          beforeImage: "assets/images/works/photo_12_2026-08-24_16-13-04.jpg",
          afterImage: "assets/images/works/photo_14_2026-08-24_16-13-04.jpg"
        },
        {
          id: "case-disclosure",
          category: "gbt",
          tabLabel: "GBT Biofilm Disclosure",
          title: "Swiss 2-Tone Biofilm Disclosure Protocol",
          description: "Revealing mature and fresh bacterial biofilm to guide gentle, 100% targeted removal.",
          duration: "60 minutes",
          result: "Silky smooth enamel & healthy gums",
          beforeImage: "assets/images/works/photo_25_2026-08-24_16-13-04.jpg",
          afterImage: "assets/images/works/photo_28_2026-08-24_16-13-04.jpg"
        }
      ]
    },
    worksGrid: {
      tag: "Real Photo Protocols",
      title: "Clinical Macro Documentation",
      subtitle: "Unedited photographs of real patient outcomes.",
      items: [
        {
          img: "assets/images/works/photo_3_2026-08-24_16-13-04.jpg",
          badge: "AirFlow Glycine",
          title: "Tea & Tobacco Stain Removal",
          desc: "Restoring natural enamel brightness in one session."
        },
        {
          img: "assets/images/works/photo_11_2026-08-24_16-13-04.jpg",
          badge: "Piezon Ultrasound",
          title: "Lingual Incisor Calculus Scaling",
          desc: "Gentle removal of hard tartar deposits."
        },
        {
          img: "assets/images/works/photo_14_2026-08-24_16-13-04.jpg",
          badge: "Ortho Protocol",
          title: "Bonded Retainer Micro-Cleaning",
          desc: "Maintaining gum health after orthodontic therapy."
        },
        {
          img: "assets/images/works/photo_26_2026-08-24_16-13-04.jpg",
          badge: "GBT Disclosure",
          title: "Biofilm Staining Visualization",
          desc: "Highlighting areas that require targeted home care."
        },
        {
          img: "assets/images/works/photo_95_2026-08-24_16-13-04.jpg",
          badge: "Fissure Cleaning",
          title: "Molar Occlusal Deep Cleaning",
          desc: "Deep cleansing of chewing surfaces for caries prevention."
        },
        {
          img: "assets/images/works/photo_97_2026-08-24_16-13-04.jpg",
          badge: "Remineralization",
          title: "Enamel Strengthening",
          desc: "Mineral restoration and anti-sensitivity coating."
        }
      ]
    },
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
      confirmDesc: "Dr. Sabina Azimova will contact you within 15 minutes to confirm the exact time slot.",
      timeOptions: [
        "Upcoming days (Morning 10:00–13:00)",
        "Upcoming days (Afternoon 13:00–17:00)",
        "Upcoming days (Evening 17:00–21:00)",
        "Weekend slots"
      ]
    },
    footer: {
      desc: "Gentle adult and pediatric dental care, professional oral hygiene, and smile aesthetics.",
      clinicsTitle: "Clinic Locations",
      contactTitle: "Get in Touch",
      copyright: "© 2026 Sabina Azimova Dental Atelier.",
      subnote: "By appointment only"
    },
    floatingTg: "Chat on Telegram"
  }
};

const clinicsData = [
  {
    metro: { ru: "Петроградская", en: "Petrogradskaya" },
    address: { ru: "Каменноостровский проспект", en: "Kamennoostrovsky Prospect" },
    note: { ru: "Исторический центр, немецкое оборудование KaVo, парковка", en: "Historic center, German KaVo equipment, parking" }
  },
  {
    metro: { ru: "Невский Проспект", en: "Nevsky Prospect" },
    address: { ru: "Центральный район", en: "Central District" },
    note: { ru: "3 минуты от метро, панорамные виды, вечерние часы приема", en: "3 min from metro, panoramic views, evening appointments" }
  }
];

const siteConfig = {
  telegramUsername: "sabina_dental_spb",
  telegramChannelUrl: "https://t.me/sabina_teeth_spb"
};

// Application Controller Engine
class AtelierApp {
  constructor() {
    this.lang = localStorage.getItem('sabina_lang') || 'ru';
    this.galleryCaseIndex = 0;
    this.gallerySplit = 50;
    this.selectedServiceIndex = 0;
    this.isDragging = false;

    this.init();
  }

  init() {
    this.bindHeaderScroll();
    this.renderAll();
    this.initSmoothScroll();
  }

  setLanguage(lang) {
    this.lang = lang;
    localStorage.setItem('sabina_lang', lang);
    this.renderAll();
  }

  toggleMobileMenu() {
    const menu = document.getElementById('navMenu');
    const backdrop = document.getElementById('navBackdrop');
    const burger = document.getElementById('navBurger');
    if (!menu) return;

    const isOpen = menu.classList.contains('active');
    if (isOpen) {
      this.closeMobileMenu();
    } else {
      menu.classList.add('active');
      if (backdrop) backdrop.classList.add('active');
      if (burger) {
        burger.setAttribute('aria-expanded', 'true');
        burger.innerHTML = '✕';
      }
      document.body.style.overflow = 'hidden';
    }
  }

  closeMobileMenu() {
    const menu = document.getElementById('navMenu');
    const backdrop = document.getElementById('navBackdrop');
    const burger = document.getElementById('navBurger');
    if (menu) menu.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
    if (burger) {
      burger.setAttribute('aria-expanded', 'false');
      burger.innerHTML = '☰';
    }
    document.body.style.overflow = '';
  }

  bindHeaderScroll() {
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  renderAll() {
    const t = siteData[this.lang];

    // Language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.lang);
    });

    // Logo & Header
    const brandTitle = document.getElementById('brandTitle');
    if (brandTitle) brandTitle.textContent = t.brandTitle;
    const brandSub = document.getElementById('brandSub');
    if (brandSub) brandSub.textContent = t.brandSub;
    const headerCta = document.getElementById('headerCta');
    if (headerCta) headerCta.textContent = t.nav.cta;

    // Navigation Links
    const navItems = document.querySelectorAll('#navMenu .nav-item');
    if (navItems.length >= 6) {
      navItems[0].textContent = t.nav.about;
      navItems[1].textContent = t.nav.works;
      navItems[2].textContent = t.nav.kids;
      navItems[3].textContent = t.nav.menu;
      navItems[4].textContent = t.nav.journal;
      navItems[5].textContent = t.nav.booking;
    }

    // Hero
    const heroTag = document.getElementById('heroTag');
    if (heroTag) heroTag.textContent = t.hero.tag;
    const heroTitle = document.getElementById('heroTitle');
    if (heroTitle) {
      heroTitle.innerHTML = `${t.hero.titleLine1} <br><span class="italic-serif">${t.hero.titleLine2}</span>`;
    }
    const heroStatement = document.getElementById('heroStatement');
    if (heroStatement) heroStatement.textContent = t.hero.statement;
    const heroBtnBook = document.getElementById('heroBtnBook');
    if (heroBtnBook) heroBtnBook.textContent = t.hero.btnBook;
    const heroBtnTg = document.getElementById('heroBtnTg');
    if (heroBtnTg) heroBtnTg.textContent = t.hero.btnTelegram;
    const heroCaptionDoctor = document.getElementById('heroCaptionDoctor');
    if (heroCaptionDoctor) heroCaptionDoctor.textContent = t.hero.captionDoctor;
    const heroCaptionCity = document.getElementById('heroCaptionCity');
    if (heroCaptionCity) heroCaptionCity.textContent = t.hero.captionCity;

    // Trust Bar
    this.renderTrustBar();

    // Before/After Gallery
    const galleryTag = document.getElementById('galleryTag');
    if (galleryTag) galleryTag.textContent = t.gallery.tag;
    const galleryTitle = document.getElementById('galleryTitle');
    if (galleryTitle) galleryTitle.textContent = t.gallery.title;
    const gallerySub = document.getElementById('gallerySub');
    if (gallerySub) gallerySub.textContent = t.gallery.subtitle;
    this.renderGallery();

    // Works Grid
    this.renderWorksGrid();

    // Kids Section
    const kidsTag = document.getElementById('kidsTag');
    if (kidsTag) kidsTag.textContent = t.kids.tag;
    const kidsTitle = document.getElementById('kidsTitle');
    if (kidsTitle) kidsTitle.textContent = t.kids.title;
    const kidsDesc = document.getElementById('kidsDesc');
    if (kidsDesc) kidsDesc.textContent = t.kids.desc;
    const kidsBtn = document.getElementById('kidsBtn');
    if (kidsBtn) kidsBtn.textContent = t.kids.btnAction;

    const kidsFeaturesMount = document.getElementById('kidsFeaturesMount');
    if (kidsFeaturesMount) {
      kidsFeaturesMount.innerHTML = t.kids.features.map(f => `
        <div class="kids-feature-card">
          <h4>${f.title}</h4>
          <p>${f.desc}</p>
        </div>
      `).join('');
    }

    // Treatment Menu
    const menuTag = document.getElementById('menuTag');
    if (menuTag) menuTag.textContent = t.menu.tag;
    const menuTitle = document.getElementById('menuTitle');
    if (menuTitle) menuTitle.textContent = t.menu.title;
    const menuSub = document.getElementById('menuSub');
    if (menuSub) menuSub.textContent = t.menu.subtitle;
    this.renderMenu();

    // Journal
    const journalTag = document.getElementById('journalTag');
    if (journalTag) journalTag.textContent = t.journal.tag;
    const journalTitle = document.getElementById('journalTitle');
    if (journalTitle) journalTitle.textContent = t.journal.title;
    const journalSub = document.getElementById('journalSub');
    if (journalSub) journalSub.textContent = t.journal.subtitle;
    const journalBannerTitle = document.getElementById('journalBannerTitle');
    if (journalBannerTitle) journalBannerTitle.textContent = t.journal.bannerTitle;
    const journalBannerDesc = document.getElementById('journalBannerDesc');
    if (journalBannerDesc) journalBannerDesc.textContent = t.journal.bannerDesc;
    const journalBannerBtn = document.getElementById('journalBannerBtn');
    if (journalBannerBtn) journalBannerBtn.textContent = t.journal.bannerBtn;
    this.renderJournal();

    // Concierge
    this.renderConcierge();

    // Footer
    const footerDesc = document.getElementById('footerDesc');
    if (footerDesc) footerDesc.textContent = t.footer.desc;
    const footerClinicsTitle = document.getElementById('footerClinicsTitle');
    if (footerClinicsTitle) footerClinicsTitle.textContent = t.footer.clinicsTitle;
    const footerContactTitle = document.getElementById('footerContactTitle');
    if (footerContactTitle) footerContactTitle.textContent = t.footer.contactTitle;
    const footerCopyright = document.getElementById('footerCopyright');
    if (footerCopyright) footerCopyright.textContent = t.footer.copyright;
    const footerSubnote = document.getElementById('footerSubnote');
    if (footerSubnote) footerSubnote.textContent = t.footer.subnote;
    const floatingTgText = document.getElementById('floatingTgText');
    if (floatingTgText) floatingTgText.textContent = t.floatingTg;

    this.renderClinics();
  }

  renderTrustBar() {
    const mount = document.getElementById('trustMount');
    if (!mount) return;

    const items = siteData[this.lang].trust;
    mount.innerHTML = items.map(item => `
      <div class="trust-item">
        <span class="trust-title">${item.title}</span>
        <span class="trust-desc">${item.desc}</span>
      </div>
    `).join('');
  }

  renderGallery() {
    const mount = document.getElementById('galleryMount');
    if (!mount) return;

    const g = siteData[this.lang].gallery;
    const currentCase = g.cases[this.galleryCaseIndex] || g.cases[0];

    mount.innerHTML = `
      <div class="gallery-tabs">
        ${g.cases.map((c, idx) => `
          <button type="button" class="gallery-tab-btn ${this.galleryCaseIndex === idx ? 'active' : ''}" onclick="window.app.switchGalleryCase(${idx})">
            ${c.tabLabel}
          </button>
        `).join('')}
      </div>

      <div class="atelier-slider-card">
        <div class="atelier-split-viewport" id="splitViewport" style="--split: ${this.gallerySplit}%;">
          <!-- Base Layer (AFTER image, 100% full & static) -->
          <div class="atelier-layer-after">
            <img src="${currentCase.afterImage}" alt="After" draggable="false">
            <span class="atelier-tag tag-after">${g.tagAfter}</span>
          </div>

          <!-- Overlay Layer (BEFORE image, 100% full & static, dynamically clipped from left) -->
          <div class="atelier-layer-before" id="beforeLayer" style="clip-path: inset(0 ${100 - this.gallerySplit}% 0 0); -webkit-clip-path: inset(0 ${100 - this.gallerySplit}% 0 0);">
            <img src="${currentCase.beforeImage}" alt="Before" draggable="false">
            <span class="atelier-tag tag-before">${g.tagBefore}</span>
          </div>

          <!-- Divider slider handle -->
          <div class="atelier-divider-line" id="dividerLine" style="left: ${this.gallerySplit}%;">
            <div class="atelier-divider-handle">✦</div>
          </div>
        </div>

        <div class="atelier-details">
          <div>
            <span class="section-tag" style="margin-bottom: 0.5rem;">${g.badge}</span>
            <h3 style="margin-bottom: 0.5rem;">${currentCase.title}</h3>
            <p style="font-size: var(--text-sm);">${currentCase.description}</p>
            
            <div class="atelier-spec-list">
              <div class="atelier-spec-row">
                <span class="lbl">${g.lblDuration}</span>
                <span class="val">${currentCase.duration}</span>
              </div>
              <div class="atelier-spec-row">
                <span class="lbl">${g.lblResult}</span>
                <span class="val">${currentCase.result}</span>
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
            <a href="#concierge" class="btn btn-solid btn-sm" onclick="window.app.setConciergeService('${currentCase.category}')">
              ${g.btnBook}
            </a>
            <a href="https://t.me/${siteConfig.telegramUsername}" target="_blank" rel="noopener noreferrer" class="btn-link">
              ${g.btnTg}
            </a>
          </div>
        </div>
      </div>
    `;

    this.bindGallerySlider();
  }

  switchGalleryCase(idx) {
    this.galleryCaseIndex = idx;
    this.gallerySplit = 50;
    this.renderGallery();
  }

  bindGallerySlider() {
    const viewport = document.getElementById('splitViewport');
    const beforeLayer = document.getElementById('beforeLayer');
    const dividerLine = document.getElementById('dividerLine');
    if (!viewport || !beforeLayer || !dividerLine) return;

    const setPosition = (clientX) => {
      const rect = viewport.getBoundingClientRect();
      let percent = ((clientX - rect.left) / rect.width) * 100;
      percent = Math.max(0, Math.min(100, percent));
      
      this.gallerySplit = percent;
      viewport.style.setProperty('--split', `${percent}%`);
      beforeLayer.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
      beforeLayer.style.webkitClipPath = `inset(0 ${100 - percent}% 0 0)`;
      dividerLine.style.left = `${percent}%`;
    };

    const onPointerMove = (e) => {
      if (!this.isDragging) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      setPosition(clientX);
    };

    const stopDrag = () => {
      if (!this.isDragging) return;
      this.isDragging = false;
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', stopDrag);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', stopDrag);
    };

    const startDrag = (e) => {
      this.isDragging = true;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      setPosition(clientX);
      window.addEventListener('mousemove', onPointerMove);
      window.addEventListener('mouseup', stopDrag);
      window.addEventListener('touchmove', onPointerMove, { passive: true });
      window.addEventListener('touchend', stopDrag);
    };

    viewport.addEventListener('mousedown', startDrag);
    viewport.addEventListener('touchstart', startDrag, { passive: true });
  }

  renderWorksGrid() {
    const mount = document.getElementById('worksGridMount');
    if (!mount) return;

    const w = siteData[this.lang].worksGrid;
    const tag = document.getElementById('worksTag');
    if (tag) tag.textContent = w.tag;
    const title = document.getElementById('worksTitle');
    if (title) title.textContent = w.title;
    const sub = document.getElementById('worksSub');
    if (sub) sub.textContent = w.subtitle;

    mount.innerHTML = w.items.map(item => `
      <div class="work-card">
        <div class="work-thumb">
          <img src="${item.img}" alt="${item.title}" loading="lazy">
          <span class="work-badge">${item.badge}</span>
        </div>
        <div class="work-body">
          <div>
            <h4>${item.title}</h4>
            <p>${item.desc}</p>
          </div>
        </div>
      </div>
    `).join('');
  }

  renderMenu() {
    const mount = document.getElementById('menuMount');
    if (!mount) return;

    const items = siteData[this.lang].menu.items;
    const btnLabel = siteData[this.lang].menu.btnSelect;

    mount.innerHTML = items.map(item => `
      <div class="menu-item">
        <span class="menu-index">${item.index}</span>
        <div class="menu-title-wrap">
          <h3>${item.title}</h3>
          <span class="duration">${item.duration}</span>
        </div>
        <p class="menu-desc">${item.description}</p>
        <div class="menu-price-action">
          <span class="menu-price">${item.price}</span>
          <a href="#concierge" class="btn btn-wire btn-sm" onclick="window.app.setConciergeService('${item.id}')">
            ${btnLabel}
          </a>
        </div>
      </div>
    `).join('');
  }

  renderJournal() {
    const mount = document.getElementById('journalMount');
    if (!mount) return;

    const entries = siteData[this.lang].journal.entries;
    const btnWatch = siteData[this.lang].journal.btnWatch;

    mount.innerHTML = entries.map(entry => `
      <a href="${entry.url}" target="_blank" rel="noopener noreferrer" class="journal-card">
        <div class="journal-cover">
          <img src="${entry.image}" alt="${entry.title}" loading="lazy">
          <div class="journal-play-indicator">▶</div>
        </div>
        <div class="journal-body">
          <div>
            <span class="journal-category">${entry.category}</span>
            <h4>${entry.title}</h4>
            <p>${entry.description}</p>
          </div>
          <div style="margin-top: 1rem; font-size: var(--text-xs); font-weight: 700; color: var(--gold-main);">
            ${btnWatch}
          </div>
        </div>
      </a>
    `).join('');
  }

  renderConcierge() {
    const mount = document.getElementById('conciergeMount');
    if (!mount) return;

    const c = siteData[this.lang].concierge;
    const items = siteData[this.lang].menu.items;

    mount.innerHTML = `
      <div class="concierge-card">
        <div class="concierge-title">
          <span class="section-tag">${c.tag}</span>
          <h2>${c.title}</h2>
          <p>${c.subtitle}</p>
        </div>

        <form id="conciergeForm" onsubmit="return false;">
          <div class="concierge-grid">
            <div class="input-group">
              <label class="input-label" for="conciergeServiceSelect">${c.lblProcedure}</label>
              <select id="conciergeServiceSelect" class="input-field">
                ${items.map((t, idx) => `
                  <option value="${idx}" ${this.selectedServiceIndex === idx ? 'selected' : ''}>
                    ${t.title} (${t.price})
                  </option>
                `).join('')}
              </select>
            </div>

            <div class="input-group">
              <label class="input-label" for="conciergeTimeWindow">${c.lblTime}</label>
              <select id="conciergeTimeWindow" class="input-field">
                ${c.timeOptions.map((opt, i) => `
                  <option value="${opt}" ${i === 2 ? 'selected' : ''}>${opt}</option>
                `).join('')}
              </select>
            </div>

            <div class="input-group">
              <label class="input-label" for="conciergeName">${c.lblName}</label>
              <input type="text" id="conciergeName" class="input-field" placeholder="${c.phName}" required>
            </div>

            <div class="input-group">
              <label class="input-label" for="conciergeContact">${c.lblContact}</label>
              <input type="text" id="conciergeContact" class="input-field" placeholder="${c.phContact}" required>
            </div>
          </div>

          <div style="display: flex; gap: var(--space-4); justify-content: center; flex-wrap: wrap; margin-top: var(--space-6);">
            <button type="button" class="btn btn-solid" id="btnAtelierTelegram" onclick="window.app.submitTelegramBooking()">
              ${c.btnTelegram}
            </button>
            <button type="button" class="btn btn-wire" id="btnAtelierDirect" onclick="window.app.submitDirectBooking()">
              ${c.btnDirect}
            </button>
          </div>
        </form>

        <div id="conciergeConfirmation" style="display: none; text-align: center; padding-top: 2rem;">
          <h3 style="margin-bottom: 0.5rem;">${c.confirmTitle}</h3>
          <p style="color: var(--text-muted); font-size: var(--text-sm);">
            ${c.confirmDesc}
          </p>
        </div>
      </div>
    `;

    const selectEl = document.getElementById('conciergeServiceSelect');
    if (selectEl) {
      selectEl.addEventListener('change', (e) => {
        this.selectedServiceIndex = parseInt(e.target.value, 10);
      });
    }
  }

  submitTelegramBooking() {
    const items = siteData[this.lang].menu.items;
    const curService = items[this.selectedServiceIndex] || items[0];
    const name = (document.getElementById('conciergeName')?.value || '').trim() || (this.lang === 'ru' ? 'Пациент' : 'Patient');
    const contact = (document.getElementById('conciergeContact')?.value || '').trim();
    const timeWindow = document.getElementById('conciergeTimeWindow')?.value || '';
    
    const isRu = this.lang === 'ru';
    const text = encodeURIComponent(
      isRu 
        ? `Здравствуйте, доктор Сабина! Хочу записаться на прием:\n\n🦷 Процедура: ${curService.title} (${curService.price})\n⏰ Удобное время: ${timeWindow}\n👤 Имя: ${name}\n` + (contact ? `📱 Контакт: ${contact}\n` : '')
        : `Hello, Dr. Sabina! I would like to book an appointment:\n\n🦷 Treatment: ${curService.title} (${curService.price})\n⏰ Preferred Time: ${timeWindow}\n👤 Name: ${name}\n` + (contact ? `📱 Contact: ${contact}\n` : '')
    );

    window.open(`https://t.me/${siteConfig.telegramUsername}?text=${text}`, '_blank', 'noopener,noreferrer');
  }

  submitDirectBooking() {
    const name = (document.getElementById('conciergeName')?.value || '').trim();
    const contact = (document.getElementById('conciergeContact')?.value || '').trim();
    if (!name || !contact) {
      alert(this.lang === 'ru' ? 'Пожалуйста, укажите ваше имя и контактные данные.' : 'Please enter your name and contact details.');
      return;
    }
    const form = document.getElementById('conciergeForm');
    const confirm = document.getElementById('conciergeConfirmation');
    if (form) form.style.display = 'none';
    if (confirm) confirm.style.display = 'block';
  }

  setConciergeService(serviceIdOrCategory) {
    const items = siteData[this.lang].menu.items;
    const idx = items.findIndex(t => t.id.includes(serviceIdOrCategory) || t.title.toLowerCase().includes(serviceIdOrCategory.toLowerCase()));
    if (idx !== -1) {
      this.selectedServiceIndex = idx;
      const select = document.getElementById('conciergeServiceSelect');
      if (select) select.value = idx;
    }
  }

  renderClinics() {
    const mount = document.getElementById('clinicsMount');
    if (!mount) return;

    mount.innerHTML = clinicsData.map(c => `
      <div style="padding-bottom: 1.25rem; border-bottom: 1px solid rgba(255, 255, 255, 0.1); margin-bottom: 1.25rem;">
        <h4 style="color: #FFFFFF; font-size: var(--text-base); margin-bottom: 0.25rem;">м. ${c.metro[this.lang]}</h4>
        <p style="color: rgba(255, 255, 255, 0.7); font-size: var(--text-sm); margin-bottom: 0.2rem;">📍 ${c.address[this.lang]}</p>
        <span style="color: rgba(255, 255, 255, 0.4); font-size: var(--text-xs);">${c.note[this.lang]}</span>
      </div>
    `).join('');
  }

  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const id = anchor.getAttribute('href');
        if (id === '#') return;
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          this.closeMobileMenu();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }
}

// Global Instant Instance
window.app = new AtelierApp();
