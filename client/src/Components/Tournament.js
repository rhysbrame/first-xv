import React, { Fragment } from "react";

const Tournament = props => {
  if (props.tournament.standings.length === 0) {
    return <h3>Sorry, but the tournament was not found</h3>;
  }
  const tournament = props.tournament;
  console.log("****t***", tournament);

  return (
    <Fragment>
      <h2>Tournament</h2>
      <h3>
        {tournament.standings[0].groups.map(group => {
          console.log("****group***", group);
          return (
            <div key={group.id}>
              <h1>{group.name}</h1>
              <ul>
                {group.team_standings.map(team => {
                  return (
                    <form action="/team" method="get" key={team.team.id}>
                      <li>{team.team.name}</li>
                      <div>
                        <label htmlFor="id">{team.team.id}</label>
                        <input
                          type="submit"
                          name="id"
                          id="teamId"
                          value={team.team.id.match(/\d+/g)}
                        />
                      </div>
                    </form>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </h3>
    </Fragment>
  );
};
export default Tournament;
