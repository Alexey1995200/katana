import {advantages, categoryList, food,} from "../../components/const";
import './styles.scss'
import {useEffect, useMemo, useRef, useState} from "react";
import {ArrLeftBtn, ArrRightBtn, chefsRec, information, mapBG, more, newIco, samurai, spicyIco} from "../../assets";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "../../components/button";
import {ButtonBorder} from "../../components/buttonBorder";


const getFoodCount = (width: number) => {
  if (width < 768) {
    return 4;
  } else if (width < 860 && width > 768) {
    return 1;
  } else if (width < 1240) {
    return 2;
  } else if (width < 1600) {
    return 3;
  } else {
    return 4;
  }
};

const Main = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [newFoodCurrentPage, setNewFoodCurrentPage] = useState(0)
  const [chefsFoodCurrentPage, setChefsFoodCurrentPage] = useState(0)
  const [foodPerPage, setFoodPerPage] = useState(getFoodCount(window.innerWidth))
  const [isTextFull, setIsTextFull] = useState(false)
  const [advantageWidth, setAdvantageWidth] = useState(192)
  const [currentAdvantage, setCurrentAdvantage] = useState(0)
  const advRef = useRef<HTMLDivElement>(null);
  const advantageRef = useRef<HTMLDivElement | null>(null);
  const advListGap = 16
  const paddingLR = screenWidth > 768 ? 80 : 12
  const advWidth = (screenWidth - paddingLR * 2)

  console.log(paddingLR)
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
      setFoodPerPage(getFoodCount(window.innerWidth));
      setIsMobileView(window.innerWidth < 768);
      if (!!advantageRef.current) {
        setAdvantageWidth(advantageRef.current.offsetWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const newFood = useMemo(() => food.filter(item => item.isNew), [food]);
  const newFoodToShow = newFood.slice(
    newFoodCurrentPage * foodPerPage,
    (newFoodCurrentPage + 1) * foodPerPage
  );
  const chefsFood = useMemo(() => food.filter(item => item.isChefsRec), [food]);
  const chefsFoodToShow = chefsFood.slice(
    chefsFoodCurrentPage * foodPerPage,
    (chefsFoodCurrentPage + 1) * foodPerPage
  );
  const newFoodMaxPages = Math.floor(newFood.length / foodPerPage);
  const handleNextNewFoodPage = () => {
    if (newFoodCurrentPage !== newFoodMaxPages - 1) {
      setNewFoodCurrentPage((page) => page + 1);
    } else {
      return null
    }
  }
  const handlePrevNewFoodPage = () => {
    if (newFoodCurrentPage === 0) return null
    else
      setNewFoodCurrentPage((page) => page - 1)
  }

  const chefsFoodMaxPages = Math.ceil(chefsFood.length / foodPerPage);
  const handleNextChefsFoodPage = () => {
    if (chefsFoodCurrentPage !== chefsFoodMaxPages - 1) {
      setChefsFoodCurrentPage((page) => page + 1);
    } else {
      return null
    }
  }
  const handlePrevChefsFoodPage = () => {
    if (chefsFoodCurrentPage === 0) return null
    else
      setChefsFoodCurrentPage((page) => page - 1)
  }
  const navigate = useNavigate()

  const numberOfShownAdvantages: number = Math.floor(advWidth / (advantageWidth + advListGap));

  const shownAdvantages = screenWidth < 769 ? advantages : advantages.slice(
    currentAdvantage,
    numberOfShownAdvantages + currentAdvantage
  )


  const handleNextAdvantage = () => {
    if (currentAdvantage !== advantages.length - numberOfShownAdvantages) {
      setCurrentAdvantage((i) => i + 1);
    } else {
      return null
    }
  }
  const handlePrevAdvantage = () => {
    if (currentAdvantage === 0) return null
    else
      setCurrentAdvantage((i) => i - 1)
  }

  return (
    <div className={"main"}>
      {screenWidth < 360 &&
        <div style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          zIndex: "99"
        }}>This resolution is not
          supported</div>}
      <div className={`main__adv ${screenWidth < 769 && 'overflow'}`} ref={advRef}>
        {shownAdvantages.map((advantage, i) => {
          return (
            <div className={`advantage__out ${!advantage.isOutlined && 'transparent'}`}
                 ref={i === 0 ? advantageRef : null}
            >
              <div className={`advantage__in ${!advantage.isOutlined && 'transparent'}`}>
                <img className="advantage__img" src={advantage.ico} alt=""/>
                <p className="advantage__text">{advantage.text}</p>
              </div>
            </div>
          )
        })
        }
        <ArrLeftBtn
          style={{
            position: 'absolute',
            left: '20px',
            top: '412px',
            color: 'black',
            display: (screenWidth < 768) || (currentAdvantage === 0) ? "none" : "unset"
          }}
          onClick={handlePrevAdvantage}
        />
        <ArrRightBtn
          style={{
            position: 'absolute',
            left: `${screenWidth - 60}px`,
            top: '412px',
            color: 'black',
            display: (screenWidth < 769) || (currentAdvantage + numberOfShownAdvantages === advantages.length) ? "none" : "unset"
          }}
          strokeColor={'white'}
          onClick={handleNextAdvantage}
        />
      </div>
      <div className="main__most-order">
        <p className="main__header_left">Most Ordered</p>
        <div className="most-order__orders">
          {
            food.map((food) => {
              return (
                <div className="most-order__order" key={food.title}>
                  <img className="order__img" src={food.img} alt=""/>
                  <div className="order__desc">
                    <p className="order__title">{food.title}</p>
                    <p className="order__price">{food.price} ₴</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="main__menu">
        <p className="main__header_left">menu</p>
        <div className="menu__categories">
          {categoryList.map((category) => {
            return (
              <div className="menu__category_wrapper"
                   key={category.title}
                   style={{
                     backgroundImage: `url("${category.img}")`,
                     backgroundSize: "cover",
                     backgroundPosition: "center",
                     borderRadius: "20px",
                   }}
              >
                <div className="menu__category">
                  {category.title}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="main__filtered">
        <div className="filtered__header">
          <p className="main__header_left">new</p>
          <div className="main__header_right">
            {!isMobileView &&
              <div className="filtered__pagination">
                <ArrLeftBtn
                  color={newFoodCurrentPage === 0 ? "#ccdadd" : "black"}
                  onClick={() => handlePrevNewFoodPage()}
                />
                <p className="pagination">{newFoodCurrentPage + 1} / {newFoodMaxPages}</p>
                <ArrRightBtn
                  color={newFoodCurrentPage === newFoodMaxPages ? "#ccdadd" : "black"}
                  onClick={() => handleNextNewFoodPage()}
                />
              </div>
            }
            <Link to={"/"} className="pagination__link">Watch all <img className="pagination__more" src={more}
                                                                       alt=""/></Link>
          </div>
        </div>
        <div className="filtered__body">
          {newFoodToShow.map((food) => {
            return (
              <div key={food.title} className="filteredFood__wrapper">
                <div className="filteredFood__body">
                  <div className="filteredFood__img" style={{
                    backgroundImage: `url("${food.img}")`,
                  }}>
                    {food.isNew && <img src={newIco} alt="" className="filteredFood__tag"/>}
                    {food.isSpicy && <img src={spicyIco} alt="" className="filteredFood__tag"/>}
                  </div>
                  {!isMobileView ?
                    <div className="food__details">
                      <p className="food__title">{food.title}</p>
                      <p className="food__desc">
                        {food.weight && <span className="food__weight">{food.weight}g.</span>}
                        {food.weight && ' - '}
                        {food.description}</p>
                    </div> :
                    <div className="food__details">
                      <p className="food__title">{food.title}</p>
                      <img src={information}
                           alt=""
                           style={{height: "20px"}}
                           onClick={() => null}/>
                    </div>}
                </div>
                <div className="food__buy">
                  <div className="food__price">
                    <p className="food__price_current">{food.price} ₴</p>
                    {food.oldPrice && <p className="food__price_old">{food.oldPrice} ₴</p>}
                  </div>
                  <Button
                    title={"add to cart"}
                    onClick={() => navigate('/addToCart')} //
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="main__filtered">
        <div className="filtered__header">
          <p className="main__header_left">Chef'sChoice</p>
          <div className="main__header_right">
            {!isMobileView &&
              <div className="filtered__pagination">
                <ArrLeftBtn
                  color={chefsFoodCurrentPage === 0 ? "#ccdadd" : "black"}
                  onClick={() => handlePrevChefsFoodPage()}
                />
                <p className="pagination">{chefsFoodCurrentPage + 1} / {chefsFoodMaxPages}</p>
                <ArrRightBtn
                  color={chefsFoodCurrentPage === chefsFoodMaxPages ? "#ccdadd" : "black"}
                  onClick={() => handleNextChefsFoodPage()}
                />
              </div>}
            <div>
              <Link
                to={"/"}
                className="pagination__link"
              >Watch all <img className="pagination__more" src={more} alt=""/>
              </Link>
            </div>

          </div>
        </div>
        <div className="filtered__body">
          {chefsFoodToShow.map((food) => {
            return (
              <div key={food.title} className="filteredFood__wrapper alt">
                <div className="filteredFood__body">
                  <div className="filteredFood__img alt" style={{
                    backgroundImage: `url("${food.img}")`,
                  }}>
                    {food.isChefsRec && <img src={chefsRec} alt="" className="filteredFood__tag"/>}
                  </div>
                  {!isMobileView ?
                    <div className="food__details">
                      <p className="food__title">{food.title}</p>
                      <p className="food__desc">
                        {food.weight && <span className="food__weight">{food.weight}g.</span>}
                        {food.weight && ' - '}
                        {food.description}</p>
                    </div> :
                    <div className="food__details">
                      <p className="food__title">{food.title}</p>
                      <img src={information}
                           alt=""
                           style={{height: "20px"}}
                           onClick={() => null}/>
                    </div>}

                </div>
                <div className="food__buy">
                  <div className="food__price">
                    <p className="food__price_current">{food.price} ₴</p>
                    {food.oldPrice && <p className="food__price_old">{food.oldPrice} ₴</p>}
                  </div>
                  <Button
                    title={"add to cart"}
                    onClick={() => navigate('/addToCart')}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="main__text">
        <p className="text__title">Вкусные суши и роллы по приятной цене</p>
        <p className={`text__text ${isTextFull ? "full" : ""}`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi illo nisi
          numquam odio quod repellat sunt unde? Et impedit incidunt nobis omnis quae. A ab, commodi distinctio id ipsam
          similique veniam. At atque aut doloremque, ducimus, ex exercitationem expedita illo impedit ipsa iusto maiores
          minus natus nesciunt, nisi nobis nostrum omnis optio placeat possimus quae qui rem rerum sapiente soluta
          suscipit tempore temporibus tenetur vero voluptate voluptatibus? Consectetur dolor, doloremque enim eum ex
          facere, id ipsa itaque labore minima mollitia necessitatibus non nostrum numquam odit quam quos tempore
          tenetur totam, vero vitae voluptatem voluptates voluptatibus. Accusamus ad aliquam animi beatae cumque,
          cupiditate distinctio explicabo facere fugit illo labore laboriosam laudantium magnam mollitia numquam odit
          officiis perspiciatis placeat possimus quia sunt suscipit tempora veritatis! Dolor ea fugiat molestiae optio
          perspiciatis? Alias corporis deserunt et modi neque nostrum quisquam repellat saepe tenetur voluptates! Alias,
          delectus explicabo odit perspiciatis similique voluptas. Adipisci alias aliquam commodi dicta distinctio
          dolore dolores ea eligendi eum explicabo itaque molestias non optio perferendis quaerat quasi quos, sed soluta
          unde veritatis. Ad amet assumenda consectetur cupiditate dolorum ducimus enim ex exercitationem, facere
          impedit ipsum labore magnam minima molestiae nam nulla odit qui quibusdam, quidem quod ratione reprehenderit
          saepe, sunt ullam unde vitae voluptas voluptatibus. Adipisci aliquam animi asperiores aspernatur commodi,
          consequuntur corporis deleniti doloribus ea excepturi id itaque iure laborum magni obcaecati quaerat
          reprehenderit sed tenetur veniam veritatis! Ad autem commodi deserunt harum, nisi placeat porro tempora.
          Distinctio facere quod voluptatibus. Ad aspernatur distinctio odit velit, vero voluptas.</p>
        {!isTextFull && <div className="text__gradient"/>}
        <button className="text__more" onClick={() => setIsTextFull(!isTextFull)}>Подробнее</button>
      </div>
      <div className="main__delivery" style={{backgroundImage: `url(${mapBG})`}}>
        <img className="delivery__pic" alt="" src={samurai}/>
        <div className="delivery__desc">
          <p className="delivery__title">Free Delivery</p>
          <p className="delivery__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, provident?</p>
        </div>
        <ButtonBorder
          title={"more"}
          color={"black"}
          width={screenWidth < 769 ? "100%" : "unset"}
        />
      </div>
    </div>
  )
}

export default Main