import React, { Fragment } from "react";

const Team = props => {
  const team = props.team;
  console.log('***', team)

  return (
    <Fragment>
      <h1>Team</h1>
      <h3>{team.competitor.name}</h3>
      <ul>
        <li>
          {team.players.map(player => {
            return (
              <div key={player.id}>
                <li>{player.name}</li>
              </div>
            );
          })}
        </li>
      </ul>
    </Fragment>
  );
};

export default Team;
