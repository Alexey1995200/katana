import {Link} from "react-router-dom";
import {arrBack, Calendar, fb_btn, insta_btn, telegram, tg_btn, Views} from "../../../assets";
import {IBlogItem} from "../../../components/interface";
import {timestampToDMYNumStrNum} from "../../../components/const";
import './styles.scss'

interface ICurrentSet {
  currentSet: IBlogItem | null;
  setCurrentSet: React.Dispatch<React.SetStateAction<IBlogItem | null>>;
}

export const CurrentSet = ({currentSet, setCurrentSet}: ICurrentSet) => {
  return (

    <div className="currentSet_wrapper">
      <div className="currentSet">
        <div className="navHistory">
          {/*// todo remake nav css for currentSet*/}
          <Link to={"/"} style={{color: 'black'}}>Main</Link>
          <div className="circle"
               style={{width: '4px', height: '4px', backgroundColor: 'red', borderRadius: '100%'}}></div>
          <Link to={'/blog'} style={{color: '#97a3a6'}}>Blog</Link>
          <div className="circle"
               style={{width: '4px', height: '4px', backgroundColor: 'red', borderRadius: '100%'}}></div>
          <Link to={'/blog'} style={{color: '#97a3a6'}}>{currentSet?.title}</Link>
        </div>

        <div className="title">{currentSet?.title}</div>
        {currentSet?.date && <div className="currentSet__info">
          <div className="date"><Calendar color='black'/>{timestampToDMYNumStrNum(currentSet?.date)}</div>
          <div className="views"><Views color='black'/>{currentSet?.views}</div>
        </div>}

        <div className="currentSet__details">
          <div className="currentSet__details_title">{currentSet?.detailedDescription?.descriptionTitle}</div>
          <ul>
            {currentSet?.detailedDescription?.descriptionPoints.map((point, index) => {
              return (<li key={index}>{point}</li>)
            })
            }
          </ul>
        </div>

        <div className="currentSet__share">
          <span>Share with your friends</span>
          <div className="currentSet__socials">
            <a href="https://telegram.org" target="_blank" rel="noreferrer"><img src={tg_btn} alt="TG"/></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><img src={insta_btn} alt="INST"/></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><img src={fb_btn} alt="FB"/></a>
          </div>
        </div>
      </div>

    </div>

  )
}