import React from "react";

const Competition = props => {
  const competition = props.competitions;
  return (
    <ul>
      {competition.map(comp => (
        <li key={comp.id}>
          <h3>{comp.name}</h3>
          <div>{comp.tournament_id}</div>
          <div>{comp.start_date}</div>
        </li>
      ))}
    </ul>
  );
};

export default Competition;
