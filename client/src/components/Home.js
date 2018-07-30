import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teamName: ""
    };
  }

  componentDidMount() {
    fetch("/")
      .then(res => res.json())
      .then(data => {
        this.setState({ teamName: data.data.competitor.name });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <div>{this.teamName}</div>
      </div>
    );
  }
}
export default Home;
