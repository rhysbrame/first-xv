import React, { Fragment } from "react";

const Player = props => {
  const player = undefined;
  if (!player) {
    return <div>Sorry, but the player was not found</div>;
  }

  return (
    <Fragment>
      <div className="player-container">
        <div className="player-picture-item" />
        <ul className="player-stats-item">
          <li>{player.name}</li>
          <li>{player.age}</li>
          <li>
            {player.positions.map((position, index) => {
              return <div key={index}>{position}</div>;
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
