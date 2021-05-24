import React from "react";

function Card(props) {
  return (
    <>
      <div id="paraTodos">
        <div className="card border border-info">
          <img src="https://cutt.ly/0b5yz5x" alt="image of place" />

          <div className="card-body text-center">
            <h3 className="card-title">{props.city}</h3>
            <p className="card-text">{props.description}</p>
            <a href={props.url} className="btn btn-outline-info">
              More information
            </a>
          </div>
        </div>

        <div className="card border border-info">
          <img src="https://cutt.ly/Zb5ya9O" alt="place" />

          <div className="card-body text-center">
            <h3 className="card-title">{props.city}</h3>
            <p className="card-text">{props.description}</p>
            <a href={props.url} className="btn btn-outline-info">
              More information
            </a>
          </div>
        </div>

        <div className="card border border-info">
          <img src="https://cutt.ly/lb5yQNg" alt="place" />

          <div className="card-body text-left">
            <h3 className="card-title">{props.city}</h3>
            <p className="card-text">{props.description}</p>
            <a href={props.url} className="btn btn-outline-info">
              More information
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
