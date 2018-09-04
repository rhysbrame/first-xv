import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./Components/NavBar";

import Home from "./Containers/Home";
import PlayerContainer from "./Containers/PlayerContainer";
import TeamContainer from "./Containers/TeamContainer";
import CompetitionContainer from "./Containers/CompetitionContainer";

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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/team" component={TeamContainer} />
            <Route exact path="/player" component={PlayerContainer} />
            <Route
              exact
              path="/competitions"
              component={CompetitionContainer}
            />
          </Switch>
        </main>
      </div>
    );
  }
}
export default App;
