import {Link} from "react-router-dom";
import {bg, facebook, footerLogo, instagram, mastercard, telegram, visa, youtube} from "../../../assets";
import "./styles.scss"

interface ILink {
  title: string,
  link: string
}

interface ISocial {
  title: string,
  link: string,
  img: string
}

interface IPayment {
  title: string,
  img: string,
}

const Footer = () => {
  const links: ILink[] = [
    {
      title: 'Delivery and payment',
      link: '/delivery',
    }, {
      title: 'About Us',
      link: '/about',
    }, {
      title: 'Blog',
      link: '/blog',
    }, {
      title: 'Reviews',
      link: '/reviews',
    }, {
      title: 'Contacts',
      link: '/contacts',
    }
  ]
  const socials: ISocial[] = [
    {title: "facebook", link: 'https://facebook.com', img: facebook},
    {title: "instagram", link: 'https://instagram.com', img: instagram},
    {title: "telegram", link: 'https://telegram.org', img: telegram},
    {title: "youtube", link: 'https://youtube.com', img: youtube},
  ];
  const payments: IPayment[] = [
    {title: 'visa', img: visa},
    {title: 'mastercard', img: mastercard}
  ]
  return (
    <div className="footer" style={{backgroundImage: `url(${bg})`, backgroundRepeat: 'repeat'}}>
      <div className="footer__body">
        <div className="footer__about">
          <p className="h3">About KATANA</p>
          <div className="footer__links">
            {links.map((link) => {
              return (
                <Link className={"footer__link"} key={link.title} to={link.link}>{link.title}</Link>
              );
            })}
          </div>
        </div>
        <div className="footer__order">
          <p className="h3">Make Order</p>
          <div className="footer__order-info">
            <a href="tel:+380951234567">+38 (095) 123-45-67</a>
            <p>everyday from 11:30 to 23:00</p>
          </div>
        </div>
        <div className="footer__followUs">
          <p className="h3">Follow Us</p>
          <div className="footer__socials">
            {socials.map((social) => {
              return (<a href={social.link} key={social.title} target="_blank" rel="noopener noreferrer">
                <img src={social.img} alt={`${social.title} logo`}/>
              </a>)
            })}
          </div>
        </div>
        <div className="footer__info">
          <div className="footer__law">
            <div className="h3">legal information</div>
            <p>Privacy Policy</p>
            <p>User's Agreement</p>
          </div>
          <div className="footer__paymentMethods">
            {payments.map((payment) => {
              return (<img src={payment.img} alt={`${payment.title} logo`} key={payment.title}/>)
            })}
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="h3">© КАТАНА 2021</p>
        <img src={footerLogo} alt="logo2" className="mount"/>
      </div>
    </div>
  )
}
export default Footer