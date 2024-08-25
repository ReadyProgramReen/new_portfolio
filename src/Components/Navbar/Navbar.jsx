import React, { useRef, useState } from "react";
import "../Navbar/Navbar.css";
import theme_pattern from "../../assets/assets/theme_pattern.svg";
import underline from '../../assets/assets/nav_underline.svg'
import menu_open from '../../assets/assets/menu_open.svg'
import menu_close from '../../assets/assets/menu_close.svg'

import AnchorLink from "react-anchor-link-smooth-scroll";



const Navbar = () => {
  const [menu, setMenu] = useState('Home')
  const menuRef = useRef();

  const openMenu = ()=>{
    menuRef.current.style.right = '0'
  }

  const closeMenu = ()=>{
    menuRef.current.style.right = '-350px'
  }


  return (
    <div className="navbar">
      <div className="nav-logo">
        <h1>Maureen E.</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <img onClick={openMenu} className="nav-mob-open" src={menu_open} alt="" />

      <ul ref={menuRef}  className="nav-menu">
        <img onClick={closeMenu} src={menu_close} alt="" className="nav-mob-close" />
        <li><AnchorLink className="anchor-link" href="#Home" ><p onClick={()=>setMenu('Home')}>Home</p></AnchorLink>{menu === "Home" ? <img src={underline} alt="" />:<></> }</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#About" ><p onClick={()=>setMenu('About')}>About</p></AnchorLink>{menu === "About" ? <img src={underline} alt="" />:<></> }</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#Work" ><p onClick={()=>setMenu('Work')}>Portfolio</p></AnchorLink>{menu === "Portfolio" ? <img src={underline} alt="" />:<></> }</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#Contact" ><p onClick={()=>setMenu('Contact')}>Contact</p></AnchorLink>{menu === "Contact" ? <img src={underline} alt="" />:<></> }</li>
      </ul>

      <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#Contact" >Connect with me </AnchorLink> </div>
    </div>
  );
};

export default Navbar;
