import React from "react";
import { Link } from "react-router-dom";

import styles from "./CharacterDetails.module.css";

class CharacterDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      card: {}
    };
  }

  async componentDidMount() {
    try {
      const respone = await await fetch(
        `https://rickandmortyapi.com/api/character/${this.props.match.params.id}`
      )
        .then(resp => {
          return resp.json();
        })
        .then(data => {
          this.setState({ card: data });
          console.log(this.state.card);
        });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    console.log(this.state.card);
    return (
      <div className={styles.container}>
        <img
          className={styles.imgDetails}
          src={this.state.card.image}
          alt=""
        ></img>
        <div className={styles.infoContainer}>
          <h1>{this.state.card.name}</h1>
          <p>Species: {this.state.card.species}</p>
          <p>Gender: {this.state.card.gender}</p>
          <p>Status: {this.state.card.status}</p>
          <br />
          <div className={styles.linkBack}>
            <Link to={"/"}>Back</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterDetails;
