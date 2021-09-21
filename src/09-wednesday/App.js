/*
Idee: 
* wenn /character/ aufgerufen wird dann CharacterApp-Komponente Rendern, 
* wenn /harrypotter/ aufgerufen wird dann HarryPotterApp-Komponente Rendern, 
*/

import { Route, Switch } from "react-router";
import CharacterApp from "./charactersApp/CharactersApp";
import HarryPotterApp from "./harryPotter/HarryPotterApp";

function App({ harryPotterData }) {
  return (
    <>
      <Switch>
        <Route path="/characters">
          <CharacterApp />
        </Route>
        <Route path="/harrypotter">
          <HarryPotterApp data={harryPotterData} />
        </Route>
        <Route>Bitte eine Route auswählen</Route>
      </Switch>
    </>
  );
}

export default App;
