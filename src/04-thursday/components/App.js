import "./App.css";
import Header from "./Header";
import Card from "./Card";
import data from "../data.json";
import Footer from "./Footer";
import { useState } from "react";

/*
[
  {
    "name": "Harry Potter",
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "31-07-1980",
    "yearOfBirth": 1980,
    "ancestry": "half-blood",
    "eyeColour": "green",
    "hairColour": "black",
    "wand": { "wood": "holly", "core": "phoenix feather", "length": 11 },
    "patronus": "stag",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Daniel Radcliffe",
    "alive": true,
    "image": "http://hp-api.herokuapp.com/images/harry.jpg"
  },
]
*/
function App() {
  const [activeHouse, setActiveHouse] = useState("");

  function handleHouseButtonClick(house) {
    setActiveHouse(house);
  }

  return (
    <div className="app">
      <Header title="Harry Potter App" />
      {data.map((character) => (
        <Card
          characterName={character.name}
          house={character.house}
          imgUrl={character.image}
          key={character.name}
        />
      ))}
      <Footer
        activeHouse={activeHouse}
        onHouseButtonClick={handleHouseButtonClick}
      />
    </div>
  );
}

export default App;
