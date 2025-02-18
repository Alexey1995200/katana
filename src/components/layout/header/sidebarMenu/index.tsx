import {arrowDown, closeBtn, logo, phone} from "../../../../assets";
import React from "react";
import './styles.scss'
import {Link} from "react-router-dom";

interface SidebarMenuProps {
  setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ILink {
  title: string,
  link: string
}

const links: ILink[] = [
  {
    title: 'Delivery and payment',
    link: '/delivery',
  }, {
    title: 'About Us',
    link: '/about',
  }, {
    title: 'Menu',
    link: '/menu',
  }, {
    title: 'Blog',
    link: '/blog',
  }, {
    title: 'Reviews',
    link: '/reviews',
  }, {
    title: 'Contacts',
    link: '/contact',
  }
]

export const SidebarMenu: React.FC<SidebarMenuProps> = ({setIsMenuOpened}) => {

  return (
    <div className="sidebarMenu">
      <div className="sidebarMenu__head">
        <img src={logo} alt=""/>
        <img src={closeBtn} alt="⨉" className="sidebarMenu__closeBtn" onClick={() => setIsMenuOpened(false)}/>
      </div>
      <div className="sidebarMenu__body">
        {links.map((link) => {
          return (
            <Link key={link.title} to={link.link} className="sidebarMenu__link">{link.title}</Link>
          );
        })}
      </div>
      <div className="sidebarMenu__footer">
          <div className="sidebarMenu__footer-top">
            <img src={phone} alt="" className="sidebarMenu__footer-phone"/>
            <span className="sidebarMenu__footer-number">+38 (095) 123-45-67</span>
          </div>
          <span className="sidebarMenu__footer-time">Call between 11:00 and 23:00</span>
      </div>
    </div>
  )
}