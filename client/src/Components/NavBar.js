import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink className="nav-link" to="/">
        Home-----
      </NavLink>
      <NavLink className="nav-link" to="/competitions">
        Competitions-----
      </NavLink>
      <NavLink className="nav-link" to="/tournament">
        Tournament-----
      </NavLink>
      <NavLink className="nav-link" to="/team">
        Team-----
      </NavLink>
      <NavLink className="nav-link" to="/player">
        Player-----
      </NavLink>
    </div>
  );
}
