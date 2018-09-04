import React from "react";

const Competitions = props => {
  const competitions = props.competitions;
  console.log("**********", competitions);
  return (
    <ul>
      {competitions.map(competition => (
        <form action="/tournament" method="get" key={competition.tournament_id}>
          <li>
            <h3>{competition.name}</h3>
            <div>{competition.start_date}</div>
          </li>
          <input type="submit" />
        </form>
      ))}
    </ul>
  );
};

export default Competitions;
