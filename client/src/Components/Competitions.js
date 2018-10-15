import React from "react";

const Competitions = props => {
  const competitions = props.competitions;
  return (
    <ul>
      {competitions.map(competition => (
        <form action="/tournament" method="get" key={competition.tournament_id}>
          <li>
            <h3>{competition.name}</h3>
            <h5>{competition.start_date}</h5>
            <h5>{competition.name}</h5>
            <div>
              <label htmlFor="id">{competition.id}</label>
              <input
                type="submit"
                name="id"
                id="tournamentId"
                value={competition.id.match(/\d+/g)}
              />
            </div>
          </li>
        </form>
      ))}
    </ul>
  );
};

export default Competitions;
