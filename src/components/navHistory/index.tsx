import {Link, useLocation} from "react-router-dom";
import './styles.scss'

export const NavHistory = () => {
  const location = useLocation();
  const path = location.pathname.match(/^\/([^\/]+)/);
  const currentLocationLink: string = path?.[0] ?? '/';
  const currentLocationName: string = path?.[1] ?? '';
  console.log('location', location)
  return (
    <div className="navHistory">
      <Link to={"/"} style={{color: 'black'}}>Main</Link>
      {currentLocationName.length > 2 && <>        {/*without localization*/}
        <div className="circle"
             style={{width: '4px', height: '4px', backgroundColor: 'red', borderRadius: '100%'}}></div>
        <Link to={currentLocationLink} style={{color: '#97a3a6'}}>{currentLocationName}</Link>
      </>}
    </div>
  )
}