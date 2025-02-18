import {arrowDown, cart, headerBG, logo, menu, phone} from "../../../assets";
import './styles.scss'
import MenuCategoryList from "../MenuCategoryList";

interface ILang {
  title: string,
  ISO6392: string,
  ISO6391: string
}

interface ILang {
  title: string;
  ISO6392: string;
  ISO6391: string;
}

const languages: ILang[] = [
  {
    title: "Ukrainian",
    ISO6392: "ukr",
    ISO6391: "uk"
  }, {
    title: "English",
    ISO6392: "eng",
    ISO6391: "en"
  }, {
    title: "German",
    ISO6392: "deu",
    ISO6391: "de"
  }, {
    title: "Polish",
    ISO6392: "pol",
    ISO6391: "pl"
  }, {
    title: "French",
    ISO6392: "fra",
    ISO6391: "fr"
  }, {
    title: "Italian",
    ISO6392: "ita",
    ISO6391: "it"
  }
];


const Header = () => {
  return (
    <div className="header" style={{backgroundImage: `url(${headerBG})`}}>
      <div className="header-main">
        <div className="header-left">
          <img src={logo} alt="logo" className="logo"/>
          <span>Food Delivery in Kharkiv</span>
        </div>
        <div className="header-right">
          <div className="header__buttons">
            <img src={cart} alt="cart"/>
            <img src={menu} alt="menu"/>
          </div>
          <div className="calls">
            <div className="calls-top">
              <img src={phone} alt="" className="phone"/>
              <span className="numer">+38 (095) 123-45-67</span>
              <img src={arrowDown} alt="˅" className="arrow"/>
            </div>
            <span className="time">Call between 11:00 and 23:00</span>
          </div>
          <div className="languages">
            {languages.map((lang: ILang) => {
              return (<span title={lang.title} key={lang.ISO6392} className="language">{lang.ISO6391}</span>)
            })}
          </div>
          <button className="signIn">
            signIn
          </button>
        </div>

      </div>
      <MenuCategoryList/>
    </div>
  )
}
export default Header