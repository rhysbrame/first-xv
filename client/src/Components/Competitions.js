import React from "react";

var today = new Date();
today.setHours(0, 0, 0, 0);

const Competitions = props => {
  const activeCompetitions = [];

  const competitions = props.competitions;
  competitions.forEach(function(comp) {
    // console.log("comp", comp.end_date);
    // console.log("compNew", new Date(comp.end_date));
    // console.log("today", today);
    if (new Date(comp.end_date) > today) activeCompetitions.push(comp);
  });

  return (
    <ul>
      {activeCompetitions.map(competition => (
        <form action="/tournament" method="get" key={competition.tournament_id}>
          <li>
            <div>
              <label htmlFor="id">
                {competition.end_date}
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
