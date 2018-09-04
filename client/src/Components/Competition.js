import React from "react";

const Competition = props => {
  const competition = props.competitions;
  return (
    <ul>
      {competition.map(comp => (
        <form action="/competitions" method="get">
          <li key={comp.id}>
            <h3>{comp.name}</h3>
            <div>{comp.tournament_id}</div>
            <div>{comp.start_date}</div>
          </li>
          <input type="submit" name="tournament_id" value={comp.tournament_id}/>
        </form>
      ))}
    </ul>
  );
};

export default Competition;
