/**
 * Dr. Sabina Azimova — Content Data Dictionary (RU / EN)
 * Clean separated bilingual content architecture.
 */

const siteData = {
  ru: {
    brandTitle: "SABINA AZIMOVA",
    brandSub: "Стоматолог • Гигиенист",
    nav: {
      about: "О докторе",
      quiz: "Тест-подбор",
      works: "Работы",
      kids: "Детям",
      menu: "Услуги",
      reviews: "Отзывы",
      faq: "Вопросы",
      journal: "Блог",
      booking: "Запись",
      cta: "Записаться"
    },
    hero: {
      tag: "✦ Швейцарский протокол GBT • СПб",
      kidBadge: "Бережная адаптация малышей & забота для взрослых",
      titleLine1: "Красота и здоровье",
      titleLine2: "вашей улыбки",
      statement: "Индивидуальная гигиена эмали по швейцарскому протоколу GBT, бережный детский прием и деликатная эстетика улыбки в Санкт-Петербурге.",
      btnBook: "Записаться на прием",
      btnTelegram: "Консультация в Telegram →",
      captionDoctor: "Доктор Сабина Азимова",
      captionCity: "Петроградская / Невский",
      doodleArrow: "Смотри сюда! ✦"
    },
    trust: [
      {
        emoji: "🇨🇭",
        stamp: "GBT Protocol",
        title: "Швейцарский GBT",
        desc: "Мягкий порошок глицина бережно очищает налет без царапин на эмали."
      },
      {
        emoji: "🎈",
        stamp: "100% Без слез",
        title: "Детям без страха",
        desc: "Игровой адаптационный визит, подарки и улыбки маленьких героев."
      },
      {
        emoji: "📸",
        stamp: "Macro Photo",
        title: "Фотопротокол",
        desc: "Честная макросъемка каждого этапа до и после процедуры."
      },
      {
        emoji: "🛡️",
        stamp: "5-Step Sterile",
        title: "100% Стерильность",
        desc: "Строгий 5-ступенчатый протокол автоклавирования и индивидуальные наборы."
      }
    ],
    quiz: {
      tag: "Умный подбор за 30 секунд",
      title: "Какая процедура подойдет именно вам?",
      subtitle: "Ответьте на 2 простых вопроса, чтобы узнать точную стоимость и план ухода.",
      step1Title: "Шаг 1: Кто будет пациентом?",
      step2Title: "Шаг 2: Какая главная цель визита?",
      btnRestart: "↺ Пройти заново",
      btnBookResult: "Записаться на эту процедуру",
      step1Options: [
        { id: "adult", icon: "🧑", text: "Взрослый пациент", sub: "Комплексный уход & красота" },
        { id: "kid", icon: "🧒", text: "Ребенок (1.5–12 лет)", sub: "Первый визит & адаптация" },
        { id: "ortho", icon: "🦷", text: "С брекетами / ретейнером", sub: "Особая микроочистка замков" }
      ],
      step2Options: {
        adult: [
          { id: "gbt", icon: "☕", text: "Снять налет от чая/кофе", sub: "Швейцарский AirFlow GBT", serviceId: "gbt-hygiene" },
          { id: "white", icon: "💎", text: "Осветлить эмаль на 5–8 тонов", sub: "Бережное отбеливание", serviceId: "gentle-whitening" },
          { id: "therapy", icon: "✨", text: "Вылечить кариес / реставрация", sub: "Эстетическая терапия", serviceId: "aesthetic-therapy" }
        ],
        kid: [
          { id: "kid-first", icon: "🎈", text: "Первое знакомство & адаптация", sub: "Без слез, игра, подарок", serviceId: "kids-hygiene-ritual" },
          { id: "kid-hygiene", icon: "🍓", text: "Детская чистка + фторирование", sub: "Ягодный гель и урок чистки", serviceId: "kids-hygiene-ritual" },
          { id: "kid-caries", icon: "🛡️", text: "Профилактика кариеса", sub: "Укрепление эмали лаком", serviceId: "kids-hygiene-ritual" }
        ],
        ortho: [
          { id: "brackets", icon: "⚙️", text: "Гигиена с брекетами", sub: "Монопучковая полировка замков", serviceId: "ortho-hygiene" },
          { id: "retainer", icon: "✨", text: "Чистка вокруг ретейнера", sub: "Снятие камня под дугой", serviceId: "ortho-hygiene" },
          { id: "aligners", icon: "💎", text: "Уход с элайнерами", sub: "Снятие биопленки + фтор", serviceId: "ortho-hygiene" }
        ]
      },
      results: {
        "gbt-hygiene": {
          title: "Швейцарская комплексная гигиена AirFlow GBT",
          price: "4 900 ₽",
          duration: "60 минут",
          desc: "Идеально очищает пигментный налет от кофе и чая, полирует эмаль глицином и укрепляет минеральным комплексом."
        },
        "kids-hygiene-ritual": {
          title: "Детский адаптационный прием & Гигиена",
          price: "2 900 ₽",
          duration: "40 минут",
          desc: "Игровой осмотр со «щеткой-ветерком», деликатная чистка вкусной ягодной пастой, урок домашней гигиены и памятный подарок маленькому герою!"
        },
        "gentle-whitening": {
          title: "Бережное клиническое отбеливание эмали",
          price: "12 900 ₽",
          duration: "75 минут",
          desc: "Осветление на 5–8 тонов с защитой десен жидким коффердамом и антистресс-покрытием от гиперчувствительности."
        },
        "aesthetic-therapy": {
          title: "Лечение кариеса & Эстетическая реставрация",
          price: "от 3 800 ₽",
          duration: "50 минут",
          desc: "Бережная анестезия, изоляция коффердамом и анатомическое восстановление нанокомпозитами."
        },
        "ortho-hygiene": {
          title: "Специальная гигиена с брекетами и элайнерами",
          price: "5 500 ₽",
          duration: "60 минут",
          desc: "Прицельная ультразвуковая микрочистка каждого замочка и ретейнера, обучение монопучковой технике и глубокое фторирование."
        }
      }
    },
    gallery: {
      tag: "Клинические результаты",
      title: "Галерея До & После",
      subtitle: "Потяните интерактивную линию или используйте клавиши ← →, чтобы рассмотреть чистоту эмали.",
      badge: "Клинический случай",
      lblDuration: "Длительность",
      lblResult: "Результат",
      btnBook: "Хочу такой же результат",
      btnTg: "Спросить в Telegram →",
      tagBefore: "ДО",
      tagAfter: "ПОСЛЕ",
      sliderHint: "Потяни ползунок ⇄",
      cases: [
        {
          id: "case-smoker",
          category: "gbt-hygiene",
          tabLabel: "Курение & Чайный налет",
          title: "Снятие стойкого пигментированного налета и зубного камня",
          description: "Швейцарский протокол GBT: деликатное снятие стойкого табачного налета мелкодисперсным эритритолом AirFlow PLUS и ультразвуковое удаление камней с водяным охлаждением Piezon NO PAIN.",
          duration: "55 минут",
          result: "100% очищение эмали и восстановление естественного тона",
          beforeImage: "assets/images/works/photo_8_2026-08-24_16-13-04.jpg",
          afterImage: "assets/images/works/photo_9_2026-08-24_16-13-04.jpg"
        },
        {
          id: "case-lingual",
          category: "gbt-hygiene",
          tabLabel: "Язычные поверхности",
          title: "Удаление камня и темного налета с внутренней стороны резцов",
          description: "Зеркальный макропротокол: очищение труднодоступных поддесневых участков ультразвуком без микротравм мягких тканей, полировка до зеркального блеска.",
          duration: "50 минут",
          result: "Полное устранение воспаления и гладкость пришеечной зоны",
          beforeImage: "assets/images/works/photo_10_2026-08-24_16-13-04.jpg",
          afterImage: "assets/images/works/photo_11_2026-08-24_16-13-04.jpg"
        },
        {
          id: "case-ortho",
          category: "ortho-hygiene",
          tabLabel: "Орто-ретейнер",
          title: "Микроочистка зубов с несъемным ортодонтическим ретейнером",
          description: "Прицельное удаление минерализованного налета под проволочной дугой и вокруг композитных замков с 100% сохранением фиксации.",
          duration: "60 минут",
          result: "Чистота межзубных промежутков и защита от рецессии десны",
          beforeImage: "assets/images/works/photo_12_2026-08-24_16-13-04.jpg",
          afterImage: "assets/images/works/photo_14_2026-08-24_16-13-04.jpg"
        },
        {
          id: "case-biofilm",
          category: "gbt-hygiene",
          tabLabel: "Индикация биопленки",
          title: "Двухцветная швейцарская индикация и бережный AirFlow",
          description: "Органический индикатор окрашивает зрелую биопленку (>48ч) в фиолетовый, а свежий налет — в розовый для 100% прицельного и бережного удаления.",
          duration: "60 минут",
          result: "Абсолютно чистая поверхность и наглядное обучение гигиене",
          beforeImage: "assets/images/works/photo_30_2026-08-24_16-13-04.jpg",
          afterImage: "assets/images/works/photo_43_2026-08-24_16-13-04.jpg"
        },
        {
          id: "case-interdental",
          category: "gbt-hygiene",
          tabLabel: "Межзубные контакты",
          title: "Очищение плотных межзубных контактов и восстановление блеска",
          description: "Устранение чайного пигмента на границе резцов и клыков с бережным запечатыванием микропор эмали кальций-фосфатным комплексом.",
          duration: "45 минут",
          result: "Осветление на 2–3 тона без химического отбеливания",
          beforeImage: "assets/images/works/photo_1_2026-08-24_16-13-04.jpg",
          afterImage: "assets/images/works/photo_3_2026-08-24_16-13-04.jpg"
        }
      ]
    },
    worksGrid: {
      tag: "Реальные фотопротоколы",
      title: "Макро-результаты процедур",
      subtitle: "Честные фотографии клинических случаев без фильтров и ретуши. Нажмите для увеличения.",
      filterLabels: {
        all: "Все работы",
        gbt: "AirFlow GBT",
        kids: "Детский прием",
        ortho: "Брекеты & Ретейнеры",
        diagnostic: "Диагностика & Эмаль"
      },
      items: [
        {
          img: "assets/images/works/photo_9_2026-08-24_16-13-04.jpg",
          category: "gbt",
          badge: "AirFlow GBT",
          title: "Устранение стойкого табачного налета",
          desc: "Эритритоловый порошок удалил въевшийся налет без повреждения структуры эмали.",
          doctorNote: "✨ Восстановлен естественный тон эмали"
        },
        {
          img: "assets/images/works/photo_11_2026-08-24_16-13-04.jpg",
          category: "gbt",
          badge: "Piezon Ultrasound",
          title: "Зеркальный контроль язычных поверхностей",
          desc: "Полное очищение поддесневого камня на нижних резцах с финишной полировкой.",
          doctorNote: "🦷 Десна спокойна, воспаление снято"
        },
        {
          img: "assets/images/works/photo_14_2026-08-24_16-13-04.jpg",
          category: "ortho",
          badge: "Орто-протокол",
          title: "Чистка вокруг проволочного ретейнера",
          desc: "Прецизионное удаление налета под дугой без риска расцементировки композита.",
          doctorNote: "🌿 Сохранность орто-фиксации 100%"
        },
        {
          img: "assets/images/works/photo_24_2026-08-24_16-13-04.jpg",
          category: "kids",
          badge: "Детский прием",
          title: "Деликатная гигиена с кольцом OptraGate",
          desc: "Мягкая защита губок и щек: чистка прошла легко, без слез и с улыбкой.",
          doctorNote: "🎈 Маленький пациент улыбался всю процедуру"
        },
        {
          img: "assets/images/works/photo_30_2026-08-24_16-13-04.jpg",
          category: "gbt",
          badge: "GBT Индикация",
          title: "2-Цветная индикация биопленки",
          desc: "Фиолетовый цвет — зрелый налет >48 часов, розовый — свежий налет.",
          doctorNote: "🔍 Наглядная карта для домашней гигиены"
        },
        {
          img: "assets/images/works/photo_64_2026-08-24_16-13-04.jpg",
          category: "diagnostic",
          badge: "Макро-диагностика",
          title: "Обнаружение скрытого фиссурного кариеса",
          desc: "Идеальная чистота эмали позволила выявить начальный кариес без сверления.",
          doctorNote: "🛡️ Вовремя спасли зуб без глубокого препарирования"
        },
        {
          img: "assets/images/works/photo_28_2026-08-24_16-13-04.jpg",
          category: "ortho",
          badge: "Имплант-уход",
          title: "Гигиена вокруг формирователя импланта",
          desc: "Безопасная обработка десневой манжеты мягким глицином без риска для титана.",
          doctorNote: "💎 Профилактика периимплантита"
        },
        {
          img: "assets/images/works/photo_82_2026-08-24_16-13-04.jpg",
          category: "diagnostic",
          badge: "Реминерализация",
          title: "Глубокое фторирование и полировка",
          desc: "Зеркальный блеск окклюзионной зоны после насыщения кальцием и фосфатами.",
          doctorNote: "✨ Сияние и защита от кислот на 6 месяцев"
        },
        {
          img: "assets/images/works/photo_3_2026-08-24_16-13-04.jpg",
          category: "gbt",
          badge: "AirFlow Glycine",
          title: "Осветление контактных пунктов резцов",
          desc: "Бережное удаление контактного налета от кофе и чая в межзубных промежутках.",
          doctorNote: "☕ Естественная белизна без перекиси"
        },
        {
          img: "assets/images/works/photo_15_2026-08-24_16-13-04.jpg",
          category: "ortho",
          badge: "Верхний ретейнер",
          title: "Зеркальная макросъемка небной дуги",
          desc: "Контроль чистоты небных поверхностей резцов и межзубных сосочков.",
          doctorNote: "🪞 Идеальная чистота вокруг каждого фиксатора"
        },
        {
          img: "assets/images/works/photo_21_2026-08-24_16-13-04.jpg",
          category: "kids",
          badge: "Адаптация малыша",
          title: "Игровой осмотр и урок чистки зубок",
          desc: "Знакомство с мягкими щеточками и ягодной пастой в формате доброй игры.",
          doctorNote: "⭐ Ребенок не боится стоматолога"
        },
        {
          img: "assets/images/works/photo_86_2026-08-24_16-13-04.jpg",
          category: "diagnostic",
          badge: "Зеркальный осмотр",
          title: "Финишный контроль гладкости эмали",
          desc: "Контрольная зеркальная макрофотография перед нанесением минерального лака.",
          doctorNote: "🔬 Эталонная чистота по швейцарскому стандарту"
        }
      ]
    },
    kids: {
      tag: "Детская лаборатория улыбок",
      badge: "⭐ 100% без слез и страха",
      title: "Стоматолог, к которому ребенок идет с улыбкой",
      desc: "Я искренне люблю детей и знаю, как важно бережно сформировать первое впечатление о докторе. Мы не пугаем строгими правилами и уколами: мы играем, знакомимся со «щеткой-ветерком», чистим зубки веселым персонажам и учимся правильно ухаживать за улыбкой дома.",
      steps: [
        {
          num: "Шаг 01 💨",
          title: "Щетка-ветерок & Знакомство",
          desc: "Знакомство с кабинетом и безопасными инструментами в форме веселой игры."
        },
        {
          num: "Шаг 02 🪞",
          title: "Волшебное зеркальце",
          desc: "Считаем зубки вместе с ребенком и смотрим любимые мультфильмы."
        },
        {
          num: "Шаг 03 🍓",
          title: "Ягодный супер-гель",
          desc: "Деликатное укрепление эмали вкусным фруктовым лаком без горечи."
        },
        {
          num: "Шаг 04 🎁",
          title: "Медаль & Подарок героя",
          desc: "Каждый маленький пациент выбирает памятный сувенир за смелость."
        }
      ],
      timerTitle: "Интерактивный таймер чистки зубок (2 минуты) ⏱️",
      timerStart: "▶ Начать чистку",
      timerPause: "⏸ Пауза",
      timerReset: "↺ Сброс",
      timerBadgeReady: "Правило 4 зон (по 30 сек) 🦷",
      timerInitialTip: "Нажмите «Начать чистку», чтобы правильно очистить все 4 зоны вместе с доктором!",
      timerZones: [
        { label: "1. Верхние", icon: "🍓", name: "Верхние зубки (снаружи)", tip: "🍓 Чистим верхние зубки круговыми движениями!" },
        { label: "2. Нижние", icon: "✨", name: "Нижние зубки (снаружи)", tip: "✨ Выметающие движения снизу вверх от десны!" },
        { label: "3. Изнутри", icon: "🦷", name: "Внутренняя сторона", tip: "🦷 Аккуратно выметаем налет изнутри!" },
        { label: "4. Язычок", icon: "👅", name: "Жевательные & Язычок", tip: "👅 Финиш! Чистим верхушки и язычок!" }
      ],
      timerFinished: "🎉 Ура! Вы с малышом супергерои чистых зубок! Все 4 зоны сияют! Медаль героя получена! 🎖️",
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
    reviews: {
      tag: "Книга добрых отзывов",
      title: "Что говорят пациенты и мамы",
      subtitle: "Искренние отзывы пациентов после бережного приема у доктора Сабины.",
      items: [
        {
          name: "Анна М.",
          badge: "Мама Марка (4 года)",
          stars: "★★★★★",
          text: "Сын панически боялся врачей после поликлиники. Сабина за 2 минуты превратила осмотр в игру: посчитали зубки, почистили «ветерком», подарили машинку. Сын вышел с улыбкой и теперь сам зовет чистить зубки!"
        },
        {
          name: "Дмитрий В.",
          badge: "AirFlow GBT Пациент",
          stars: "★★★★★",
          text: "Много лет пью крепкий кофе, образовался темный налет. Доктор Сабина сделала чистку абсолютно без боли на швейцарском аппарате. Зубы стали заметно светлее и гладкие, как стекло. Рекомендую!"
        },
        {
          name: "Екатерина С.",
          badge: "Ношу ретейнеры 2 года",
          stars: "★★★★★",
          text: "Вокруг ретейнеров постоянно копился камень, десны кровоточили. Сабина ювелирно очистила каждую проволочку, подобрала специальную щеточку и научила правильно ухаживать. Десны успокоились за 2 дня."
        },
        {
          name: "Ольга П.",
          badge: "Клиническое отбеливание",
          stars: "★★★★★",
          text: "Очень боялась чувствительности после отбеливания. Сабина нанесла защитное минеральное покрытие — зубы посветлели на 6 тонов, и никакой ломоты на холодную воду! Идеальная бережная работа."
        }
      ]
    },
    faq: {
      tag: "Вопросы без страха",
      title: "Частые вопросы пациентов",
      subtitle: "Честные и понятные ответы доктора Сабины на самые волнующие темы.",
      items: [
        {
          q: "Больно ли делать профессиональную гигиену AirFlow?",
          a: "Абсолютно нет! В отличие от старых методик с грубой содой, мы используем швейцарский протокол GBT с порошком на основе глицина. Его частицы в 4 раза меньше песчинки и имеют сладковатый вкус. Процедура ощущается как приятный массаж десен теплым водяным облаком.",
          doctorNote: "Заметка доктора: Даже пациенты с чувствительной эмалью переносят сеанс с полным комфортом ✨"
        },
        {
          q: "С какого возраста нужно приводить ребенка на первый визит?",
          a: "Оптимально — в 1.5–2 года, когда прорезались первые молочные зубки. Главная цель — адаптация в игровой форме, чтобы у ребенка никогда не возник страх белых халатов. Мы играем, знакомимся со щеточкой и дарим сувенир.",
          doctorNote: "Заметка доктора: Не ждите, пока зуб заболит — первый визит должен быть праздником и игрой! 🎈"
        },
        {
          q: "Не повредит ли чистка ультразвуком эмаль или ретейнеры?",
          a: "Нет. Мы используем оригинальный наконечник Piezon NO PAIN. Ультразвуковая волна направлена строго линейно параллельно зубу, разрушая только отложения и налет, не касаясь здоровой эмали и не срывая клей ретейнера.",
          doctorNote: "Заметка доктора: Полная безопасность для пломб, виниров и ортодонтических конструкций 🛡️"
        },
        {
          q: "Как часто взрослым и детям нужно делать профгигиену?",
          a: "Стандартный интервал — 1 раз в 6 месяцев. Пациентам с брекетами, элайнерами или склонностью к быстрому образованию налета рекомендуется визит раз в 3–4 месяца.",
          doctorNote: "Заметка доктора: Регулярная гигиена предотвращает 95% случаев кариеса и экономит бюджет на лечении!"
        }
      ]
    },
    locations: {
      tag: "Удобные локации в центре",
      title: "Где принимает доктор Сабина",
      subtitle: "Современные кабинеты в 3 минутах от метро с премиальным немецким оборудованием KaVo.",
      tabPetrograd: "📍 Петроградская",
      tabNevsky: "📍 Невский Проспект",
      clinics: [
        {
          id: "petrograd",
          name: "Кабинет на Петроградской",
          metro: "м. Петроградская (3 мин пешком)",
          address: "Каменноостровский проспект, 26",
          features: [
            "🇩🇪 Немецкая стоматологическая установка KaVo",
            "☕ Уютная зона ожидания с чаем и раскрасками для детей",
            "🅿️ Закрытая парковка во дворе для пациентов",
            "🕒 Прием с 10:00 до 21:00 по предварительной записи"
          ],
          image: "assets/images/clinic.jpg",
          yandexUrl: "https://yandex.ru/maps/-/CDuWfZ3k",
          twoGisUrl: "https://2gis.ru/spb"
        },
        {
          id: "nevsky",
          name: "Кабинет на Невском проспекте",
          metro: "м. Невский Проспект / Гостиный Двор",
          address: "Центральный район, Невский пр.",
          features: [
            "🏛️ Исторический центр города с панорамными окнами",
            "🔬 Микроскоп и фотопротокол высокого разрешения",
            "🧸 Игровая зона адаптации для маленьких героев",
            "🕒 Удобные вечерние часы и прием в выходные дни"
          ],
          image: "assets/images/dr-sabina.jpg",
          yandexUrl: "https://yandex.ru/maps/-/CDuWfZ3k",
          twoGisUrl: "https://2gis.ru/spb"
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
      errEmpty: "Пожалуйста, заполните имя и контакт для связи.",
      confirmTitle: "✨ Заявка успешно отправлена!",
      confirmDesc: "Доктор Сабина свяжется с вами в течение 15 минут для подтверждения удобного времени.",
      timeOptions: [
        "Ближайшие дни (Утро 10:00–13:00)",
        "Ближайшие дни (День 13:00–17:00)",
        "Ближайшие дни (Вечер 17:00–21:00)",
        "Выходные дни"
      ]
    },
    footer: {
      desc: "Бережная взрослая и детская стоматология, профессиональная гигиена полости рта и эстетическая терапия в Санкт-Петербурге.",
      doctorQuote: "«Улыбайтесь чаще — это вам очень к лицу!» — Д-р Сабина ✦",
      clinicsTitle: "Адреса приема",
      contactTitle: "Связь с доктором",
      copyright: "© 2026 Dr. Sabina Azimova Dental Atelier.",
      subnote: "Прием по предварительной записи"
    },
    floatingTg: "Записаться в Telegram"
  },

  en: {
    brandTitle: "SABINA AZIMOVA",
    brandSub: "Dentist • Hygienist",
    nav: {
      about: "About",
      quiz: "Find Care",
      works: "Works",
      kids: "For Kids",
      menu: "Treatments",
      reviews: "Reviews",
      faq: "FAQ",
      journal: "Journal",
      booking: "Reserve",
      cta: "Book Visit"
    },
    hero: {
      tag: "✦ Swiss GBT Protocol • SPb",
      kidBadge: "Gentle pediatric care & adult aesthetics",
      titleLine1: "The Art of a Natural",
      titleLine2: "Healthy Smile",
      statement: "Gentle Swiss GBT hygiene, playful fear-free care for young patients, and natural aesthetic dentistry in St. Petersburg.",
      btnBook: "Book Appointment",
      btnTelegram: "Consult on Telegram →",
      captionDoctor: "Dr. Sabina Azimova",
      captionCity: "Petrogradskaya / Nevsky",
      doodleArrow: "Take a look! ✦"
    },
    trust: [
      {
        emoji: "🇨🇭",
        stamp: "GBT Protocol",
        title: "Swiss GBT Protocol",
        desc: "Soft glycine powder removes biofilm with zero enamel damage."
      },
      {
        emoji: "🎈",
        stamp: "100% Fear-Free",
        title: "Gentle for Kids",
        desc: "Playful adaptation, rewards, and happy smiling little heroes."
      },
      {
        emoji: "📸",
        stamp: "Macro Photo",
        title: "Photo Protocol",
        desc: "Honest clinical macro photos of every treatment step."
      },
      {
        emoji: "🛡️",
        stamp: "5-Step Sterile",
        title: "100% Sterilization",
        desc: "Rigorous 5-step autoclaving and sealed sterile kits."
      }
    ],
    quiz: {
      tag: "Smart Match in 30 Seconds",
      title: "Which Treatment Fits You Best?",
      subtitle: "Answer 2 simple questions to find the ideal procedure and pricing.",
      step1Title: "Step 1: Who is the patient?",
      step2Title: "Step 2: What is your primary goal?",
      btnRestart: "↺ Start Over",
      btnBookResult: "Book This Treatment",
      step1Options: [
        { id: "adult", icon: "🧑", text: "Adult Patient", sub: "Complete hygiene & beauty" },
        { id: "kid", icon: "🧒", text: "Child (1.5–12 yrs)", sub: "Playful first visit" },
        { id: "ortho", icon: "🦷", text: "Braces / Retainer", sub: "Micro-cleaning around wires" }
      ],
      step2Options: {
        adult: [
          { id: "gbt", icon: "☕", text: "Remove tea/coffee stains", sub: "Swiss AirFlow GBT", serviceId: "gbt-hygiene" },
          { id: "white", icon: "💎", text: "Lighten enamel 5–8 shades", sub: "Gentle Whitening", serviceId: "gentle-whitening" },
          { id: "therapy", icon: "✨", text: "Caries therapy / Restoration", sub: "Aesthetic therapy", serviceId: "aesthetic-therapy" }
        ],
        kid: [
          { id: "kid-first", icon: "🎈", text: "First visit & adaptation", sub: "No tears, game, prize", serviceId: "kids-hygiene-ritual" },
          { id: "kid-hygiene", icon: "🍓", text: "Pediatric cleaning + fluoride", sub: "Berry varnish & lesson", serviceId: "kids-hygiene-ritual" },
          { id: "kid-caries", icon: "🛡️", text: "Caries prevention", sub: "Enamel strengthening", serviceId: "kids-hygiene-ritual" }
        ],
        ortho: [
          { id: "brackets", icon: "⚙️", text: "Cleaning with braces", sub: "Single-tuft brush micro-scaling", serviceId: "ortho-hygiene" },
          { id: "retainer", icon: "✨", text: "Cleaning around retainers", sub: "Calculus removal under wire", serviceId: "ortho-hygiene" },
          { id: "aligners", icon: "💎", text: "Care with aligners", sub: "Biofilm removal + fluoride", serviceId: "ortho-hygiene" }
        ]
      },
      results: {
        "gbt-hygiene": {
          title: "Swiss Complex Oral Hygiene (AirFlow GBT)",
          price: "4 900 ₽",
          duration: "60 minutes",
          desc: "Removes tea and coffee pigment with soft glycine powder, gently scaling tartar and remineralizing enamel."
        },
        "kids-hygiene-ritual": {
          title: "Pediatric Adaptation & Preventive Cleaning",
          price: "2 900 ₽",
          duration: "40 minutes",
          desc: "Playful checkup with the 'breeze brush', delicious fruit paste, brushing masterclass, and a hero prize!"
        },
        "gentle-whitening": {
          title: "Gentle Clinical Teeth Whitening",
          price: "12 900 ₽",
          duration: "75 minutes",
          desc: "Lightens 5–8 shades with liquid dam gum protection and anti-sensitivity mineral coating."
        },
        "aesthetic-therapy": {
          title: "Caries Therapy & Aesthetic Restoration",
          price: "from 3 800 ₽",
          duration: "50 minutes",
          desc: "Gentle anesthesia, rubber dam isolation, and seamless anatomical nano-composite filling."
        },
        "ortho-hygiene": {
          title: "Special Hygiene for Braces & Retainers",
          price: "5 500 ₽",
          duration: "60 minutes",
          desc: "Targeted ultrasonic micro-cleaning around every bracket and wire with single-tuft brush guidance."
        }
      }
    },
    gallery: {
      tag: "Clinical Results",
      title: "Before & After Gallery",
      subtitle: "Drag the interactive line or use arrow keys ← → to examine enamel texture and clean results.",
      badge: "Clinical Case",
      lblDuration: "Duration",
      lblResult: "Outcome",
      btnBook: "Book This Result",
      btnTg: "Inquire on Telegram →",
      tagBefore: "BEFORE",
      tagAfter: "AFTER",
      sliderHint: "Drag the split line ⇄",
      cases: [
        {
          id: "case-smoker",
          category: "gbt-hygiene",
          tabLabel: "Heavy Stains & Tartar",
          title: "Deep Tobacco & Coffee Stain Removal",
          description: "Swiss GBT Protocol: gentle AirFlow PLUS erythritol powder debridement and Piezon NO PAIN ultrasonic scaling for heavy pigment and calculus.",
          duration: "55 minutes",
          result: "100% plaque elimination and natural tooth shade restored",
          beforeImage: "assets/images/works/photo_8_2026-08-24_16-13-04.jpg",
          afterImage: "assets/images/works/photo_9_2026-08-24_16-13-04.jpg"
        },
        {
          id: "case-lingual",
          category: "gbt-hygiene",
          tabLabel: "Lingual Surfaces",
          title: "Subgingival Calculus Removal Behind Lower Incisors",
          description: "Mirror macro protocol: precision scaling of deep lingual recesses with zero soft-tissue trauma and high-gloss enamel polish.",
          duration: "50 minutes",
          result: "Full elimination of calculus & gum inflammation",
          beforeImage: "assets/images/works/photo_10_2026-08-24_16-13-04.jpg",
          afterImage: "assets/images/works/photo_11_2026-08-24_16-13-04.jpg"
        },
        {
          id: "case-ortho",
          category: "ortho-hygiene",
          tabLabel: "Bonded Retainer",
          title: "Precision Hygiene Around Fixed Retainer Wire",
          description: "Targeted debridement under retention wire and bonding buttons with zero risk to retainer adhesion.",
          duration: "60 minutes",
          result: "Pristine interdental health and recession prevention",
          beforeImage: "assets/images/works/photo_12_2026-08-24_16-13-04.jpg",
          afterImage: "assets/images/works/photo_14_2026-08-24_16-13-04.jpg"
        },
        {
          id: "case-biofilm",
          category: "gbt-hygiene",
          tabLabel: "Biofilm Disclosure",
          title: "Swiss 2-Tone Biofilm Disclosure & Targeted AirFlow",
          description: "Organic 2-tone dye highlights mature biofilm (>48h) in purple and recent plaque in pink for 100% targeted removal.",
          duration: "60 minutes",
          result: "Total biofilm eradication and individualized home-care coaching",
          beforeImage: "assets/images/works/photo_30_2026-08-24_16-13-04.jpg",
          afterImage: "assets/images/works/photo_43_2026-08-24_16-13-04.jpg"
        },
        {
          id: "case-interdental",
          category: "gbt-hygiene",
          tabLabel: "Interdental Contacts",
          title: "Interproximal Enamel Clearance & Gloss Restoration",
          description: "Removal of deep interproximal tannin stains and enamel pore sealing with remineralizing calcium-phosphate matrix.",
          duration: "45 minutes",
          result: "2–3 shades brighter naturally without bleaching",
          beforeImage: "assets/images/works/photo_1_2026-08-24_16-13-04.jpg",
          afterImage: "assets/images/works/photo_3_2026-08-24_16-13-04.jpg"
        }
      ]
    },
    worksGrid: {
      tag: "Real Photo Protocols",
      title: "Clinical Macro Documentation",
      subtitle: "Unedited photographs of real patient outcomes. Click to expand in high resolution.",
      filterLabels: {
        all: "All Cases",
        gbt: "AirFlow GBT",
        kids: "Kids Care",
        ortho: "Braces & Retainers",
        diagnostic: "Diagnostics & Enamel"
      },
      items: [
        {
          img: "assets/images/works/photo_9_2026-08-24_16-13-04.jpg",
          category: "gbt",
          badge: "AirFlow GBT",
          title: "Heavy Smoker Stain Elimination",
          desc: "Erythritol powder removes dense tar deposits while preserving micro-enamel anatomy.",
          doctorNote: "✨ Natural tooth tone fully restored"
        },
        {
          img: "assets/images/works/photo_11_2026-08-24_16-13-04.jpg",
          category: "gbt",
          badge: "Piezon Ultrasound",
          title: "Lingual Incisor Calculus Scaling",
          desc: "Complete subgingival debridement on lower incisors with zero bleeding.",
          doctorNote: "🦷 Calm pink gingiva, zero inflammation"
        },
        {
          img: "assets/images/works/photo_14_2026-08-24_16-13-04.jpg",
          category: "ortho",
          badge: "Ortho Protocol",
          title: "Fixed Retainer Sub-Wire Cleaning",
          desc: "Precision scaling under orthodontic wire with zero risk to composite bond strength.",
          doctorNote: "🌿 100% retention bond integrity"
        },
        {
          img: "assets/images/works/photo_24_2026-08-24_16-13-04.jpg",
          category: "kids",
          badge: "Pediatric Care",
          title: "Gentle Hygiene with OptraGate Ring",
          desc: "Soft lip protector provides total comfort: gentle polishing with zero tears.",
          doctorNote: "🎈 Young patient smiled throughout the visit"
        },
        {
          img: "assets/images/works/photo_30_2026-08-24_16-13-04.jpg",
          category: "gbt",
          badge: "GBT Disclosure",
          title: "2-Tone Biofilm Visualization",
          desc: "Purple highlights mature biofilm (>48h); pink shows recent bacterial plaque.",
          doctorNote: "🔍 Visual roadmap for home brushing improvement"
        },
        {
          img: "assets/images/works/photo_64_2026-08-24_16-13-04.jpg",
          category: "diagnostic",
          badge: "Macro Diagnostics",
          title: "Hidden Fissure Caries Early Discovery",
          desc: "Crystal-clean enamel revealed early demineralization, caught in time without drilling.",
          doctorNote: "🛡️ Detected early: saved tooth non-invasively"
        },
        {
          img: "assets/images/works/photo_28_2026-08-24_16-13-04.jpg",
          category: "ortho",
          badge: "Implant Care",
          title: "Peri-Implant Soft Tissue Hygiene",
          desc: "Titanium-safe gentle glycine stream protects the implant collar and soft cuff.",
          doctorNote: "💎 Peri-implantitis prevention protocol"
        },
        {
          img: "assets/images/works/photo_82_2026-08-24_16-13-04.jpg",
          category: "diagnostic",
          badge: "Remineralization",
          title: "Deep Fluoridation & Enamel Gloss",
          desc: "Glass-like occlusal reflection following intensive calcium-phosphate therapy.",
          doctorNote: "✨ Mirror shine & 6-month acid barrier"
        },
        {
          img: "assets/images/works/photo_3_2026-08-24_16-13-04.jpg",
          category: "gbt",
          badge: "AirFlow Glycine",
          title: "Interdental Contact Stain Clearance",
          desc: "Targeted removal of coffee and tea discoloration between anterior teeth.",
          doctorNote: "☕ Natural radiance without chemical bleach"
        },
        {
          img: "assets/images/works/photo_15_2026-08-24_16-13-04.jpg",
          category: "ortho",
          badge: "Upper Retainer",
          title: "Upper Arch Retainer Palatal Macro",
          desc: "Mirror-guided inspection of palatal enamel and interdental papilla.",
          doctorNote: "🪞 Impeccable cleanliness around each bond"
        },
        {
          img: "assets/images/works/photo_21_2026-08-24_16-13-04.jpg",
          category: "kids",
          badge: "Kids Adaptation",
          title: "Playful Exam & Brushing Masterclass",
          desc: "Introducing gentle instruments and tasty berry paste through an engaging fairy tale.",
          doctorNote: "⭐ Child feels comfortable and fearless"
        },
        {
          img: "assets/images/works/photo_86_2026-08-24_16-13-04.jpg",
          category: "diagnostic",
          badge: "Mirror Macro",
          title: "Final Enamel Smoothness Inspection",
          desc: "High-magnification mirror inspection prior to mineral protective sealing.",
          doctorNote: "🔬 Benchmark cleanliness per Swiss protocol"
        }
      ]
    },
    kids: {
      tag: "Kids Smile Laboratory",
      badge: "⭐ 100% Fear-Free Adaptation",
      title: "The Dentist Your Child Loves to Visit",
      desc: "I genuinely adore children and understand how crucial the first dental visit is. We replace fear with curiosity: playing with dental models, exploring the gentle 'breeze brush', and learning how to care for teeth happily at home.",
      steps: [
        {
          num: "Step 01 💨",
          title: "Breeze Brush & Discovery",
          desc: "Exploring the clinic and gentle instruments through playful storytelling."
        },
        {
          num: "Step 02 🪞",
          title: "Magic Mirror",
          desc: "Counting teeth together with the child while watching favorite cartoons."
        },
        {
          num: "Step 03 🍓",
          title: "Berry Super-Gel",
          desc: "Gentle enamel strengthening with fruit-flavored non-bitter protective varnish."
        },
        {
          num: "Step 04 🎁",
          title: "Hero Medal & Prize",
          desc: "Every brave little patient picks a memorable souvenir after their visit."
        }
      ],
      timerTitle: "Interactive 2-Minute Tooth Brushing Timer ⏱️",
      timerStart: "▶ Start Brushing",
      timerPause: "⏸ Pause",
      timerReset: "↺ Reset",
      timerBadgeReady: "4-Quadrant Rule (30s each) 🦷",
      timerInitialTip: "Click 'Start Brushing' to clean each dental zone with Dr. Sabina!",
      timerZones: [
        { label: "1. Upper", icon: "🍓", name: "Upper teeth (outer)", tip: "🍓 Brush upper teeth with gentle circular motions!" },
        { label: "2. Lower", icon: "✨", name: "Lower teeth (outer)", tip: "✨ Sweep from the gumline upwards!" },
        { label: "3. Inside", icon: "🦷", name: "Inner surfaces", tip: "🦷 Carefully sweep plaque from the inside!" },
        { label: "4. Tongue", icon: "👅", name: "Chewing tops & tongue", tip: "👅 Finish with chewing surfaces and tongue!" }
      ],
      timerFinished: "🎉 Woohoo! You and your little one are clean teeth superheroes! All 4 zones spotless! 🎖️",
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
    reviews: {
      tag: "Patient Guestbook",
      title: "Kind Words from Patients & Parents",
      subtitle: "Genuine feedback after gentle care at Dr. Sabina's clinic.",
      items: [
        {
          name: "Anna M.",
          badge: "Mom of Mark (4 yrs)",
          stars: "★★★★★",
          text: "My son was terrified of doctors. Dr. Sabina turned the visit into a fairytale within 2 minutes: counted teeth, played with the breeze brush, gave a toy car. He left laughing and now reminds me to brush every night!"
        },
        {
          name: "Dmitry V.",
          badge: "AirFlow GBT Patient",
          stars: "★★★★★",
          text: "Heavy coffee drinker here. Dr. Sabina performed AirFlow with zero pain. Teeth look noticeably brighter, gums feel amazing. True masterclass in gentle dental hygiene."
        },
        {
          name: "Ekaterina S.",
          badge: "Wearing retainers for 2 yrs",
          stars: "★★★★★",
          text: "Tartar was constantly building up behind my retainers. Sabina meticulously cleaned every link, taught me single-tuft brushing, and remineralized the enamel. Bleeding stopped immediately."
        },
        {
          name: "Olga P.",
          badge: "Clinical Whitening",
          stars: "★★★★★",
          text: "I was worried about post-whitening sensitivity. Sabina applied a protective mineral shield — teeth are 6 shades lighter with zero cold sensitivity! Highly recommended."
        }
      ]
    },
    faq: {
      tag: "Fear-Free Answers",
      title: "Frequently Asked Questions",
      subtitle: "Clear, transparent answers from Dr. Sabina regarding your most common questions.",
      items: [
        {
          q: "Does AirFlow GBT oral hygiene hurt?",
          a: "Not at all! Unlike older sodium powders that felt rough, we use the Swiss GBT protocol with gentle glycine powder. The particles are 4 times smaller than a grain of sand and taste slightly sweet. It feels like a warm, soothing gum massage.",
          doctorNote: "Doctor's Note: Even patients with highly sensitive teeth enjoy a completely comfortable visit ✨"
        },
        {
          q: "At what age should I bring my child for their first visit?",
          a: "The ideal age is between 1.5 and 2 years old, as soon as primary teeth appear. The main goal is playful adaptation so that the child never develops dental anxiety.",
          doctorNote: "Doctor's Note: Don't wait for toothache — the first dental visit should be a joyful game! 🎈"
        },
        {
          q: "Will ultrasonic cleaning damage enamel or retainers?",
          a: "No. We utilize the specialized Piezon NO PAIN tip. Ultrasonic micro-vibrations oscillate strictly parallel to the tooth surface, detaching calculus without scratching enamel or loosening retainer bonding.",
          doctorNote: "Doctor's Note: 100% safe for fillings, veneers, and orthodontic appliances 🛡️"
        },
        {
          q: "How often should adults and children get professional hygiene?",
          a: "Every 6 months for standard preventive care. For patients with braces, aligners, or rapid plaque buildup, visits every 3–4 months are recommended.",
          doctorNote: "Doctor's Note: Regular hygiene prevents 95% of dental cavities and saves major treatment costs!"
        }
      ]
    },
    locations: {
      tag: "Prime Central Locations",
      title: "Clinic Locations in St. Petersburg",
      subtitle: "State-of-the-art facilities located 3 minutes from metro with German KaVo equipment.",
      tabPetrograd: "📍 Petrogradskaya",
      tabNevsky: "📍 Nevsky Prospect",
      clinics: [
        {
          id: "petrograd",
          name: "Petrogradskaya Clinic",
          metro: "Petrogradskaya Metro (3 min walk)",
          address: "Kamennoostrovsky Prospect, 26",
          features: [
            "🇩🇪 German KaVo dental workstation",
            "☕ Cozy waiting lounge with tea and kid coloring books",
            "🅿️ Patient courtyard parking available",
            "🕒 Open 10:00 to 21:00 by appointment"
          ],
          image: "assets/images/clinic.jpg",
          yandexUrl: "https://yandex.ru/maps/-/CDuWfZ3k",
          twoGisUrl: "https://2gis.ru/spb"
        },
        {
          id: "nevsky",
          name: "Nevsky Prospect Clinic",
          metro: "Nevsky Prospect / Gostiny Dvor",
          address: "Central District, Nevsky Prospekt",
          features: [
            "🏛️ Historic center with scenic panoramic views",
            "🔬 Clinical microscope and high-res macro photo protocol",
            "🧸 Playful child adaptation corner",
            "🕒 Evening and weekend appointment slots"
          ],
          image: "assets/images/dr-sabina.jpg",
          yandexUrl: "https://yandex.ru/maps/-/CDuWfZ3k",
          twoGisUrl: "https://2gis.ru/spb"
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
      errEmpty: "Please provide your name and contact details.",
      confirmTitle: "✨ Request Sent Successfully!",
      confirmDesc: "Dr. Sabina will contact you within 15 minutes to confirm the exact appointment slot.",
      timeOptions: [
        "Upcoming days (Morning 10:00–13:00)",
        "Upcoming days (Afternoon 13:00–17:00)",
        "Upcoming days (Evening 17:00–21:00)",
        "Weekend slots"
      ]
    },
    footer: {
      desc: "Gentle adult and pediatric dental care, professional oral hygiene, and smile aesthetics in Saint Petersburg.",
      doctorQuote: "“Smile often — it looks wonderful on you!” — Dr. Sabina ✦",
      clinicsTitle: "Clinic Locations",
      contactTitle: "Get in Touch",
      copyright: "© 2026 Dr. Sabina Azimova Dental Atelier.",
      subnote: "By appointment only"
    },
    floatingTg: "Chat on Telegram"
  }
};

const siteConfig = {
  telegramUsername: "sabina_dental_spb",
  telegramChannelUrl: "https://t.me/sabina_teeth_spb"
};
