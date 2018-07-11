import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Player from "./components/Player";
import First from "./components/First";
import "./App.css";
import logo from "./logo.svg";

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
    </main>
  </div>
);

export default App;
