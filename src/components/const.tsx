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

const FOOD_TYPES = {
  sushi: {
    set: "sushiSet",
    sushi: "sushi",
    rolls: "sushiRolls",
  },
  pizza: "pizza",
  etc: "etc"
}


export const food: IMenuItem[] = [
  {
    title: "Сонце Італії",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/vqdZHQQ-WerUUer-PkaDLFG.webp",
    price: 250,
    foodType: FOOD_TYPES.etc,
    description: "Справжня гармонія італійських смаків! Ніжний рулет із тягучою моцарелою, вишуканим пармезаном і соковитою шинкою, які огортає ароматний соус Пелаті. \n" +
      "Легкий штрих лимонної цедри додає витонченої свіжості, підкреслюючи багатство смаків. Кожен шматочок – це подорож до Італії, сповнена сонця і задоволення."
  },
  {
    title: "Pizza 4 сезони",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/IlhYBvW-LenkPul-GWClTtP.webp",
    price: 315,
    foodType: FOOD_TYPES.pizza,
    description: "Справжня можливість спробувати всі 4 пори року на смак. Ковбаски Кабаносі, салямі, шинка та копчена курка поєднуються з соусом Пелаті на фірмовому тісті з поєднанням синьої цибулі, грибів та щедро затираються сиром Моцарела."
  },
  {
    title: "П'ядіна з куркою",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/mXAfUml-wCLIuRe-sSFgHcT.webp",
    price: 195,
    foodType: FOOD_TYPES.etc,
    oldPrice: 200,
    isChefsRec: true,
    description: "Неаполітанське тісто, філе Ципи, руккола, айсберг, помідори Чері, крем-сир, соус Цезар"
  },
  {
    title: "Pizza М'ясна",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/ApqksfU-iHasXPG-LCldNjb.jpeg.webp",
    price: 295,
    foodType: FOOD_TYPES.pizza,
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
    foodType: FOOD_TYPES.etc,
    isNew: true,
    isChefsRec: true,
    weight: 350,
    description: "Паста Tagliatelle з м'ясним соусом Болоньєзе, затерта сиром Пармезан, прикрашена мікрогріном"
  },
  {
    title: "Pizza Дьявола",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/DPvxYwi-UgWwYeS-khuRlkY.webp",
    price: 335,
    foodType: FOOD_TYPES.pizza,
    isNew: true,
    description: "Піца для хоробрих! Пекельне поєднання маринованого перцю Чилі з пікантною сиров'яленою ковбасою Чорізо, сир Моцарела, синя цибуля на соусі Пелаті",
    isSpicy: true,
  },
  {
    title: "Pizza Карбонара",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/hmPlNaN-JYFGLzJ-zQHDJwD.jpeg.webp",
    price: 325,
    foodType: FOOD_TYPES.pizza,
    isNew: true,
    weight: 650,
    description: "Особлива піца італійців, яка готується з додаванням шинки, бекону, сирів Моцарела та Пармезан, з ніжним вершковим соусом."
  },
  {
    title: "Стейк з яловичого філе",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/smKvcgP-DnJfEAD-KALmYDW.webp",
    price: 300,
    foodType: FOOD_TYPES.etc,
    oldPrice: 360,
    isChefsRec: true,
    weight: 100,
    description: "Стейк з телятини, прожарку якого обирає гість. Подається з помідорами чері, руколою та бальзамічним кремом."
  },
  {
    title: "Pizza De La Casa",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/ZEZlJH-rREUHP-bPxXgMV.jpeg.webp",
    price: 385,
    foodType: FOOD_TYPES.pizza,
    isNew: true,
    weight: 650,
    description: "Піца з присмаком італійського дому та традицій. Щедре поєднання смаків на неаполітанському тісті з соусом Пелаті поєднуються бекон, шинка, печериці, оливки, маслини, в'ялені томати, синя цибуля, сири моцарела та пармезан. "
  },
  {
    title: "Лазанья",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/QaPpWnd-kfnHgjH-nFbDKjr.webp",
    price: 285,
    foodType: FOOD_TYPES.etc,
    isChefsRec: true,
    weight: 300,
    description: "Неймовірна класика італійської кухні, приготована з шарів тіста (листів лазаньї) разом із шарами начинки - фаршу Болоньєзе, залитими соусом Бешамель. Затерті Моцарелою та Пармезаном і допечені в печі на дровах."
  },
  {
    title: "Pizza Болоньєзе",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/cBZxECB-HbDWOti-HNrMYmC.jpeg.webp",
    price: 330,
    foodType: FOOD_TYPES.pizza,
    isNew: true,
    weight: 625,
    description: "Оригінальна піца з фаршем родом з Болонії.  М'ясний томатний соус Болоньєзе, бекон, сири моцарела та пармезан, запечені в печі на дровах на неополітанському тісті."
  },
  {
    title: "Курячі нагетси",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/DClGBfG-FwYDHOp-GlEhUWf.webp",
    price: 150,
    foodType: FOOD_TYPES.etc,
    isNew: true,
    weight: 120,
    description: "Філе Ципи, обсмажене в паніровці з пшеничного борошну, крохмалю та спецій - ароматної паприки та яскравої куркуми."
  },
  {
    title: "Pizza Боскайола",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/hIdMebw-KjGZGlC-iMHFkTK.webp",
    price: 335,
    foodType: FOOD_TYPES.pizza,
    isNew: true,
    weight: 590,
    description: "Неймовірне поєднання копченої ципи, бекону та печериць на вершковому соусі з додавання трюфельної пасти і зеленої олії. Щедре поєднанння сирів Моцарели та Пармезану не залишать Вас байдужим"
  },
  {
    title: "Кальцоне з шинкою та печерицями",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/SNiBpYO-OSwpJTr-qgDSvIU.jpeg.webp",
    price: 245,
    foodType: FOOD_TYPES.etc,
    weight: 430,
    description: "з неополітанського тіста з шинкою, печерицями, помідорами чері, синьою цибулею, сиром Моцарела та вершками"
  },
  {
    title: "Паста Al formaggio",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/hqptNyB-hkUHHAI-urXqkUM.jpeg.webp",
    price: 265,
    foodType: FOOD_TYPES.etc,
    isChefsRec: true,
    weight: 350,
    description: "Максимально сирна паста Tagliatelle з сирами Пармезан,  Дор Блю та Моцарела, з вершками та мікрогріном"
  },
  {
    title: "Pizza Mexico",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/gkxNcSR-roSZIuC-HwbzBCG.jpeg.webp",
    price: 295,
    foodType: FOOD_TYPES.pizza,
    isNew: true,
    weight: 620,
    description: "Пікантна Мексика на неополітанському тісті -  копчене м'ясо Ципи, бекон, кукурудза, болгарський перець, перець Халапеньйо, сир Моцарела та  томатний соус Пелаті"
  },
  {
    title: "Курячий шашличок",
    img: "https://cdn-media.choiceqr.com/prod-eat-fermento/menu/ZrXHweD-zietlEb-AdkFro.jpeg.webp",
    price: 155,
    foodType: FOOD_TYPES.etc,
    isChefsRec: true,
    weight: 340, description: "Ароматне обсмажене філе Ципи з помідорами чері для справжніх bambini-чемпіонів."
  },
  {
    title: "Сет Лососевий Бум",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0002-set-lososevij-bum.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 699,
    oldPrice: 856,
    weight: 880,
    description: "Філадельфія дует, Каліфорнія з лососем в кунжуті, Каліфорнія з креветкою в кунжуті, Макі з лососем. Соєвий соус - 80 мл (2 шт). Імбир - 20 г. Васабі - 10 г."
  },
  {
    title: "Сет Банзай",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0004-set-banzaj.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 599,
    oldPrice: 836,
    weight: 1010,
    description: "Філадельфія дует, Футомакі з креветкою в темпурі, Каліфорнія з крабовим міксом в кунжуті, Каліфорнія Чікен. Соєвий соус - 80 мл (2 шт). Імбир - 20 г. Васабі - 10 г."
  },
  {
    title: "Сет Сенсей",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0004-set-sensej.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 599,
    oldPrice: 716,
    weight: 1080,
    description: "Каліфорнія темпура, Темпура рол з куркою, Запечений з крабовим міксом, Ніжний з куркою. Соєвий соус - 80 мл (2 шт). Імбир - 20 г. Васабі - 10 г."
  },
  {
    title: "Сет Кіото",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-set-kioto-2.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 1299,
    oldPrice: 1682,
    weight: 2000,
    description: "Філадельфія дует, Каліфорнія з лососем в кунжуті, Кранч з креветкою, Макі з тунцем, Ніжний з куркою, Запечений з крабовим міксом, Каліфорнія темпура, Темпура рол з куркою. Соєвий соус - 160 мл (4 шт). Імбир - 50 г. Васабі - 15 г."
  },
  {
    title: "Сет Весняний",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-set-vesnyanij.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 1499,
    oldPrice: 2091,
    weight: 2030,
    description: "Філадельфія з лососем, Філадельфія з креветкою, Кранч з тунцем, Каліфорнія з вугрем в кунжуті, Кранч з креветкою, Фелікс рол з тунцем, Футомакі з креветкою у темпурі, Макі з тунцем, Макі з креветкою. Соєвий соус - 200 мл (5 шт). Імбир - 60 г. Васабі - 15 г."
  },
  {
    title: "Сет Гурман",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0002-set-gurman-new.png?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 699,
    oldPrice: 1006,
    weight: 880,
    description: "Філадельфія з лососем, Кранч з креветкою, Каліфорнія з лососем в кунжуті, Макі з тунцем. Соєвий соус - 80 мл (2 шт). Імбир - 20 г. Васабі - 10 г."
  },
  {
    title: "Сет А я на морі",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0001-set-ya-na-mori.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 549,
    oldPrice: 826,
    weight: 1000,
    description: "Кранч з тунцем, Роял Рол, Каліфорнія з креветкою в кунжуті, Футомакі з тунцем (гострий). Соєвий соус - 80 мл (2 шт). Імбир - 20 г. Васабі - 10 г."
  },
  {
    title: "Сет Топовий",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-set-topovij.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 449,
    oldPrice: 586,
    weight: 900,
    description: "Каліфорнія Чікен, Макі з огірком, Темпура рол з куркою, Ніжний з куркою. Соєвий соус - 80 мл (2 шт). Імбир - 20 г. Васабі - 10 г."
  },
  {
    title: "Сет Двоє в Кіото",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0001-set-dvoye-v-kioto.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 899,
    oldPrice: 1273,
    weight: 1520,
    description: "Філадельфія дует, Каліфорнія з креветкою в кунжуті, Кранч з тунцем, Футомакі з тунцем (гострий), Каліфорнія Чікен, Макі з тунцем, Макі з огірком. Соєвий соус - 120 мл (3 шт). Імбир - 40 г. Васабі - 10 г."
  },
  {
    title: "Сет Для двох",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-set-dlya-dvoh.png?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 599,
    oldPrice: 826,
    weight: 910,
    description: "Філадельфія дует, Футомакі з креветкою у темпурі, Макі з тунцем, Каліфорнія Чікен. Соєвий соус - 80 мл (2 шт). Імбир - 20 г. Васабі - 10 г."
  },
  {
    title: "Сет Ажіотаж",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0001-set-azhiotazh-2024.png?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 799,
    oldPrice: 1094,
    weight: 1370,
    description: "Філадельфія дует, Футомакі з тунцем (гострий), Каліфорнія з креветкою в кунжуті, Фелікс рол Магуро, Каліфорнія Чікен, Макі з огірком. Соєвий соус - 120 мл (3 шт). Імбир - 40 г. Васабі - 10 г."
  },
  {
    title: "Сет Хокку",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0004-set-hokku.png?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 449,
    oldPrice: 596,
    weight: 850,
    description: "Футомакі з тунцем (гострий), Фелікс рол Магуро, Каліфорнія Чікен, Макі з огірком. Соєвий соус - 80 мл (2 шт). Імбир - 20 г. Васабі - 10 г."
  },
  {
    title: "Сет Фантастична трійка",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0002-set-fantastichna-trijka.png?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 649,
    oldPrice: 947,
    weight: 790,
    description: "Філадельфія з лососем, Кранч з креветкою, Філадельфія з тунцем. Соєвий соус - 80 мл (2 шт). Імбир - 20 г. Васабі - 5 г."
  },
  {
    title: "Сет Теплий рай",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0002-set-teplij-raj-new.png?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 449,
    oldPrice: 597,
    weight: 850,
    description: "Запечений з креветкою, Запечений з крабовим міксом, Ніжний з куркою. Соєвий соус - 80 мл (2 шт). Імбир - 20 г. Васабі - 5 г."
  },
  {
    title: "Сет Семпай",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0001-set-sempaj.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 799,
    oldPrice: 1094,
    weight: 1370,
    description: "Філадельфія дует, Фелікс рол з тунцем, Каліфорнія з креветкою в кунжуті, Торі Рол (гострий), Макі з огірком, Каліфорнія Чікен. Соєвий соус - 120 мл (3 шт). Імбир - 40 г. Васабі - 10 г."
  },
  {
    title: "Сет Легенда",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0007-set-legenda.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 649,
    oldPrice: 727,
    weight: 950,
    description: "Суші бургер з лососем, Суші бургер з куркою, Рол-дог з креветками"
  },
  {
    title: "Сет Тріо",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0006-set-trio.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 699,
    oldPrice: 757,
    weight: 960,
    description: "Суші бургер з лососем, Суші бургер з тунцем, Суші бургер з куркою"
  },
  {
    title: "Сет Сендай",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0001-set-sendaj.png?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 499,
    oldPrice: 697,
    weight: 770,
    description: "Філадельфія дует, Футомакі з тунцем (гострий), Каліфорнія з креветкою в кунжуті. Соєвий соус - 80 мл (2 шт). Імбир - 20 г. Васабі - 5 г."
  },
  {
    title: "Сет Кумамото",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0001-set-kumamoto.png?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 549,
    oldPrice: 777,
    weight: 650,
    description: "Філадельфія з лососем, Кранч з креветкою, Макі з тунцем. Соєвий соус - 80 мл (2 шт). Імбир - 20 г. Васабі - 5 г."
  },
  {
    title: "Сет Токіо",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0001-set-tokio-2024.png?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 499,
    oldPrice: 726,
    weight: 960,
    description: "Каліфорнія з креветкою в кунжуті, Футомакі з тунцем (гострий), Фелікс рол Магуро, Каліфорнія Чікен. Соєвий соус - 80 мл (2 шт). Імбир - 20 г. Васабі - 10 г."
  },
  {
    title: "Сет Хіт",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0002-set-hit.png?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 499,
    oldPrice: 686,
    weight: 1000,
    description: "Роял Рол, Каліфорнія з креветкою в кунжуті, Каліфорнія з крабовим міксом в кунжуті, Каліфорнія Чікен. Соєвий соус - 80 мл (2 шт). Імбир - 20 г. Васабі - 10 г."
  },
  {
    title: "Сет Сакура",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-set-sakura-new.png?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 749,
    oldPrice: 896,
    weight: 1000,
    description: "Філадельфія з лососем, Каліфорнія з вугрем в кунжуті, Фелікс рол з тунцем, Каліфорнія Чікен. Соєвий соус - 80 мл (2 шт). Імбир - 20 г. Васабі - 10 г."
  },
  {
    title: "Сет Аляска",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0005-set-alyaska.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 799,
    oldPrice: 1066,
    weight: 1050,
    description: "Філадельфія дует, Рол з лососем та огірком, Футомакі з креветкою у темпурі, Каліфорнія з лососем в кунжуті. Соєвий соус - 80 мл (2 шт). Імбир - 20 г. Васабі - 10 г."
  },
  {
    title: "Сет Окінава",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-set-okinava.png?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 679,
    oldPrice: 787,
    weight: 780,
    description: "Філадельфія з лососем, Філадельфія з креветкою в кунжуті, Філадельфія з тунцем в кунжуті. Соєвий соус - 80 мл (2 шт). Імбир - 20 г. Васабі - 5 г."
  },
  {
    title: "Сет Хайку",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0002-set-hajku.png?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 449,
    oldPrice: 637,
    weight: 720,
    description: "Кранч з креветкою, Торі Рол (гострий), Каліфорнія з крабовим міксом в кунжуті. Соєвий соус - 80 мл (2 шт). Імбир - 20 г. Васабі - 5 г."
  },
  {
    title: "Сет Джуманджі",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0004-set-dzhumandzhi-new.png?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 899,
    oldPrice: 1095,
    weight: 1200,
    description: "Філадельфія з лососем, Філадельфія з креветкою в кунжуті, Ніжний з куркою, Запечений з лососем (гострий), Макі з креветкою. Соєвий соус - 120 мл (3 шт). Імбир - 40 г. Васабі - 10 г."
  },
  {
    title: "Сет Кіото Cold",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0001-set-kioto-cold.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 1299,
    oldPrice: 1791,
    weight: 2000,
    description: "Філадельфія дует, Каліфорнія з лососем в кунжуті, Кранч з креветкою, Філадельфія з креветкою в кунжуті, Каліфорнія з креветкою в кунжуті, Макі з тунцем, Макі з креветкою, Каліфорнія Чікен, Каліфорнія з крабовим міксом в кунжуті. Соєвий соус - 200 мл (5 шт). Імбир - 60 г. Васабі - 15 г."
  },
  {
    title: "Сет від Майстра",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0001-set-vid-majstra.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 2199,
    oldPrice: 2968,
    weight: 3120,
    description: "Філадельфія дует, Філадельфія з вугрем, Філадельфія з креветкою, Філадельфія з креветкою в кунжуті, Кранч з креветкою, Каліфорнія з крабовим міксом в ікрі, Каліфорнія з вугрем в кунжуті, Торі Рол (гострий), Ніжний з лососем, Запечений з креветкою, Каліфорнія темпура, Темпура рол з куркою. Соєвий соус - 240 мл (6 шт). Імбир - 70 г. Васабі - 20 г."
  },
  {
    title: "Сет Імператорський",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-set-imperatorskij.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 1999,
    oldPrice: 2938,
    weight: 3000,
    description: "Філадельфія дует, Філадельфія з вугрем, Філадельфія з креветкою, Філадельфія з креветкою в кунжуті, Каліфорнія з крабовим міксом в ікрі, Каліфорнія з вугрем в кунжуті, Каліфорнія з крабовим міксом в кунжуті, Роял Рол, Кранч з креветкою, Каліфорнія з креветкою в кунжуті, Торі Рол (гострий), Філадельфія з копченим лососем в кунжуті. Соєвий соус - 240 мл (6 шт). Імбир - 70 г. Васабі - 20 г."
  },
  {
    title: "Сет Сімейний",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-set-simejnij-new.png?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 1599,
    oldPrice: 1921,
    weight: 2050,
    description: "Філадельфія з лососем, Філадельфія з креветкою, Каліфорнія з крабовим міксом в кунжуті, Каліфорнія темпура, Кранч з креветкою, Макі з лососем, Макі з креветкою, Фелікс рол з тунцем, Ніжний з куркою. Соєвий соус - 200 мл (5 шт). Імбир - 60 г. Васабі - 15 г."
  },
  {
    title: "Сет Сімейний Cold",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0001-set-simejnij-cold.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 1599,
    oldPrice: 1961,
    weight: 2000,
    description: "Філадельфія з лососем, Філадельфія з креветкою, Філадельфія з креветкою в кунжуті, Кранч з креветкою, Фелікс рол з тунцем, Макі з лососем, Макі з креветкою, Каліфорнія з креветкою в кунжуті, Каліфорнія з крабовим міксом в кунжуті. Соєвий соус - 200 мл (5 шт). Імбир - 60 г. Васабі - 15 г."
  },
  {
    title: "Сет Осака",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0004-set-osaka.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 1099,
    oldPrice: 1312,
    weight: 2000,
    description: "Роял Рол, Торі Рол (гострий), Каліфорнія Чікен, Макі з огірком, Каліфорнія темпура, Темпура рол з куркою, Ніжний з куркою, Запечений з крабовим міксом. Соєвий соус - 160 мл (4 шт). Імбир - 50 г. Васабі - 15 г."
  },
  {
    title: "Сет Лав сторі",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0002-set-lav-stori-new.png?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 1049,
    oldPrice: 1264,
    weight: 1470,
    description: "Філадельфія дует, Філадельфія з креветкою в кунжуті, Торі Рол (гострий), Каліфорнія з крабовим міксом в кунжуті, Каліфорнія з крабовим міксом в ікрі, Фелікс рол з тунцем. Соєвий соус - 120 мл (3 шт). Імбир - 40 г. Васабі - 10 г."
  },
  {
    title: "Сет Філадельфія Максі",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0005-set-filadelfiya-maksi-new.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 1049,
    oldPrice: 1275,
    weight: 1280,
    description: "Філадельфія з лососем, Філадельфія з креветкою, Філадельфія з лососем в кунжуті, Філадельфія з креветкою в кунжуті, Торі Рол (гострий). Соєвий соус - 120 мл (3 шт). Імбир - 40 г. Васабі - 10 г."
  },
  {
    title: "Сет Саме Те",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0002-set-same-te-new.png?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 999,
    oldPrice: 1294,
    weight: 1360,
    description: "Філадельфія з лососем, Каліфорнія з креветкою в кунжуті, Каліфорнія з крабовим міксом в кунжуті, Макі з тунцем, Кранч з креветкою, Торі Рол (гострий). Соєвий соус - 120 мл (3 шт). Імбир - 40 г. Васабі - 10 г."
  },
  {
    title: "Сет Три самураї",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0002-set-tri-samurayi.png?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 449,
    oldPrice: 597,
    weight: 820,
    description: "Ніжний з лососем, Ніжний з куркою, Запечений з крабовим міксом. Соєвий соус - 80 мл (2 шт). Імбир - 20 г. Васабі - 5 г."
  },
  {
    title: "Сет Фуджі",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0002-set-fudzhi.png?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 549,
    oldPrice: 696,
    weight: 510,
    description: "Філадельфія з лососем, Макі з лососем, Суші нігірі з лососем, Суші нігірі з креветкою. Соєвий соус - 80 мл (2 шт). Імбир - 20 г. Васабі - 5 г."
  },
  {
    title: "Сет Бінго",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0002-set-bingo-new.png?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 649,
    oldPrice: 847,
    weight: 760,
    description: "Філадельфія з лососем, Кранч з креветкою, Фелікс рол з тунцем. Соєвий соус - 80 мл (2 шт). Імбир - 20 г. Васабі - 5 г."
  },
  {
    title: "Сет На пляжі",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0004-set-na-plyazhi.png?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 599,
    oldPrice: 697,
    weight: 790,
    description: "Філадельфія з креветкою в кунжуті, Філадельфія з тунцем, Каліфорнія темпура. Соєвий соус - 80 мл (2 шт). Імбир - 20 г. Васабі - 5 г."
  },
  {
    title: "Сет Спокуса",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0002-set-spokusa-new.png?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 649,
    oldPrice: 867,
    weight: 760,
    description: "Філадельфія з лососем, Каліфорнія з вугрем в кунжуті, Кранч з креветкою. Соєвий соус - 80 мл (2 шт). Імбир - 20 г. Васабі - 5 г."
  },
  {
    title: "Сет Незламний",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0002-set-nezlamnij-new.png?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 699,
    oldPrice: 866,
    weight: 1000,
    description: "Філадельфія з лососем, Каліфорнія Чікен, Футомакі з лососем (гострий), Каліфорнія з крабовим міксом в кунжуті. Соєвий соус - 80 мл (2 шт). Імбир - 20 г. Васабі - 10 г."
  },
  {
    title: "Сет Мальдіви",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0006-set-maldivi-new.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 899,
    oldPrice: 1035,
    weight: 1380,
    description: "Ніжний з лососем, Каліфорнія темпура, Темпура рол з куркою, Запечений з креветкою, Запечений з тунцем (гострий). Соєвий соус - 120 мл (3 шт). Імбир - 40 г. Васабі - 10 г."
  },
  {
    title: "Сет Аватар",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-set-avatar.png?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 849,
    oldPrice: 1026,
    weight: 1020,
    description: "Філадельфія з лососем, Філадельфія з тунцем, Торі Рол (гострий), Каліфорнія з вугрем в кунжуті. Соєвий соус - 80 мл (2 шт). Імбир - 20 г. Васабі - 10 г."
  },
  {
    title: "Сет Ф'южн",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0002-set-fyuzhn-new.png?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 799,
    oldPrice: 906,
    weight: 950,
    description: "Ніжний з куркою, Темпура рол з лососем, Темпура рол з тунцем, Запечений з крабовим міксом. Соєвий соус - 80 мл (2 шт). Імбир - 20 г. Васабі - 10 г."
  },
  {
    title: "Сет Вигідний",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0002-set-vigidnij-new.png?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 1299,
    oldPrice: 1572,
    weight: 1730,
    description: "Філадельфія з креветкою, Філадельфія з креветкою в кунжуті, Філадельфія з тунцем в кунжуті, Каліфорнія з крабовим міксом в ікрі, Торі Рол (гострий), Макі з лососем, Макі з тунцем, Каліфорнія з крабовим міксом в кунжуті. Соєвий соус - 160 мл (4 шт). Імбир - 50 г. Васабі - 15 г."
  },
  {
    title: "Сет Оаза",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0004-set-oazis-chervona-kalina.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 1299,
    oldPrice: 1514,
    weight: 1540,
    description: "Філадельфія дует, Філадельфія з креветкою в кунжуті, Філадельфія з креветкою, Торі Рол (гострий), Філадельфія з тунцем, Каліфорнія з вугрем в кунжуті. Соєвий соус - 120 мл (3 шт). Імбир - 40 г. Васабі - 10 г."
  },
  {
    title: "Сет Золотий дракон",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0002-set-zolotij-drakon-new.png?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 949,
    oldPrice: 1235,
    weight: 910,
    description: "Золотий Дракон, Філадельфія з лососем, Філадельфія з креветкою в кунжуті, Суші нігірі з лососем, Суші нігірі з тунцем. Соєвий соус - 80 мл (2 шт). Імбир - 20 г. Васабі - 10 г."
  },
  {
    title: "Сет Фаворит",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-set-favorit-new.png?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 1849,
    oldPrice: 2241,
    weight: 2360,
    description: "Філадельфія з лососем, Філадельфія з креветкою, Філадельфія з тунцем, Філадельфія з креветкою в кунжуті, Кранч з креветкою, Торі Рол (гострий), Запечений з крабовим міксом, Ніжний з куркою, Ніжний з лососем. Соєвий соус - 200 мл (5 шт). Імбир - 60 г. Васабі - 15 г."
  },
  {
    title: "Сет Фаворит Cold",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0001-set-favorit-cold.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 1849,
    oldPrice: 2340,
    weight: 2300,
    description: "Філадельфія з лососем, Філадельфія з креветкою, Філадельфія з тунцем, Філадельфія з креветкою в кунжуті, Кранч з креветкою, Футомакі з креветкою у темпурі, Каліфорнія з креветкою в кунжуті, Макі з тунцем, Макі з креветкою, Торі Рол (гострий). Соєвий соус - 200 мл (5 шт). Імбир - 60 г. Васабі - 15 г."
  },
  {
    title: "Сет Багато риби",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-set-bagato-ribi.png?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.set,
    price: 1699,
    oldPrice: 2182,
    weight: 2060,
    description: "Філадельфія з лососем, Філадельфія з лососем в кунжуті, Філадельфія з тунцем, Філадельфія з креветкою в кунжуті, Філадельфія з креветкою, Каліфорнія з вугрем в кунжуті, Кранч з креветкою, Футомакі з креветкою у темпурі. Соєвий соус - 160 мл (4 шт). Імбир - 50 г. Васабі - 15 г."
  }

];

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
