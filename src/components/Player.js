import React from "react";
import { Fragment } from "react";

export default function Player({
  name,
  picture
  // positions: [fullback, center]
}) {
  return (
    <Fragment>
      <div className="player-container">
        <div className="player-picture-item">
          <img src={picture} alt="dai" />
        </div>
        <ul className="player-stats-item">
          <li>{name}</li>
          {/* <li>
            {positions.map(position => {
              return <li>{position}</li>;
            })}
          </li> */}
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
}

// <Player
//   picture={picture}
//   name="Dai Morris"
//   age="34"
//   positions={["fullback", "center"]}
// />;
