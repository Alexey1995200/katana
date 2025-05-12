import {format} from "date-fns";
import {
  badminton,
  bag, banner1, banner2, banner3, banner4, banner5, banner6, bull,
  childIco, childPhoto,
  dessertIco, dessetPhoto, fish, flowers,
  hotIco, hotPhoto, neko,
  pizzaIco, pizzaPhoto, primaryBannerPng,
  rollsIco, rollsPhoto,
  saladIco, saladPhoto,
  setIco,
  setPhoto,
  snackIco, snackPhoto,
  soupIco, soupPhoto,
  sushiIco, sushiPhoto, turtle,
  veganIco, veganPhoto,
  wokIco, wokPhoto
} from "./assets";
import {IAdvantage, IBlogBanner, IBlogItem, IMenuCategory, IMenuItem} from "./interface";

// export const screenWidth: number = window.innerWidth

export const timestampToDMY = (timestamp: number) => format(new Date(timestamp), 'dd.MM.yyyy')
export const timestampToDMYNumStrNum = (timestamp: number) => format(new Date(timestamp), 'dd.MM.yyyy')
export const contactsInfo = [
  {
    title: 'Phone numbers',
    content: [
      '+38 (099) 123-45-67',
      '+38 (099) 123-45-67',
      '+38 (099) 123-45-67'
    ]
  }, {
    title: 'Feedback',
    content: [
      'Пожелания и замечания для поддержки и контроля качества вы можете отправить нам на почту mail@gmail.com'
    ]
  }, {
    title: 'corpo clients',
    content: [
      'Для заключения договоров на корпоративное питание или поставки продукции отправьте запрос на почту mail@gmail.com'
    ]
  }, {
    title: 'To the Suppliers',
    content: [
      'Ждём ваши предложения на почту mail@gmail.com'
    ]
  }, {
    title: 'ad offers',
    content: [
      'Ваши идеи и предложения по рекламе/ кросс-промо присылайте на почту mail@gmail.com'
    ]
  }, {
    title: 'details',
    content: [
      'ОО «БЛЕКСУШИ»',
      'ИНН: 7743357003',
      'КПП: 774301001',
      'ОГРН: 1217700130713',
      'Юр. адрес: 125130, г. Харьков, вн.тер.г.муниципальный округ Войковский'
    ]
  }
];


export const categoryList: IMenuCategory[] = [
  {
    title: "Sets",
    link: "/menu/sets",
    ico: setIco,
    img: setPhoto
  }, {
    title: "Pizza",
    link: "/menu/pizza",
    ico: pizzaIco,
    img: pizzaPhoto
  }, {
    title: "Soups",
    link: "/menu/soups",
    ico: soupIco,
    img: soupPhoto
  }, {
    title: "Hot",
    link: "/menu/hot",
    ico: hotIco,
    img: hotPhoto
  }, {
    title: "Rolls",
    link: "/menu/rolls",
    ico: rollsIco,
    img: rollsPhoto
  }, {
    title: "Salads",
    link: "/menu/salads",
    ico: saladIco,
    img: saladPhoto
  }, {
    title: "Sushi",
    link: "/menu/sushi",
    ico: sushiIco,
    img: sushiPhoto
  }, {
    title: "Wok",
    link: "/menu/wok",
    ico: wokIco,
    img: wokPhoto
  }, {
    title: "Snacks",
    link: "/menu/snacks",
    ico: snackIco,
    img: snackPhoto
  }, {
    title: "Children's",
    link: "/menu/children",
    ico: childIco,
    img: childPhoto
  }, {
    title: "Vegan",
    link: "/menu/vegan",
    ico: veganIco,
    img: veganPhoto
  }, {
    title: "Desserts",
    link: "/menu/desserts",
    ico: dessertIco,
    img: dessetPhoto
  }
]

export const advantages: IAdvantage[] = [
  {ico: turtle, text: "Всегда бесплатная доставка", isOutlined: true},
  {ico: bag, text: "Доступ к выгодным пиццам!", isOutlined: true},
  {ico: fish, text: "Вкуснейшие рыбные новинки"},
  {ico: badminton, text: "Мы обновили комбо!", isOutlined: true},
  {ico: neko, text: "Получите бонусы за первый заказ"},
  {ico: bull, text: "Дарим магнитик при заказе суши", isOutlined: true},
  {ico: flowers, text: "Горячие новинки!", isOutlined: true}
];

export const FOOD_TYPES = {
  sushi: {
    sushi: "sushi",
    set: "sushiSet",
    rolls: "sushiRolls",
    burger: "sushiBurger",
  },
  pizza: "pizza",
  soup: "soups",
  hot: "hot",
  salad: "salad",
  wok: "wok",
  snack: "snack",
  children: "children",
  vegan: "vegan",
  desserts: "desserts",
  etc: "etc"
}

export const bannersList: IBlogItem[] = [
  {
    title: 'Premium Set with a Discount',
    description: 'Get one of two sticker packs as a gift when ordering the New Year’s special "Turkey in Mandarins". Try it and enjoy! Limited number of sticker packs available.',
    detailedDescription: {
      descriptionTitle: "Уже придумали блюда на новогодний стол? Мы предлагаем не тратить время на раздумья и долгую готовку — предоставьте это нам!",
      descriptionPoints: [
        "Акція діє лише для замовлень, оформлених заздалегідь і оплачених 31 грудня.",
        "Інші знижки та акції не поширюються на акційний сет, але діють на інші позиції в чеку.",
        "Акція не дійсна для попередніх замовлень з датою отримання, що відрізняється від 31 грудня.",
        "Якщо замовлення оформлене 31 грудня, але отримання — в інший день, акція не діє.",
        "31 грудня замовлення приймаються з 11:00 до 20:00."
      ]
    },
    date: 1700000000,
    views: 375,
    img: primaryBannerPng
  }, {
    title: 'Discounts, Tasting, and a Win-Win Lottery',
    description: 'Get one of two sticker packs as a gift when ordering the New Year’s special "Turkey in Mandarins". Try it and enjoy! Limited number of sticker packs available.',
    date: 1700100000,
    views: 1563,
    type: "promo",
    img: banner1
  }, {
    title: 'Winter Set for 199 ₴',
    description: 'Curious about how pizza is made? We invite you to watch the process live!',
    date: 1700200000,
    views: 1235,
    img: banner2
  }, {
    title: 'Winter Specials',
    description: 'Your favorite dishes are now closer, and the ordering process is even more enjoyable with our stylish new app!',
    date: 1700300000,
    views: 1239,
    img: banner3
  }, {
    title: 'A Gift from Katana',
    description: 'Get one of two sticker packs as a gift when ordering the New Year’s special "Turkey in Mandarins". Try it and enjoy! Limited number of sticker packs available.',
    date: 1700400000,
    views: 1981,
    type: "present",
    img: banner4
  }, {
    title: 'Up to 30% Discounts on Corporate Orders',
    description: 'Curious about how pizza is made? We invite you to watch the process live!',
    date: 1700500000,
    views: 982,
    type: "offer",
    img: banner5
  }, {
    title: 'Celebrating a Birthday?',
    description: 'Your favorite dishes are now closer, and the ordering process is even more enjoyable with our stylish new app!',
    date: 1700600000,
    views: 3581,
    type: "promo",
    img: banner6
  }, {
    title: 'Discounts, Tasting, and a Win-Win Lottery',
    description: 'Get one of two sticker packs as a gift when ordering the New Year’s special "Turkey in Mandarins". Try it and enjoy! Limited number of sticker packs available.',
    date: 1700100000,
    views: 1563,
    type: "promo",
    img: banner1
  }, {
    title: 'Winter Set for 199 ₴',
    description: 'Curious about how pizza is made? We invite you to watch the process live!',
    date: 1700200000,
    views: 1235,
    img: banner2
  }, {
    title: 'Winter Specials',
    description: 'Your favorite dishes are now closer, and the ordering process is even more enjoyable with our stylish new app!',
    date: 1700300000,
    views: 1239,
    img: banner3
  }, {
    title: 'A Gift from Katana',
    description: 'Get one of two sticker packs as a gift when ordering the New Year’s special "Turkey in Mandarins". Try it and enjoy! Limited number of sticker packs available.',
    date: 1700400000,
    views: 1981,
    type: "present",
    img: banner4
  }, {
    title: 'Up to 30% Discounts on Corporate Orders',
    description: 'Curious about how pizza is made? We invite you to watch the process live!',
    date: 1700500000,
    views: 982,
    type: "offer",
    img: banner5
  }, {
    title: 'Celebrating a Birthday?',
    description: 'Your favorite dishes are now closer, and the ordering process is even more enjoyable with our stylish new app!',
    date: 1700600000,
    views: 3581,
    type: "promo",
    img: banner6
  }
];

export const primaryBanner = bannersList[0]
export const bannersArr = bannersList.slice(1)

export const deliveryInfo = [
  {
    title: "Доставка по Харькову",
    list: [
      "Бесплатная доставка от 300 ₴",
      "Привозим в среднем за 35 минут",
      "Работаем ежедневно с 11:00 до 23:00"
    ]
  },
  {
    title: "Оплата",
    list: [
      "Картой на сайте",
      "Курьеру наличными",
      "Курьеру картой"
    ]
  }
];
