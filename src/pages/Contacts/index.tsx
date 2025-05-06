import './styles.scss'
import {NavHistory} from "../../components/NavHistory";
import {contactsInfo} from "../../components/const";

const Contacts = () => {
  return (
    <div>
      <NavHistory />
      <span className="contacts__title title">contacts</span>
      <div className="contacts__items">
        {contactsInfo.map((item, i) => {
          return (<div className="contacts__item" key={i}>
            <div className="item__title">{item.title}</div>
            {item.content.map((item, i) => {
              const emailMatch = item.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}\b/i);
              if (emailMatch) {
                const email = emailMatch[0];
                const parts = item.split(email);
                return (
                  <p key={i} className="item__content">
                    {parts[0]}
                    <a href={`mailto:${email}`} className='item__content email'>{email}</a>
                    {parts[1]}
                  </p>
                );
              }
              return (<p key={i} className='item__content'>{item}</p>)
            })}
          </div>)
        })}
      </div>
    </div>
  )
}
export default Contacts