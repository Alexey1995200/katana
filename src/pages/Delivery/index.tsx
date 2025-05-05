import {DeliveryInfo} from "./info";
import './styles.scss'
import {useEffect, useState} from "react";
import {mapCity} from "../../assets";
import {NavHistory} from "../../components/NavHistory";

const DeliveryPage = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (


  <div className='delivery'>
    <NavHistory/>
    <span className="title">Delivery and Payment</span>
      {!isMobileView ?
        <div className='deliveryInfo__map' style={{backgroundImage: `url(${mapCity})`,height:'700px',backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <DeliveryInfo/>
        </div>
        : <>
          <DeliveryInfo/>
          <div className='deliveryInfo__map' style={{backgroundImage: `url(${mapCity})`, aspectRatio: 1, backgroundSize: 'cover', backgroundPosition: 'center'}}/>
        </>
      }
    </div>
  )
}
export default DeliveryPage