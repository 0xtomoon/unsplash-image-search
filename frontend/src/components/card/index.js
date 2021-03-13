import React from "react";
import styles from "./style.scss";

export default function Card(props) {
  const { cardData, pin } = props;

  return (
    <div className="card">
      <img
        className="card-image"
        alt={cardData.alt_description}
        src={cardData.urls.full}
      ></img>
      <button className="pin-btn" onClick={() => props.onClick(cardData.id)}>
        {(()=> {
          if(pin) {
            return 'Unpin';
          } else {
            return 'Pin';
          }
        })()}
      </button>
    </div>
  );
}
