import React, { Fragment } from "react";
import api from "../PlayerAPI";

const Player = props => {
  const player = api.get(parseInt(props.match.params.number, 10));
  if (!player) {
    return <div>Sorry, but the player was not found</div>;
  }

  return (
    <Fragment>
      <div className="player-container">
        <div className="player-picture-item">
          <img src={require("../ieuan.jpg")} alt="player" />
        </div>
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
