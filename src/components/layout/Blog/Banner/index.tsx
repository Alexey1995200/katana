import './styles.scss'
import {IBlogBanner} from "../../../interface";
import {Calendar, Views} from "../../../../assets";
import {timestampToDMYNumStrNum} from "../../../const";
import {ButtonBorder} from "../../../buttonBorder";

export const Banner = ({banner}: IBlogBanner) => {
  return (<div className="banner">
    <div className="image"
         style={{
           backgroundImage: `url("${banner.img}")`,
         }}
    >
      {banner.type && <div className="type">{banner.type}</div>}
    </div>
    <div className="stats">
      <div className="date"><Calendar color='black'/>{timestampToDMYNumStrNum(banner.date)}</div>
      <div className="views"><Views color='black'/>{banner.views}</div>
    </div>
    <div className="text">
      <div className="title">{banner.title}</div>
      <div className="description">{banner.description}</div>
    </div>
    <ButtonBorder
      style={{marginTop: 'auto'}}
      title={'view'}
      color={'black'}
    />
  </div>)
}