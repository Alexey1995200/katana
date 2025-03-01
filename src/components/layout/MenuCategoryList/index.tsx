import {Link} from "react-router-dom";
import './styles.scss'
import {cart} from "../../../assets";
import {categoryList} from "../../const";

let money = 512

const MenuCategoryList = () => {
  // const menuRef = useRef<HTMLDivElement | null>(null);
  // const buttonRef = useRef<HTMLButtonElement | null>(null);
  // const cartRef = useRef<HTMLButtonElement | null>(null);
  // const [buttonWidth, setButtonWidth] = useState(96)
  // const [cartWidth, setCartWidth] = useState(0)
  // const [screenWidth, setScreenWidth] = useState(0)
  // const [currentItem, setCurrentItem] = useState(0)
  // const categoryListGap = 12
  // const paddingLR = 80
  // const menuWidth = (screenWidth - paddingLR * 2 - cartWidth)
  // const updateWidths = () => {
  //   setScreenWidth(window.innerWidth)
  //   if (cartRef.current) {
  //     setCartWidth(cartRef.current.offsetWidth)
  //   }
  //   if (!!buttonRef.current) {
  //     setButtonWidth(buttonRef.current.offsetWidth);
  //   }
  // };
  //
  // useEffect(() => {
  //   updateWidths()
  //   window.addEventListener("resize", updateWidths);
  //   return () => {
  //     window.removeEventListener("resize", updateWidths);
  //   };
  // }, []);
  //
  // const numberOfShownCategories: number = Math.floor(menuWidth / (buttonWidth + (categoryListGap)));
  // const shownCategories = categoryList.slice(
  //   // 0, numberOfShownCategories
  //   currentItem,
  //   numberOfShownCategories + currentItem
  // );
  // const handleNextItem = () => {
  //   if (currentItem !== categoryList.length - numberOfShownCategories) {
  //     setCurrentItem((i) => i + 1);
  //   } else {
  //     return null
  //   }
  // }
  // const handlePrevItem = () => {
  //   if (currentItem === 0) return null
  //   else
  //     setCurrentItem((i) => i - 1)
  // }
  return (
    <div className={"menuCategoryList__wrapper"}>
      <div className="menuCategoryList" >
        {categoryList.map((category, index) => {
          return (
            <button className="menuCategory" key={category.title}
                    // ref={index === 0 ? buttonRef : null}
            >
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
        // ref={cartRef}
      >
        <Link key={'cart'} to={`cart`} className='category-link-cart'>
          <img src={cart} alt=""/>
          <div className="cart-detais">
            <p>Cart</p>
            <p>{`${money}₴`}</p>
          </div>
        </Link>
      </button>
      {/*<ArrLeftBtn*/}
      {/*  style={{position: 'absolute', left: '20px', top: '164px', color: 'white', display: screenWidth < 400 ? "none" : "unset"}}*/}
      {/*  onClick={handlePrevItem}*/}
      {/*/>*/}
      {/*<ArrRightBtn*/}
      {/*  style={{position: 'absolute', left: `${screenWidth - 60}px`, top: '164px', color: 'white', display: screenWidth < 400 ? "none" : "unset"}}*/}
      {/*  onClick={handleNextItem}*/}
      {/*/>*/}
    </div>
  );
};


export default MenuCategoryList

