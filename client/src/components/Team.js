import React, { Component } from "react";

class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teamName: ""
    };
    console.log("*******1****", this.state);
  }

  componentDidMount() {
    fetch("/team")
      .then(res => res.json())

      .then(data => {
        console.log("***********", data.data.competitor.name);
        this.setState({ teamName: data.data.competitor.name });
      })
      .catch(err => {
        console.log(err);
      });
    console.log("*******2teamname****", this.state);
  }

  render() {
    console.log("*******3****", this.state);
    return (
      <div>
        <h1>Team</h1>
        <h2>{this.state.teamName}</h2>
      </div>
    );
  }
}
export default Team;
