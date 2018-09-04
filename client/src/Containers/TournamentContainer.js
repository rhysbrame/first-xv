import React, { Component } from "react";
import Tournament from "../Components/Tournament";

class TournamentContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tournament: {},
      loading: true
    };
  }

  componentDidMount() {
    fetch("/tournament")
      .then(res => res.json())
      .then(data => {
        this.setState({ tournament: data.data, loading: false });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (!this.state.loading)
      return <Tournament tournament={this.state.tournament} />;
    else return null;
  }
}
export default TournamentContainer;
