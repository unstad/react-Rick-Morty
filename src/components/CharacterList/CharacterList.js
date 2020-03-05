import React from "react";
// Import the CSS file as a module.
import styles from "./CharacterList.module.css";
import Character from "../Character/Character";

// Constant To store API url.
const API_URL = "https://rickandmortyapi.com/api/character/";

class CharacterList extends React.Component {
  // Initialize the State in Class Component.
  constructor() {
    super();
    this.state = {
      characters: [],
      items: []
    };
  }
  // state = {
  //   characters: [],
  //   items: []
  // };

  // Use ASYNC/AWAIT inside lifecycle method.
  async componentDidMount() {
    try {
      const response = await fetch(API_URL)
        .then(resp => {
          return resp.json();
        })
        .then(data => {
          return data.results;
        })
        .then(data => {
          this.setState({ characters: data });
          console.log(this.state.characters);
        });
      this.setState({
        items: this.state.characters
      });
    } catch (e) {
      console.error(e);
    }
  }

  filterCharacters = event => {
    console.log(event.target.value.toLowerCase());
    let items = this.state.characters;
    items = items.filter(item => {
      return (
        item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ items: items });
    console.log(this.state.items);
  };

  // Required render() method in Class Component.
  render() {
    // Render MUST return valid JSX.
    return (
      <div className={styles.CharacterList}>
        <h1>Rick &amp; Morty </h1>
        <div>
          <form className={styles.searchbarContainer}>
            <input
              type="text"
              placeholder="Find character"
              className={styles.searchbar}
              onChange={this.filterCharacters}
            />
          </form>
          <div className={styles.CharacterWrapper}>
            {this.state.items.map(char => (
              <Character passedCharacter={char} key={char.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterList;
