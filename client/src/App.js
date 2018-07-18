import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Player from "./components/Player";
import FirstTeam from "./components/FirstTeam";
import Roster from "./components/Roster";
import "./App.css";
import logo from "./logo.svg";

class App extends Component {
  state = {
    response: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to First XV</h1>
          <NavBar className="nav-bar" />
        </header>
        <main>
          <h1 className="App-intro">{this.state.response}</h1>
          <h2>
            To get started, select the form of the players and let us show you
            your first XV.
          </h2>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/player" component={FirstTeam} />
            <Route path="/player/:number" component={Player} />
            <Route path="/roster" component={Roster} />
            <Route path="/firstteam" component={FirstTeam} />
          </Switch>
        </main>
      </div>
    );
  }
}
export default App;
