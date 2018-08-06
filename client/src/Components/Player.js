import React, { Fragment } from "react";

const Player = props => {
  const playerData = props.player;
  return (
    <Fragment>
      <h1>Player</h1>
      <div className="player-container">
        <div className="player-picture-item" />
        <ul className="player-stats-item">
          <li>{playerData.player.first_name}</li>
          <li>{playerData.player.last_name}</li>
          <li>{playerData.player.type}</li>
          <li>{playerData.player.date_of_birth}</li>
          <li>{playerData.player.nationality}</li>
          <li>
            {playerData.roles.map(role => {
              return (
                <div key={role.competitor.id}>
                  <ul>{role.competitor.name}</ul>
                </div>
              );
            })}
          </li>
        </ul>
      </div>
      <form className="form-container">
        <select className="performance-selector-item">
          <option value="awful">Awful</option>
          <option value="poor">Poor</option>
          <option value="average">Average</option>
          <option value="good">Good</option>
          <option value="great">Great</option>
        </select>
        <br />
        <input className="performance-submit-item" type="submit" />
      </form>
    </Fragment>
  );
};

export default Player;
