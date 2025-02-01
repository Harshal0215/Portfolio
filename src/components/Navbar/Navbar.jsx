import React, { useRef, useState } from "react";
import logo from "../../assets/logo.svg";
import "./navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menuo from "../../assets/menu_open.svg";
import closee from "../../assets/menu_close.svg";

const Navbar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="" />
      <img src={menuo} onClick={openMenu} className="menuo" alt="" />
      <ul ref={menuRef} className="nav-menu">
        <img src={closee} onClick={closeMenu} className="menuc" alt="" />

        <li className="underline">
          <AnchorLink className="anchor" href="#Hero">
            Home
          </AnchorLink>
        </li>
        <li className="underline">
          <AnchorLink className="anchor" offset={50} href="#About">
            About me
          </AnchorLink>
        </li>
        <li className="underline">
          <AnchorLink className="anchor" offset={50} href="#Services">
            Services
          </AnchorLink>
        </li>
        <li className="underline">
          <AnchorLink className="anchor" offset={50} href="#Work">
            Portfolio
          </AnchorLink>
        </li>
        <li className="underline">
          <AnchorLink className="anchor" offset={50} href="#Contact">
            Contact
          </AnchorLink>
        </li>
      </ul>
      <div className="connect">Connect with me</div>
    </div>
  );
};

export default Navbar;
