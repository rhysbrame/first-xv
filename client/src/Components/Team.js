import React, { Fragment } from "react";

const Team = props => {
  const team = props.team;

  return (
    <Fragment>
      <h1>Team</h1>
      <h3>{team.competitor.name}</h3>
      {team.players.map(player => {
        return (
          <form action="/player" method="get" key={player.id}>
            <li>{player.name}</li>
            <div>
              <label htmlFor="id">{player.id}</label>
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
    </Fragment>
  );
};

export default Team;
