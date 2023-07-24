import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    return route == location.pathname ? "#2c2c2c" : "#8f8f8f";
  };

  const pathMatchRouteText = (route) => {
    return route == location.pathname ? "navbarListItemNameActive" : "navbarListItemName";
  };

  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <ExploreIcon fill={pathMatchRoute("/")} width="36px" height="36px" />
            <p className={pathMatchRouteText("/")}>Explore</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/offers")}>
            <OfferIcon fill={pathMatchRoute("/offers")} width="36px" height="36px" />
            <p className={pathMatchRouteText("/offers")}>Offer</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/profile")}>
            <PersonOutlineIcon fill={pathMatchRoute("/profile")} width="36px" height="36px" />
            <p className={pathMatchRouteText("/profile")}>Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default NavBar;
