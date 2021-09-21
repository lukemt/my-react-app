/*
Idee: 
* wenn /character/ aufgerufen wird dann CharacterApp-Komponente Rendern, 
* wenn /harrypotter/ aufgerufen wird dann HarryPotterApp-Komponente Rendern, 
*/

import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import CharacterApp from "./characterApp/CharacterApp";
import HarryPotterApp from "./harryPotter/HarryPotterApp";

function App({ harryPotterData }) {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/character">
            <CharacterApp />
          </Route>
          <Route exact path="/harrypotter">
            <HarryPotterApp data={harryPotterData} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
