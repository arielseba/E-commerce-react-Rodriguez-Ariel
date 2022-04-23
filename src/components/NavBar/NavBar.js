import React from "react";
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./styles.css";
import "../CartWidget/CartWidget";
import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
  return (
    <div className="nav">
      <img src="/logo.png" alt="logo" />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Productos</a>
        </li>
        <li>
          <a href="/">Nosotros</a>
        </li>
        <li>
          <a href="/">
            <CartWidget />
          </a>
        </li>
       
      </ul>
    </div>
  );
};

export default NavBar;
