import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return <div>
      <NavLink className="nav-link" to="/">
        Home-----
      </NavLink>
      <NavLink className="nav-link" to="/player">
        Player-----
      </NavLink>
      <NavLink className="nav-link" to="/firstteam">
        First Team-----
      </NavLink>
      <NavLink className="nav-link" to="/roster">
        Roster-----
      </NavLink>
    </div>;
}
