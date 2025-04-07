import {chefsRec, information, newIco, spicyIco} from "../../../../assets";
import {Button} from "../../../button";
import {IMainBanner} from "../../../interface";
import {useNavigate} from "react-router-dom";

export const DishBanner_adaptive = ({food, isMobileView}: IMainBanner) => {
  const navigate = useNavigate()
  return (
    <div key={food.title} className="filteredFood__wrapper alt">
      <div className="filteredFood__body">
        <div className="filteredFood__img alt" style={{
          backgroundImage: `url("${food.img}")`,
        }}>
          {/*{food.isChefsRec && <img src={chefsRec} alt="" className="filteredFood__tag"/>}*/}
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
      </div>
      :
      <div className="food__details">
        <p className="food__title">{food.title}</p>
        <img src={information}
             alt=""
             style={{height: "20px"}}
             onClick={() => null}/>
      </div>
      }

    </div>
  <div className="food__buy">
    <div className="food__price">
      <p className="food__price_current">{food.price} ₴</p>
      {food.oldPrice && <p className="food__price_old">{food.oldPrice} ₴</p>}
    </div>
    <Button
      title={"add to cart"}
      onClick={() => navigate('/addToCart')}
    />
  </div>
</div>
)
}