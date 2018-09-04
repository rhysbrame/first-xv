import React from "react";

const Competitions = props => {
  const competitions = props.competitions;
  console.log("**********", competitions);
  return <ul>
      {competitions.map(competition => (
        <form action="/competitions" method="get" key={competition.tournament_id}>
          <li>
            <h3>{competition.name}</h3>
            <div>{competition.start_date}</div>
          </li>
          <input
            type="submit"
            name="tournament_id"
            value={competition.tournament_id}
          />
        </form>
      ))}
    </ul>;
};

export default Competitions;
