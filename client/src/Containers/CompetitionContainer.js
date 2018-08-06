import React, { Component } from "react";
import Competition from "../Components/Competition";

class CompetitionContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      competitions: []
    };
  }

  componentDidMount() {
    fetch("/season")
      .then(res => res.json())
      .then(data => {
        this.setState({ competitions: data.data.seasons });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return <Competition competitions={this.state.competitions} />;
  }
}
export default CompetitionContainer;
