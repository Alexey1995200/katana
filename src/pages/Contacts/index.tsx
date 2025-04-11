import './styles.scss'
import {NavHistory} from "../../components/NavHistory";
import {contactsInfo} from "../../components/const";

const Contacts = () => {
  return (
    <div>
      <NavHistory />
      <span className="contacts__title title">contacts</span>
      {contactsInfo.map((item, i) => {
        return (<div className="contacts__item" key={i}>
          <div className="item__title">{item.title}</div>
          {item.content.map((item, i) => {
            return (<p key={i} className='item__content'>{item}</p>)
          })}
        </div>)
      })}
    </div>
  )
}
export default Contacts