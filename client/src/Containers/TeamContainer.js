import React, { Component } from "react";
import Team from "../Components/Team";

class TeamContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      team: {},
      loading: true
    };
  }

  componentDidMount() {
    const API = "/team_profile/";
    const query = this.props.location.search.match(/\d+/g);
    const q = query[0];
    const call = API + q;

    fetch(call)
      .then(res => res.json())
      .then(data => {
        this.setState({ team: data.data, loading: false });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (!this.state.loading) return <Team team={this.state.team} />;
    else return null;
  }
}
export default TeamContainer;
