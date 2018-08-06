import React, { Component } from "react";
import Player from "../Components/Player";

class PlayerContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: {},
      loading: true
    };
  }

  componentDidMount() {
    fetch("/player_profile")
      .then(res => res.json())
      .then(data => {
        this.setState({ player: data.data, loading: false });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    if (!this.state.loading) return <Player player={this.state.player} />;
    else return null;
  }
}
export default PlayerContainer;
