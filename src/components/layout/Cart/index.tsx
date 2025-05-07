import './styles.scss'
import {bin, emptyCart} from "../../../assets";
import {useEffect, useState} from "react";
import {food} from "../../const";
import {IMenuItem} from "../../interface";
import {QuantitySelector} from "../../QuantitySelector";
import {Button} from "../../button";
import {MobileWhiteHeader} from "../MobileWhiteHeader";

export const Cart = ({setIsCartShown}:any) => {
  const [cartList, setCartList] = useState<IMenuItem[] | null>(food.slice(0, 6))
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const removeItemByIndex = (indexToRemove: number) => {
    if (!cartList) return
    const newItems = cartList.filter((_, index) => index !== indexToRemove)
    setCartList(newItems);
  };

  let total = 2560

  return (
    <div style={{display: "flex",}}>
    {isMobileView && <MobileWhiteHeader
      backBtn={()=>setIsCartShown(false)}
    />}
      <div className="cart">
        {!cartList ?
          <div className="empty">
            <div className="upper">
              <img src={emptyCart} alt="🛒"/>
              <span>Cart is empty</span>
            </div>
            <Button
              title="GO TO MENU"
              textTransform="uppercase"
            />
          </div>
          : <>
            <div className="header">
              <span className="title">Cart</span>
              <button className="bin" onClick={() => setCartList(null)}><img src={bin} alt="🗑️"/>Clear everything
              </button>
            </div>
            <div className="items">
              {!!cartList && cartList.map((item, i) => {
                return (
                  <div className="item" key={i}>
                    <img src={item.img} alt=""/>
                    <div className="desc">
                      <div className="upper">
                        <span>{item.title}</span>
                        <button onClick={() => removeItemByIndex(i)} className="bin"><img src={bin} alt="🗑️"/></button>
                      </div>
                      <div className="lower">
                        <QuantitySelector/>
                        <div className="price">
                          <span className="new">{item.price} ₴</span>
                          {item.oldPrice && <span className="old">{item.oldPrice} ₴</span>}
                        </div>
                      </div>
                    </div>

                  </div>
                )
              })}
            </div>
            <div className="total">
              <div className="left">
                <span className="str">Total</span>
                <span className="money">{total} ₴</span>
              </div>
              <div className="right">
                <Button
                  title="confirm order"
                  textTransform="uppercase"
                />
              </div>
            </div>
          </>}
      </div>
    </div>
  )
}