/*
Idee: 
* wenn /character/ aufgerufen wird dann CharacterApp-Komponente Rendern, 
* wenn /harrypotter/ aufgerufen wird dann HarryPotterApp-Komponente Rendern, 
*/

import { Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import CharacterApp from "./charactersApp/CharactersApp";
import HarryPotterApp from "./harryPotter/HarryPotterApp";

function Apps({ harryPotterData }) {
  return (
    <Switch>
      <Route exact path="/">
        Hier ist die Startseite
        <StyledLink to="/characters">Characters App</StyledLink>
        <StyledLink to="/harrypotter">Harry Potter App</StyledLink>
      </Route>
      <Route path="/characters">
        <CharacterApp />
      </Route>
      <Route path="/harrypotter">
        <HarryPotterApp data={harryPotterData} />
      </Route>
      <Route>404 NOT FOUND</Route>
    </Switch>
  );
}

const StyledLink = styled(Link)`
  display: inline-block;
  background-color: lightgray;
  padding: 5px;
  text-decoration: none;
  border-radius: 3px;
  color: black;
  margin: 3px;
`;

export default Apps;
