import {deliveryInfo} from "../../../components/const";
import './styles.scss'
export const DeliveryInfo = () => {
  return (
    <div className="deliveryInfo__wrapper">
      {deliveryInfo.map((i, index) => (
        <div key={index} className="deliveryInfo">
          <span className="deliveryInfo__title">{i.title}</span>
          <ul className="deliveryInfo__list">
            {i.list.map((item, index) => (
              <li className="deliveryInfo__item" key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>

  )
}