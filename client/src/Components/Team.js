import React, { Fragment } from "react";
import lifecycle from "react-pure-lifecycle";

const componentDidMount = props => {
  const page = document.body;
  page.style.setProperty("--team-color", `#${props.team.jerseys[0].base}`);
  page.style.setProperty(
    "--team-second-color",
    `#${props.team.jerseys[0].sleeve}`
  );
};

const componentWillUnmount = props => {
  const page = document.body;
  page.style.setProperty("--team-color", null);
  page.style.setProperty("--team-second-color", null);
};

const methods = {
  componentDidMount,
  componentWillUnmount
};

const Team = props => {
  const teamData = props.team;
  console.log("team", teamData.competitor.name);
  console.log("colour", teamData.jerseys[0]);

  return (
    <Fragment>
      <div>
        <h1>Team</h1>
        <h3>{teamData.competitor.name}</h3>
        {teamData.players.map(player => {
          return (
            <form action="/player" method="get" key={player.id}>
              <div>
                <label htmlFor="id">{player.name}</label>
                ---------
                <input
                  type="submit"
                  name="id"
                  id="playerId"
                  value={player.id.match(/\d+/g)}
                />
              </div>
            </form>
          );
        })}
      </div>
    </Fragment>
  );
};

export default lifecycle(methods)(Team);
