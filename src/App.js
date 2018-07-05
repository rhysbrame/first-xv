import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";

import Home from "./components/Home";
import Player from "./components/Player";
import First from "./components/First";

import "./App.css";
import logo from "./logo.svg";
import picture from "./dai.jpg";

const NavBar = () => (
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

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to First XV</h1>
      <NavBar className="nav-bar" />
    </header>
    <main>
      <p className="App-intro">
        To get started, select the form of the players and let us show you your
        first XV.
      </p>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/player" component={Player} />
        <Route path="/first" component={First} />
      </Switch>
      <div>
        {/* <Player
        picture={picture}
        name="Dai Morris"
        age="34"
        positions={["fullback", "center"]}
      /> */}
        {/* <First /> */}
      </div>
    </main>
  </div>
);

export default App;
