import { useState } from "react";
import CreateCharacterForm from "./CreateCharacterForm";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import Card from "./Card";
import PersonRoute from "./PersonRoute";

const INITIAL_DATA = [
  {
    id: 1,
    name: "Harry",
    house: "Gryffindor",
  },
  {
    id: 2,
    name: "Hermione",
    house: "Gryffindor",
  },
];

function CharacterApp() {
  const [data, setData] = useState(INITIAL_DATA);

  return (
    <StyledMain className="app">
      <Route exact path={["/characters/new", "/characters"]}>
        <CreateCharacterForm onCreateCharacter={handleCreateCharacter} />
      </Route>

      <Route exact path={["/characters/list", "/characters"]}>
        {data.map((character) => (
          <Card
            key={character.name}
            name={character.name}
            house={character.house}
          />
        ))}
      </Route>

      <Route exact path={["/characters/person/:nameInUrl"]}>
        <PersonRoute data={data} />
      </Route>

      <StyledLink to="/characters/">Home</StyledLink>
      <StyledLink to="/characters/new">New</StyledLink>
      <StyledLink to="/characters/list">List</StyledLink>
    </StyledMain>
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

const StyledMain = styled.main`
  max-width: 600px;
  margin: 0 auto;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  background-color: lightgray;
  padding: 5px;
  text-decoration: none;
  border-radius: 3px;
  color: black;
  margin: 3px;
  &:hover {
    background-color: red;
  }
`;
export default CharacterApp;
