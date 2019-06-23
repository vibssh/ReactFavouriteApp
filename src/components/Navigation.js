import React from "react";
import { NavLink } from "react-router-dom";
import Counter from "./Counter";

const Navigation = ({ store }) => {
  return (
    <nav>
      <div className="container">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/favourites" activeClassName="active">
              <span>Favourites</span>
              <Counter store={store} />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
