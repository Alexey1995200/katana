import {chefsRec, information, newIco, spicyIco} from "../../../../assets";
import {Button} from "../../../button";
import {useNavigate} from "react-router-dom";
import {IMainBanner} from "../../../interface";

export const DishBanner_fixed = ({food, isMobileView}: IMainBanner) => {
  const navigate = useNavigate()
    return (
    <div key={food.title} className="filteredFood__wrapper">
      <div className="filteredFood__body">
        <div className="filteredFood__img" style={{
          backgroundImage: `url("${food.img}")`,
        }}>

          {/*{food.isChefsRec && <img src={chefsRec} alt="" className="filteredFood__tag"/>}     todo img to text     */}
          {food.isNew && <img src={newIco} alt="" className="filteredFood__tag"/>}
          {food.isSpicy && <img src={spicyIco} alt="" className="filteredFood__tag"/>}
        </div>
        {!isMobileView ?
          <div className="food__details">
            <p className="food__title">{food.title}</p>
            <p className="food__desc">
              {food.weight && <span className="food__weight">{food.weight}g.</span>}
              {food.weight && ' - '}
              {food.description}</p>
          </div> :
          <div className="food__details">
            <p className="food__title">{food.title}</p>
            <img src={information}
                 alt=""
                 style={{height: "20px"}}
                 onClick={() => null}/>
          </div>}
      </div>
      <div className="food__buy">
        <div className="food__price">
          <p className="food__price_current">{food.price} ₴</p>
          {food.oldPrice && <p className="food__price_old">{food.oldPrice} ₴</p>}
        </div>
        <Button
          title={"add to cart"}
          onClick={() => navigate('/addToCart')} //
        />
      </div>
    </div>
  )
}