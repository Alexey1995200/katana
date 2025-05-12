import {IMenuItem} from "./interface";
import {FOOD_TYPES} from "./const";

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
  },
  {
    title: "Каліфорнія з креветкою в кунжуті",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-kaliforniya-z-krevetkoyu-v-kunzhuti.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 179,
    weight: 240,
    description: "Рис, креветка, омлет, огірок, кунжут, соус унагі, норі"
  },
  {
    title: "Футомакі з лососем (гострий)",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-futomaki-z-lososem-gostr.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 229,
    weight: 260,
    description: "Рис, лосось, соус Шрірача, салат айсберг, огірок, крабовий мікс, норі"
  },
  {
    title: "Кранч з креветкою",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-kranch-z-krevetkoyu-new.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 249,
    "oldPrice": 299,
    weight: 250,
    description: "Рис, креветка темпура, ікра тобіко, кляр темпура, огірок, соус унагі, норі"
  },
  {
    title: "Філадельфія з лососем",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-filadelfiya-z-lososem.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 299,
    "oldPrice": 329,
    weight: 270,
    description: "Рис, лосось, крем сир, авокадо, огірок, норі"
  },
  {
    title: "Філадельфія дует",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-filadelfiya-duet.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 269,
    weight: 280,
    description: "Рис, лосось, тунець, крем сир, огірок, соус горіховий унагі, норі, кунжут"
  },
  {
    title: "Ебі Рол",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0005-ebi-rol.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 209,
    weight: 260,
    description: "Рис, креветка темпура, крем сир, салат айсберг, огірок, ікра тобіко, соус світ чилі, соус горіховий (гострий), кунжут чорний, норі"
  },
  {
    title: "Каліфорнія з лососем в кунжуті",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-kaliforniya-z-lososem-v-kunzhuti-new.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 199,
    weight: 230,
    description: "Рис, лосось, авокадо, огірок, кунжут, норі"
  },
  {
    title: "Запечений з крабовим міксом",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-zapechenij-z-krabovim-miksom.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 159,
    weight: 280,
    description: "Рис, крабовий мікс, салат айсберг, сирний соус, болгарський перець, кунжут, огірок, норі"
  },
  {
    title: "Ніжний з куркою",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-nizhnyy-z-kurkoyu-2023.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 179,
    weight: 270,
    description: "Рис, куряче філе, сирний соус, салат айсберг, крем сир, соус унагі, норі"
  },
  {
    title: "Запечений з креветкою",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-zapechenij-z-krevetkoyu.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 209,
    weight: 300,
    description: "Рис, креветка темпура, салат айсберг, сирний соус, болгарський перець, кунжут, огірок, норі"
  },
  {
    title: "Ніжний з лососем",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-nizhnij-z-lososem-new.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 209,
    weight: 270,
    description: "Рис, лосось, сирний соус, салат айсберг, крем сир, соус унагі, норі"
  },
  {
    title: "Філадельфія з тунцем",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-filadelfiya-z-tuncem.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 269,
    weight: 270,
    description: "Рис, тунець, крем сир, авокадо, огірок, норі"
  },
  {
    title: "Філадельфія з креветкою",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-filadelfiya-z-krevetkoyu-new.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 269,
    weight: 260,
    description: "Рис, креветка, огірок, авокадо, крем сир, ікра тобіко, соус cвіт чилі, кунжут, норі"
  },
  {
    title: "Філадельфія з вугрем",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-filadelfiya-z-vugrem-new.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 359,
    weight: 270,
    description: "Рис, вугор, авокадо, крем сир, огірок, соус унагі, кунжут, норі"
  },
  {
    title: "Філадельфія з копченим лососем",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-filadelfiya-z-kopchenim-lososem.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 289,
    weight: 260,
    description: "Рис, копчений лосось, крем сир, авокадо, огірок, норі"
  },
  {
    title: "Темпура рол з куркою",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0004-tempura-rol-z-kurkoyu.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 159,
    weight: 270,
    description: "Рис, копчена курка, крем сир, кляр темпура, огірок, перець болгарський, соус горіховий унагі, сухарі панко, норі"
  },
  {
    title: "Темпура рол з вугрем",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-tempura-z-vugrem.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 269,
    weight: 250,
    description: "Рис, вугор, ікра тобіко, крем сир, огірок, соус унагі, сухарі панко, кляр темпура, норі"
  },
  {
    title: "Каліфорнія темпура",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-kaliforniya-tempura-new.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 159,
    weight: 270,
    description: "Рис, крабовий мікс, кляр темпура, авокадо, огірок, сухарі панко, болгарський перець, норі"
  },
  {
    title: "Темпура рол з лососем",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-tempura-z-lososem.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 249,
    weight: 200,
    description: "Рис, лосось, краб мікс, авокадо, кляр темпура, соус світ чилі, сухарі панко, кунжут, норі"
  },
  {
    title: "Темпура рол з тунцем",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-tempura-z-tuncem.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 249,
    weight: 200,
    description: "Рис, тунець, краб мікс, авокадо, кляр темпура, соус світ чилі, сухарі панко, кунжут, норі"
  },
  {
    title: "Запечений з лососем (гострий)",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-zapechenij-z-lososem-gostrij.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 209,
    weight: 280,
    description: "Рис, салат айсберг, лосось, сирний соус, крем сир, соус Шрірача, огірок, нор, кунжут"
  },
  {
    title: "Запечений з тунцем (гострий)",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-zapechenij-z-tuncem-gostrij.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 209,
    weight: 280,
    description: "Рис, салат айсберг, тунець, сирний соус, крем сир, соус Шрірача, огірок, норі, кунжут"
  },
  {
    title: "Ніжний з вугрем",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-nizhnij-z-vugrem-new.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 249,
    "oldPrice": 279,
    weight: 270,
    description: "Рис, вугор, сирний соус, салат айсберг, крем сир, соус унагі, норі"
  },
  {
    title: "Кранч з тунцем",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0001-kranch-z-tuncem.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 199,
    weight: 250,
    description: "Рис, тунець консервований, ікра тобіко, кляр темпура, салат айсберг, соус унагі, соус світ чилі, норі"
  },
  {
    title: "Філадельфія Ф'южн",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-filadelfiya-fyuzhn-2023.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 269,
    weight: 260,
    description: "Рис, вугор, крабовий мікс, огірок, салат айсберг, варена креветка, кранч, соус горіховий унагі, кунжут чорний, норі"
  },
  {
    title: "Філадельфія Хіяші",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-filadelfiya-hiyashi-2023.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 269,
    weight: 280,
    description: "Рис, лосось, крем сир, салат айсберг, хіяші вакаме, соус горіховий (гострий), кунжут чорний, норі"
  },
  {
    title: "Рол з лососем та огірком",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-z-lososem-ta-ogirkom.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 269,
    weight: 280,
    description: "Рис, огірок, лосось, кунжут, кранч, крабовий мікс, соус світ чилі, норі"
  },
  {
    title: "Філадельфія Гурман",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-filadelfiya-gurman-new.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 429,
    weight: 290,
    description: "Рис, лосось, вугор, ікра тобіко, крем сир, норі"
  },
  {
    title: "Золотий дракон",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-zolotij-drakon-new.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 359,
    "oldPrice": 419,
    weight: 270,
    description: "Рис, вугор, авокадо, огірок, кунжут, крабовий мікс, соус унагі, норі"
  },
  {
    title: "Зелений Дракон",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0004-rol-zelenij-drakon.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 329,
    weight: 280,
    description: "Рис, огірок, вугор, авокадо, кунжут, крабовий мікс, соус унагі, норі"
  },
  {
    title: "Червоний Дракон",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0004-rol-chervonij-drakon.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 329,
    weight: 280,
    description: "Рис, лосось, авокадо, огірок, майонез, крабовий мікс, ікра тобіко, норі"
  },
  {
    title: "Роял Рол",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0004-royal-rol.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 179,
    weight: 260,
    description: "Рис, копчена курка, салат айсберг, огірок, перець болгарський, соус світ чилі, кунжут, норі"
  },
  {
    title: "Філадельфія з креветкою в кунжуті",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-filadelfiya-z-krevetkoyu-v-kunzhuti.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 199,
    weight: 250,
    description: "Рис, креветка темпура, крем сир, авокадо, огірок, кунжут, норі"
  },
  {
    title: "Філадельфія з тунцем в кунжуті",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-filadelfiya-z-tuncem-v-kunzhuti.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 219,
    weight: 260,
    description: "Рис, тунець, крем сир,авокадо, кунжут, огірок, норі"
  },
  {
    title: "Філадельфія з лососем в кунжуті",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0006-rol-filadelfiya-z-lososem-v-kunzhuti.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 229,
    weight: 260,
    description: "Рис, лосось, крем сир, авокадо, кунжут, огірок, норі"
  },
  {
    title: "Філадельфія з вугрем в кунжуті",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-filadelfiya-z-vugrem-v-kunzhuti.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 269,
    weight: 250,
    description: "Рис, вугор, крем сир, авокадо, кунжут, огірок, норі"
  },
  {
    title: "Філадельфія з копченим лососем в кунжуті",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-filadelfiya-z-kopchenim-lososem-v-kunzhuti.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 219,
    weight: 250,
    description: "Рис, копчений лосось, крем сир, авокадо, кунжут, огірок, норі"
  },
  {
    title: "Каліфорнія з копченим лососем в кунжуті",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-kaliforniya-z-kopchenim-lososem-v-kunzhuti-new.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 199,
    weight: 220,
    description: "Рис, копчений лосось, авокадо, огірок, кунжут, норі"
  },
  {
    title: "Каліфорнія з лососем в ікрі",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-kaliforniya-z-lososem-v-ikri-new.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 259,
    "oldPrice": 279,
    weight: 230,
    description: "Рис, лосось, авокадо, огірок, ікра тобіко, норі"
  },
  {
    title: "Каліфорнія з крабовим міксом в кунжуті",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-kaliforniya-z-krabovim-miksom-v-kunzhuti-new.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 129,
    weight: 230,
    description: "Рис, крабовий мікс, авокадо, огірок, кунжут, норі"
  },
  {
    title: "Каліфорнія з крабовим міксом в ікрі",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-kaliforniya-z-krabovim-miksom-v-ikri-new.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 199,
    weight: 230,
    description: "Рис, крабовий мікс, авокадо, огірок, ікра тобіко, норі"
  },
  {
    title: "Каліфорнія з вугрем в кунжуті",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-kaliforniya-z-vugrem-v-kunzhuti-new.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 199,
    weight: 240,
    description: "Рис, вугор, омлет, огірок, кунжут, соус унагі, норі"
  },
  {
    title: "Каліфорнія Чікен",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-kaliforniya-chiken.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 139,
    weight: 240,
    description: "Рис, копчена курка, омлет, огірок, кунжут, соус горіховий унагі, норі"
  },
  {
    title: "Футомакі з креветкою в темпурі",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-futomaki-z-krevetkoyu-v-tempuri-new.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 199,
    "oldPrice": 229,
    weight: 260,
    description: "Рис, креветка темпура, крем сир, огірок, болгарський перець, норі"
  },
  {
    title: "Футомакі з тунцем (гострий)",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0001-futomaki-z-tuncem-gostrij.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 179,
    weight: 250,
    description: "Рис, тунець консервований, салат айсберг, перець болгарський, цибуля зелена, омлет, кляр темпура, соус Шрирача, соус світ чилі"
  },
  {
    title: "Торі Рол (гострий)",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-tori-rol.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 159,
    weight: 240,
    description: "Рис, копчена курка, салат айсберг, огірок, цибуля зелена, майонез, соус Шрірача, норі"
  },
  {
    title: "Фелікс рол з лососем",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-feliks-z-lososem-new.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 219,
    weight: 240,
    description: "Рис, фелікс з лососем, кунжут, салат айсберг, огірок, норі, майонез"
  },
  {
    title: "Фелікс рол з копченим лососем",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-feliks-z-kopchenim-lososem-new.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 219,
    weight: 240,
    description: "Рис, фелікс з копченим лососем, кунжут, салат айсберг, огірок, норі, майонез"
  },
  {
    title: "Фелікс рол з тунцем",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-feliks-z-tuncem.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 179,
    weight: 240,
    description: "Рис, фелікс з тунцем, кунжут, салат айсберг, огірок, норі, майонез"
  },
  {
    title: "Фелікс рол Магуро",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0001-feliks-rol-maguro.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 169,
    weight: 230,
    description: "Рис, тунець консервований, салат айсберг, чилі нитка, цибуля зелена, кунжут чорний, норі"
  },
  {
    title: "Макі з лососем",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-maki-z-lososem-new.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 129,
    weight: 130,
    description: "Рис, лосось, норі"
  },
  {
    title: "Макі з лососем та авокадо",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0001-maki-z-lososiem-ta-avokado.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 129,
    weight: 130,
    description: "Рис, лосось, авокадо, норі"
  },
  {
    title: "Макі з вугрем",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-maki-z-vugrem-new.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 159,
    weight: 130,
    description: "Рис, вугор, норі"
  },
  {
    title: "Макі з тунцем",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-maki-z-tuncem.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 119,
    weight: 130,
    description: "Рис, тунець, норі"
  },
  {
    title: "Макі з креветкою",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0002-rol-maki-z-krevetkoyu-new.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 109,
    weight: 130,
    description: "Рис, креветка темпура, норі"
  },
  {
    title: "Макі з авокадо",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-rol-maki-z-avokado-new.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 89,
    weight: 130,
    description: "Рис, авокадо, норі"
  },
  {
    title: "Макі з огірком",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0003-maki-z-ohirkom-2023.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 59,
    weight: 130,
    description: "Рис, огірок, норі"
  },
  {
    title: "Суші гункан з лососем",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0002-sushi-gunkan-z-lososem-new.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 109,
    weight: 802,
    description: "Рис, лосось, майонез, ікра тобіко, норі"
  },
  {
    title: "Суші гункан з вугрем",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0002-sushi-gunkan-z-vugrem-new.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 149,
    weight: 802,
    description: "Рис, вугор, майонез, ікра тобіко, норі"
  },
  {
    title: "Суші гункан з тунцем",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0002-sushi-gunkan-z-tuncem-new.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 109,
    weight: 802,
    description: "Рис, тунець, майонез, ікра тобіко, норі"
  },
  {
    title: "Суші гункан з креветкою",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0002-sushi-gunkan-z-krevetkoyu-new.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 139,
    weight: 802,
    description: "Рис, креветка, майонез, ікра тобіко, норі"
  },
  {
    title: "Суші нігірі з лососем",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0002-sushi-nigiri-z-lososem.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 119,
    weight: 602,
    description: "Рис, лосось"
  },
  {
    title: "Суші нігірі з тунцем",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0002-sushi-nigiri-z-tuncem.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 89,
    weight: 602,
    description: "Рис, тунець"
  },
  {
    title: "Суші нігірі з вугрем",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0002-sushi-nigiri-z-vugrem.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 149,
    weight: 652,
    description: "Рис, вугор, соус унагі, кунжут"
  },
  {
    title: "Суші нігірі з креветкою",
    img: "https://cdn.sushi-master.ua/sm-ua/products/0002-sushi-nigiri-z-krevetkoyu.jpg?&w=650&format=auto&mode=fit&q=80",
    foodType: FOOD_TYPES.sushi.rolls,
    price: 89,
    weight: 502,
    description: "Рис, квеветка"
  },
  {
    "title": "Суші гункан з лососем",
    "img": "https://cdn.sushi-master.ua/sm-ua/products/0002-sushi-gunkan-z-lososem-new.jpg?&w=650&format=auto&mode=fit&q=80",
    "foodType": "sush1",
    "price": 109,
    "weight": 802,
    "description": "Рис, лосось, майонез, ікра тобіко, норі"
  },
  {
    "title": "Суші гункан з вугрем",
    "img": "https://cdn.sushi-master.ua/sm-ua/products/0002-sushi-gunkan-z-vugrem-new.jpg?&w=650&format=auto&mode=fit&q=80",
    "foodType": "sush1",
    "price": 149,
    "weight": 802,
    "description": "Рис, вугор, майонез, ікра тобіко, норі"
  },
  {
    "title": "Суші гункан з тунцем",
    "img": "https://cdn.sushi-master.ua/sm-ua/products/0002-sushi-gunkan-z-tuncem-new.jpg?&w=650&format=auto&mode=fit&q=80",
    "foodType": "sush1",
    "price": 109,
    "weight": 802,
    "description": "Рис, тунець, майонез, ікра тобіко, норі"
  },
  {
    "title": "Суші гункан з креветкою",
    "img": "https://cdn.sushi-master.ua/sm-ua/products/0002-sushi-gunkan-z-krevetkoyu-new.jpg?&w=650&format=auto&mode=fit&q=80",
    "foodType": "sush1",
    "price": 139,
    "weight": 802,
    "description": "Рис, креветка, майонез, ікра тобіко, норі"
  },
  {
    "title": "Суші нігірі з вугрем",
    "img": "https://cdn.sushi-master.ua/sm-ua/products/0002-sushi-nigiri-z-vugrem.jpg?&w=650&format=auto&mode=fit&q=80",
    "foodType": "sush1",
    "price": 149,
    "weight": 652,
    "description": "Рис, вугор, соус унагі, кунжут"
  },
  {
    "title": "Суші нігірі з креветкою",
    "img": "https://cdn.sushi-master.ua/sm-ua/products/0002-sushi-nigiri-z-krevetkoyu.jpg?&w=650&format=auto&mode=fit&q=80",
    "foodType": "sush1",
    "price": 89,
    "weight": 502,
    "description": "Рис, квеветка"
  },
  {
    "title": "Суші нігірі з тунцем",
    "img": "https://cdn.sushi-master.ua/sm-ua/products/0002-sushi-nigiri-z-tuncem.jpg?&w=650&format=auto&mode=fit&q=80",
    "foodType": "sush1",
    "price": 89,
    "weight": 602,
    "description": "Рис, тунець"
  },
  {
    "title": "Суші нігірі з лососем",
    "img": "https://cdn.sushi-master.ua/sm-ua/products/0002-sushi-nigiri-z-lososem.jpg?&w=650&format=auto&mode=fit&q=80",
    "foodType": "sush1",
    "price": 119,
    "weight": 602,
    "description": "Рис, лосось"
  },
