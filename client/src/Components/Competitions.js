import React from "react";

const Competitions = props => {
  const competitions = props.competitions;
  return (
    <ul>
      {competitions.map(competition => (
        <form action="/tournament" method="get" key={competition.tournament_id}>
          <li>
            <div>
              <label htmlFor="id">
                {competition.start_date}
                -------
                {competition.name}
              </label>
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
