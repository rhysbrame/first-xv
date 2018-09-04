import React, { Fragment } from "react";

const Tounament = props => {
  const tournament = props.tournament;
  return (
    <Fragment>
      <h1>Tournament</h1>
      <h3>{tournament.standings[0].groups[0].name}</h3>
      <ul>
        {tournament.standings[0].groups[0].team_standings.map(team => {
          return (
            <div key={team.team.id}>
              <li>{team.team.name}</li>
            </div>
          );
        })}
      </ul>
    </Fragment>
  );
};
export default Tounament;
