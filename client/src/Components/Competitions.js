import React from "react";
import "./Competition.css";

var today = new Date();
today.setHours(0, 0, 0, 0);

const Competitions = props => {
  const activeCompetitions = [];

  const competitions = props.competitions;
  competitions.forEach(function(comp) {
    if (new Date(comp.end_date) > today) activeCompetitions.push(comp);
  });

  return (
    <ul className="competition-container">
      {activeCompetitions.map(competition => (
        <li className="competition-item">
          <form
            className="competition-content"
            action="/tournament"
            method="get"
            key={competition.tournament_id}
          >
            <div>
              <h3 htmlFor="id">{competition.competition.name}</h3>
              <input
                type="submit"
                name="id"
                id="tournamentId"
                value={competition.id.match(/\d+/g)}
              />
              <p>{competition.year}</p>
            </div>
          </form>
        </li>
      ))}
    </ul>
  );
};

export default Competitions;
