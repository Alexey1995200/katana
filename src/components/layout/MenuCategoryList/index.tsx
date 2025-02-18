import {Link} from "react-router-dom";
import './styles.scss'
import {cart, child, dessert, hot, pizza, rolls, salad, set, snack, soup, sushi, vegan, wok} from "../../../assets";

interface IMenuCategory {
  title: string,
  link: string,
  img: string,
}
const categoryList: IMenuCategory[] = [
  {
    title: "Sets",
    link: "/menu/sets",
    img: set
  },{
    title: "Pizza",
    link: "/menu/pizza",
    img: pizza
  }, {
    title: "Soups",
    link: "/menu/soups",
    img: soup
  }, {
    title: "Hot",
    link: "/menu/hot",
    img: hot
  }, {
    title: "Rolls",
    link: "/menu/rolls",
    img: rolls
  }, {
    title: "Salads",
    link: "/menu/salads",
    img: salad
  }, {
    title: "Sushi",
    link: "/menu/sushi",
    img: sushi
  }, {
    title: "Wok",
    link: "/menu/wok",
    img: wok
  }, {
    title: "Snacks",
    link: "/menu/snacks",
    img: snack
  }, {
    title: "Children's",
    link: "/menu/children",
    img: child
  }, {
    title: "Vegan",
    link: "/menu/vegan",
    img: vegan
  }, {
    title: "Desserts",
    link: "/menu/desserts",
    img: dessert
  }
]

let money = 512

const MenuCategoryList = () => {
  return (
    <div className="menuCategoryList">
      {categoryList.map((category) => {
        return (
          <button className="menuCategory" key={category.title}>
            <Link key={category.title} to={`${category.link}`} className='category-link'>
              <img src={category.img} alt=""/>
              {category.title}
            </Link>
          </button>)
      })}
      <button className="menuCategory-cart" key={'cart'}>
        <Link key={'cart'} to={`cart`} className='category-link-cart'>
          <img src={cart} alt=""/>
          <div className="cart-detais">
            <span>Cart</span>
            <span>{`${money}₴`}</span>
          </div>
        </Link>
      </button>
    </div>
  );
};


export default MenuCategoryList

