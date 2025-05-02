import Header from "./Header";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";
import './styles.scss'

const Layout = () => {
  return <>
    <Header/>
    <div className="outlet"><Outlet/></div>
    <Footer/>
  </>
}

export default Layout