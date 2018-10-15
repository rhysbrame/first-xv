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
    const API = "/tournament/";
    const query = this.props.location.search.match(/\d+/g);
    const q = query[0];
    const call = API + q;

    fetch(call)
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
