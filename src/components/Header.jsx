import React, { useState, useContext } from "react";
import "@styles/Header.scss";

import MyOrder from "@containers/MyOrder";
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";
import Menu from "@components/Menu";

import AppContext from "../context/AppContext";

const Header = () => {
  console.log(`menu: ${menu}`);

  const [toogle, setToogle] = useState(false);
  const [toogleOrders, setToogleOrders] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToogle(!toogle);
  };

  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            platzi@example.com
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => {setToogleOrders(!toogleOrders)}}
          >
            <img src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toogle && <Menu />}
      {toogleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
