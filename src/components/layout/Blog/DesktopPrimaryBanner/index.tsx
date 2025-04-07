import './styles.scss'
import {IBlogBanner} from "../../../interface";
import {timestampToDMYNumStrNum} from "../../../const";
import {ButtonBorder} from "../../../buttonBorder";
import {Calendar, Views} from "../../../../assets";

export const DesktopPrimaryBanner = ({banner}: IBlogBanner) => {
  return (
    <div className="desktopPrimaryBanner_wrapper" style={{
      // backgroundImage: `url(${banner.img})`,
      backgroundImage: `url(${banner.img})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "12px"
    }}>
      <div className="desktopPrimaryBanner">
        <div className="stats">
          <div className="date"><Calendar color='white'/>{timestampToDMYNumStrNum(banner.date)}</div>
          <div className="views"><Views color='white'/>{banner.views}</div>
        </div>
        <span className="title">{banner.title}</span>
        <span className="description">{banner.description}</span>
        <ButtonBorder
          title={'Watch'}
          width={'120px'}
          alt={'white'}
        />
      </div>

    </div>
  )
}