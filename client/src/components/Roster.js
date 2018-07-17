import React from "react";
// import { Route, Switch } from "react-router-dom";
// import Player from "./Player";

export default class Roster extends React.Component {
  state = {
    players: []
  };

  fetchFirst() {
    fetch(
      "https://api.sportradar.us/rugby/trial/v2/union/en/teams/sr:competitor:4205/profile.json?api_key=czvunrws6gmkaa5veyk4qchk",
      {
        credentials: "include",
        mode: "no-cors"
      }
    ).then(function(response) {
      console.log("********", response)
      return response.schema;
    });
  }

  componentWillMount() {
    this.fetchFirst();
  }

  render() {
    return (
      <div>
        <h2>This is a roster page!</h2>
        {/* <Switch>
          <Route exact path="/roster" component={Roster} />
          <Route path="/roster/:number" component={Player} />
        </Switch> */}
      </div>
    );
  }
}
