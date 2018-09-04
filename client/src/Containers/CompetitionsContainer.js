import React, { Component } from "react";
import Competitions from "../Components/Competitions";

class CompetitionsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      competitions: []
    };
  }

  componentDidMount() {
    fetch("/competitions")
      .then(res => res.json())
      .then(data => {
        this.setState({ competitions: data.data.seasons });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return <Competitions competitions={this.state.competitions} />;
  }
}
export default CompetitionsContainer;
