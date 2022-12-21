import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

const Navigation = () => {
  return (
    <div>
      <div className="nav">
        <Link className="nav__logo-container" to="/">
          <CrwnLogo className="nav__logo" />
        </Link>
        <div className="nav__links-container">
          <Link className="nav__link" to="/shops">
            SHOP
          </Link>
          <Link className="nav__link" to="/shops">
            CONTACT
          </Link>
          <Link className="nav__link" to="/shops">
            SIGN IN
          </Link>
          <Link className="nav__link" to="/shops">
            CART
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
