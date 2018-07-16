import React from "react";
import { Route, Switch } from "react-router-dom";
import Player from "./Player";
import Home from "./Home";

const Roster = () => (
  <div>
    <h2>This is a roster page!</h2>
    <Switch>
      <Route exact path="/roster" component={Home} />
      <Route path="/roster/:number" component={Player} />
    </Switch>
  </div>
);

export default Roster;
