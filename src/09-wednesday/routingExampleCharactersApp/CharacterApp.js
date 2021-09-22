import { useState } from "react";
import CreateCharacterForm from "./CreateCharacterForm";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const INITIAL_DATA = [
  {
    name: "Harry",
    house: "Gryffindor",
  },
  {
    name: "Hermione",
    house: "Gryffindor",
  },
];

function CharacterApp() {
  const [data, setData] = useState(INITIAL_DATA);

  return (
    <Router>
      <StyledMain className="app">
        <Switch>
          <Route path="/new">
            <CreateCharacterForm onCreateCharacter={handleCreateCharacter} />
          </Route>
          <Route path="/characters">
            {data.map((character) => (
              <StyledAppCardDiv key={character.name}>
                {character.name} from {character.house}
              </StyledAppCardDiv>
            ))}
          </Route>
        </Switch>
      </StyledMain>
    </Router>
  );

  function handleCreateCharacter({ name, house }) {
    // Add an entry to data with data from the form
    // const newData = [
    //   ...data,
    //   {
    //     name: "Hermione",
    //     house: "Gryffindor",
    //   },
    // ];
    const newData = [
      ...data,
      {
        name: name,
        house: house,
      },
    ];
    setData(newData);
  }
}

const StyledAppCardDiv = styled.div`
  border: 0px solid #aaa;
  margin: 15px;
  padding: 15px;
  border-radius: 13px;

  box-shadow: 0px 0px 20px #dedede;
  display: flex;
`;

const StyledMain = styled.main`
  max-width: 600px;
  margin: 0 auto;
`;

export default CharacterApp;
