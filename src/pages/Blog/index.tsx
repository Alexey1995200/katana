import {Link} from "react-router-dom";
import './styles.scss'
import {DesktopPrimaryBanner} from "../../components/layout/Blog/DesktopPrimaryBanner";
import {bannersArr, primaryBanner} from "../../components/const";
import {useEffect, useState} from "react";
import {Banner} from "../../components/layout/Blog/Banner";
import {Button} from "../../components/button";
import {arrBack, arrowDownMore} from "../../assets";
import {NavHistory} from "../../components/NavHistory";
import {CurrentSet} from "./CurrentSet";
import {IBlogBanner, IBlogItem} from "../../components/interface";

const BlogPage = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [currentSet, setCurrentSet] = useState<IBlogItem | null>(null);

  useEffect(() => {
    console.log("Current Set", currentSet);
  }, [currentSet]);
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const bannersArrSlice = !!currentSet ? bannersArr.slice(0, 3) : bannersArr
  return (
    <div className="blog">
      {!!currentSet ?
        <div className="blog__return">
          <img src={arrBack} style={{height: "10px"}} alt="<"/>
          <span onClick={() => setCurrentSet(null)}>Return to list</span>
        </div>
        : <NavHistory/>}
      {!!currentSet ?
        <CurrentSet
          currentSet={currentSet}
          setCurrentSet={setCurrentSet}
        /> :
        <div className="blog__body">
          <div className="blog__upper">
            <span className="blog__title title">Blog</span>
            {
              isMobileView ?
                <Banner
                  banner={primaryBanner}
                  setCurrentSet={setCurrentSet}
                /> :
                <DesktopPrimaryBanner
                  banner={primaryBanner}
                  setCurrentSet={setCurrentSet}
                />
            }
          </div>
        </div>}
      <div className="blog__banners">
        {bannersArrSlice.map((banner, index) => {
          return (
            <Banner
              banner={banner}
              key={index}
              setCurrentSet={setCurrentSet}
            />)
        })
        }
      </div>
      {!currentSet && <Button
        position={'center'}
        title={
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: '8px',
            alignItems: 'center'
          }}>
            Show more
            <img src={arrowDownMore} alt="↓"/>
          </div>}
      />}
    </div>
  )
}

export default BlogPage