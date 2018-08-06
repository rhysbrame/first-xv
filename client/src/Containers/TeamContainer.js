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
    fetch("/team_profile")
      .then(res => res.json())
      .then(data => {
        console.log('**************',data)
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
