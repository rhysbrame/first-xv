import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Player from "./Components/Player";
import Home from "./Containers/Home";
import Team from "./Containers/Team";
import CompetitionContainer from "./Containers/CompetitionContainer"
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
            <Route exact path="/player" component={Player} />
            <Route path="/player/:number" component={Player} />
            <Route exact path="/competitions" component={CompetitionContainer} />
          </Switch>
        </main>
      </div>
    );
  }
}
export default App;
