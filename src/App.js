import React from "react";
import "./App.css";
import CharacterList from "./components/CharacterList/CharacterList";

//imports components
// import Character from "./components/Character/Character";
import CharacterDetails from "./components/CharacterDetails/CharacterDetails";

//import router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Character/:id" component={CharacterDetails} />
          <Route path="/" exact component={CharacterList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
