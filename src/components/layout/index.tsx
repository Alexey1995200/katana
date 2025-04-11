import Header from "./header";
import {Outlet} from "react-router-dom";
import Footer from "./footer";
import './styles.scss'

const Layout = () => {
  return <>
    <Header/>
    <div className="outlet"><Outlet/></div>
    <Footer/>
  </>
}

export default Layout