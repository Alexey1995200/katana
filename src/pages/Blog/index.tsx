import {Link} from "react-router-dom";
import './styles.scss'
import {DesktopPrimaryBanner} from "../../components/layout/Blog/DesktopPrimaryBanner";
import {bannersArr, primaryBanner} from "../../components/const";
import {useEffect, useState} from "react";
import {Banner} from "../../components/layout/Blog/Banner";
import {Button} from "../../components/button";
import {arrowDownMore} from "../../assets";
import {NavHistory} from "../../components/navHistory";

const BlogPage = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [isSetShown, setIsSetShown] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // const bannersArr = !isMobileView ? bannersList.slice(1) : bannersList

  return (
    <div className="blog">
      {!isSetShown ? <NavHistory/>:
        <Link to={'/blog'}>Return to list</Link>
      }
      <div className="blog__body">
        <div className="blog__upper">
          <span className="blog__title title">Blog</span>
          {
            isMobileView ?
              <Banner
                banner={primaryBanner}
              /> :
              <DesktopPrimaryBanner
                banner={primaryBanner}
              />
          }
        </div>
      </div>
      <div className="blog__banners">
        {bannersArr.map((banner, index) => {
          return (
            <Banner
              banner={banner}
              key={index}
            />)
        })
        }
      </div>
      <Button
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
      />
    </div>
  )
}

export default BlogPage