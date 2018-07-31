import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Player from "./components/Player";
import Team from "./components/Team";
import "./App.css";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to First XV</h1>
          <NavBar className="nav-bar" />
        </header>
        <main>
          <h2>
            To get started, select the form of the players and let us show you
            your first XV.
          </h2>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/team" component={Team} />
            <Route path="/player/:number" component={Player} />
          </Switch>
        </main>
      </div>
    );
  }
}
export default App;
