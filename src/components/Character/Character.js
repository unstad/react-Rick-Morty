// Write a function component
// Simply display a character in the form of a card: https://www.w3schools.com/howto/howto_css_cards.asp
// Style the card however you like.

import React from "react";
import { Link } from "react-router-dom";

import styles from "./Character.module.css";

function Character(props) {
  //   console.log(props.passedCharacter);

  return (
    <div className={styles.card}>
      <Link
        to={`/Character/${props.passedCharacter.id}`}
        key={props.passedCharacter.id}
        className="no-link"
      >
        <p className={styles.header}>{props.passedCharacter.name}</p>
        <div className={styles.imgCharacter}>
          <img
            src={`${props.passedCharacter.image}`}
            alt=""
            className="mtg-card"
          />
        </div>
      </Link>
    </div>
  );
}

export default Character;
