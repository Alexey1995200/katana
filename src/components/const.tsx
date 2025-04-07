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
} from "../assets";
import {IAdvantage, IBlogBanner, IBlogItem, IMenuCategory, IMenuItem} from "./interface";

// export const screenWidth: number = window.innerWidth

export const timestampToDMY = (timestamp: number) => format(new Date(timestamp), 'dd.MM.yyyy')
export const timestampToDMYNumStrNum = (timestamp: number) => format(new Date(timestamp), 'dd.MM.yyyy')



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

export const food: IMenuItem[] = [
  {
    title: "Сонце Італії",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/vqdZHQQ-WerUUer-PkaDLFG.webp",
    price: 250,
    description: "Справжня гармонія італійських смаків! Ніжний рулет із тягучою моцарелою, вишуканим пармезаном і соковитою шинкою, які огортає ароматний соус Пелаті. \n" +
      "Легкий штрих лимонної цедри додає витонченої свіжості, підкреслюючи багатство смаків. Кожен шматочок – це подорож до Італії, сповнена сонця і задоволення."
  },
  {
    title: "Pizza 4 сезони",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/IlhYBvW-LenkPul-GWClTtP.webp",
    price: 315,
    description: "Справжня можливість спробувати всі 4 пори року на смак. Ковбаски Кабаносі, салямі, шинка та копчена курка поєднуються з соусом Пелаті на фірмовому тісті з поєднанням синьої цибулі, грибів та щедро затираються сиром Моцарела."
  },
  {
    title: "П'ядіна з куркою",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/mXAfUml-wCLIuRe-sSFgHcT.webp",
    price: 195,
    oldPrice: 200,
    isChefsRec: true,
    description: "Неаполітанське тісто, філе Ципи, руккола, айсберг, помідори Чері, крем-сир, соус Цезар"
  },
  {
    title: "Pizza М'ясна",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/ApqksfU-iHasXPG-LCldNjb.jpeg.webp",
    price: 295,
    oldPrice: 320,
    isNew: true,
    weight: 560,
    description: "Справжнє свято серед піц для поціновувачів м'яска. Шинка, ковбаски Кабаносі, салямі поєднуються з соусом Пелаті на фірмовому тісті та щедро затераються сиром моцарела."
  },
  {
    title: "Паста Болоньєзе",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/AiugwQA-lkUFUHb-DRrpsQh.jpeg.webp",
    price: 255,
    oldPrice: 275,
    isNew: true,
    isChefsRec: true,
    weight: 350,
    description: "Паста Tagliatelle з м'ясним соусом Болоньєзе, затерта сиром Пармезан, прикрашена мікрогріном"
  },
  {
    title: "Pizza Дьявола",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/DPvxYwi-UgWwYeS-khuRlkY.webp",
    price: 335,
    isNew: true,
    description: "Піца для хоробрих! Пекельне поєднання маринованого перцю Чилі з пікантною сиров'яленою ковбасою Чорізо, сир Моцарела, синя цибуля на соусі Пелаті",
    isSpicy: true,
  },
  {
    title: "Pizza Карбонара",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/hmPlNaN-JYFGLzJ-zQHDJwD.jpeg.webp",
    price: 325,
    isNew: true,
    weight: 650,
    description: "Особлива піца італійців, яка готується з додаванням шинки, бекону, сирів Моцарела та Пармезан, з ніжним вершковим соусом."
  },
  {
    title: "Стейк з яловичого філе",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/smKvcgP-DnJfEAD-KALmYDW.webp",
    price: 300,
    oldPrice: 360,
    isChefsRec: true,
    weight: 100,
    description: "Стейк з телятини, прожарку якого обирає гість. Подається з помідорами чері, руколою та бальзамічним кремом."
  },
  {
    title: "Pizza De La Casa",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/ZEZlJH-rREUHP-bPxXgMV.jpeg.webp",
    price: 385,
    isNew: true,
    weight: 650,
    description: "Піца з присмаком італійського дому та традицій. Щедре поєднання смаків на неаполітанському тісті з соусом Пелаті поєднуються бекон, шинка, печериці, оливки, маслини, в'ялені томати, синя цибуля, сири моцарела та пармезан. "
  },
  {
    title: "Лазанья",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/QaPpWnd-kfnHgjH-nFbDKjr.webp",
    price: 285,
    isChefsRec: true,
    weight: 300,
    description: "Неймовірна класика італійської кухні, приготована з шарів тіста (листів лазаньї) разом із шарами начинки - фаршу Болоньєзе, залитими соусом Бешамель. Затерті Моцарелою та Пармезаном і допечені в печі на дровах."
  },
  {
    title: "Pizza Болоньєзе",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/cBZxECB-HbDWOti-HNrMYmC.jpeg.webp",
    price: 330,
    isNew: true,
    weight: 625,
    description: "Оригінальна піца з фаршем родом з Болонії.  М'ясний томатний соус Болоньєзе, бекон, сири моцарела та пармезан, запечені в печі на дровах на неополітанському тісті."
  },
  {
    title: "Курячі нагетси",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/DClGBfG-FwYDHOp-GlEhUWf.webp",
    price: 150,
    isNew: true,
    weight: 120,
    description: "Філе Ципи, обсмажене в паніровці з пшеничного борошну, крохмалю та спецій - ароматної паприки та яскравої куркуми."
  },
  {
    title: "Pizza Боскайола",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/hIdMebw-KjGZGlC-iMHFkTK.webp",
    price: 335,
    isNew: true,
    weight: 590,
    description: "Неймовірне поєднання копченої ципи, бекону та печериць на вершковому соусі з додавання трюфельної пасти і зеленої олії. Щедре поєднанння сирів Моцарели та Пармезану не залишать Вас байдужим"
  },
  {
    title: "Кальцоне з шинкою та печерицями",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/SNiBpYO-OSwpJTr-qgDSvIU.jpeg.webp",
    price: 245,
    weight: 430,
    description: "з неополітанського тіста з шинкою, печерицями, помідорами чері, синьою цибулею, сиром Моцарела та вершками"
  },
  {
    title: "Паста Al formaggio",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/hqptNyB-hkUHHAI-urXqkUM.jpeg.webp",
    price: 265,
    isChefsRec: true,
    weight: 350,
    description: "Максимально сирна паста Tagliatelle з сирами Пармезан,  Дор Блю та Моцарела, з вершками та мікрогріном"
  },
  {
    title: "Pizza Mexico",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/gkxNcSR-roSZIuC-HwbzBCG.jpeg.webp",
    price: 295,
    isNew: true,
    weight: 620,
    description: "Пікантна Мексика на неополітанському тісті -  копчене м'ясо Ципи, бекон, кукурудза, болгарський перець, перець Халапеньйо, сир Моцарела та  томатний соус Пелаті"
  },
  {
    title: "Курячий шашличок",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/ZrXHweD-zietlEb-AdkFro.jpeg.webp",
    price: 155,
    isChefsRec: true,
    weight: 340, description: "Ароматне обсмажене філе Ципи з помідорами чері для справжніх bambini-чемпіонів."
  },
];

export const bannersList: IBlogItem[] = [
  {
    title: 'Premium Set with a Discount',
    description: 'Get one of two sticker packs as a gift when ordering the New Year’s special "Turkey in Mandarins". Try it and enjoy! Limited number of sticker packs available.',
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
