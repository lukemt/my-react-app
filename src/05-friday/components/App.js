import "./App.css";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import { useState } from "react";
import { getEmoji } from "./helpers";

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
function App({ data }) {
  // Option 1
  // const [activeHouse, setActiveHouse] = useState(
  //   localStorage.getItem("activeHouseLocalStorage")
  //     ? JSON.parse(localStorage.getItem("activeHouseLocalStorage"))
  //     : "All"
  // );
  // Option 2
  const [activeHouse, setActiveHouse] = useState(() => {
    if (localStorage.getItem("activeHouseLocalStorage")) {
      return JSON.parse(localStorage.getItem("activeHouseLocalStorage"));
    } else {
      return "All";
    }
  });

  function handleHouseButtonClick(newActiveHouse) {
    setActiveHouse(newActiveHouse);

    // In Local-Storage speichern
    // Option 1
    // localStorage.setItem("activeHouseLocalStorage", JSON.stringify(newActiveHouse));

    // Option 2
    const stringifiedValue = JSON.stringify(newActiveHouse);
    localStorage.setItem("activeHouseLocalStorage", stringifiedValue);
  }

  const filteredData = data.filter((character) => {
    return character.house === activeHouse;
  });

  const shownData = activeHouse === "All" ? data : filteredData;

  // emoji
  /*
emojiData Example data:
  [
    {
      name: "Harry Potter",
      emoji: "🦩"
    },
    {
      name: "Ron Weasley",
      emoji: "🐹"
    },
    ...
  ] 
  */
  const [emojiData, setEmojiData] = useState([]);

  // removable emoji
  function handleEmojiButtonClick(newEmoji, characterName) {
    const filteredEmojiData = emojiData.filter((item) => {
      if (item.name === characterName) {
        return false;
      } else {
        return true;
      }
    });
    const newEmojiData = [
      ...filteredEmojiData,
      { name: characterName, emoji: newEmoji },
    ];
    setEmojiData(newEmojiData);
  }

  return (
    <div className="app">
      <Header title="Harry Potter App" />
      <main>
        {shownData.map((character) => (
          <Card
            characterName={character.name}
            house={character.house}
            imgUrl={character.image}
            key={character.name}
            onEmojiButtonClick={handleEmojiButtonClick}
            emoji={getEmoji(character.name, emojiData)}
          />
        ))}
      </main>
      <Footer
        activeHouse={activeHouse}
        onHouseButtonClick={handleHouseButtonClick}
      />
    </div>
  );
}

export default App;
