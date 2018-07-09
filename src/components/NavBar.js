import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <span>---</span>
      <NavLink className="nav-link" to="/player">
        Player
      </NavLink>
      <span>---</span>
      <NavLink className="nav-link" to="/first">
        First Link
      </NavLink>
    </div>
  );
}
