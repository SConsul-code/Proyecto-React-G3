/* import React from "react"; */
import ImageLogo from "../../Images/logo.svg";
import ImageCart from "../../Images/icon-cart.svg";
import ImageAvatar from "../../Images/image-avatar.png";
import { useState } from "react";
import Cart from "../Cart/Cart";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="Header--nav">
      <div className="Header--nav__title">
        <img className="Image--logo" src={ImageLogo} alt="" />
        <nav className="Main--nav">
          <ul>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="Image--header">
        <img
          className="Image-cart"
          src={ImageCart}
          alt=""
          onClick={() => setOpen(!open)}
        />
        <img className="Image-avatar" src={ImageAvatar} alt="" />
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Header;
