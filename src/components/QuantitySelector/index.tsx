import './styles.scss'
import {useState} from "react";

export const QuantitySelector = () => {
  const [tempCounter, setTempCounter] = useState(1)
  const plus1= () => setTempCounter(tempCounter+1)
  const minus1= () => (tempCounter>0) && setTempCounter(tempCounter-1)
  return(
    <div className="quantitySelector">
      <div className="minus" onClick={()=>minus1()}>-</div>
      <div className="count">{tempCounter}</div>
      <div className="plus" onClick={()=>plus1()}>+</div>
    </div>
  )
}