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
    const API = "/player_profile/";
    const query = this.props.location.search.match(/\d+/g);
    const q = query[0];
    const call = API + q;

    fetch(call)
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
