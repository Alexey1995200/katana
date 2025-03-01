import {Link} from "react-router-dom";
import './styles.scss'
import {cart} from "../../../assets";
import {categoryList} from "../../const";

let money = 512

const MenuCategoryList = () => {
  return (
    <div className={"menuCategoryList__wrapper"}>
      <div className="menuCategoryList">
        {categoryList.map((category) => {
          return (
            <button className="menuCategory" key={category.title}>
              <Link key={category.title} to={`${category.link}`} className='category-link'>
                <img src={category.ico} alt=""/>
                {category.title}
              </Link>
            </button>)
        })}
      </div>
      <button
        className="menuCategory-cart"
        key={'cart'}
        style={{flexShrink: "0"}}
      >
        <Link key={'cart'} to={`cart`} className='category-link-cart'>
          <img src={cart} alt=""/>
          <div className="cart-detais">
            <p>Cart</p>
            <p>{`${money}₴`}</p>
          </div>
        </Link>
      </button>
    </div>
  )
    ;
};


export default MenuCategoryList

