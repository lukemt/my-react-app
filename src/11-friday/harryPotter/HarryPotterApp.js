import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { getEmoji } from "./helpers";
import styled from "styled-components";

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
function HarryPotterApp() {
  const [data, setData] = useState([]);

  // nur einmal ausführen:
  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters")
      .then((response) => response.json())
      .then((dataFromServer) => {
        console.log(dataFromServer);
        setData(dataFromServer);
      });

    // cleanup function
    return () => {
      console.log("cleanup triggered");
    };
  }, []);

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
    if (newActiveHouse === activeHouse) {
      newActiveHouse = "All";
    }
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
  const [emojiData, setEmojiData] = useState(() => {
    if (localStorage.getItem("emojiDataLocalStorage")) {
      return JSON.parse(localStorage.getItem("emojiDataLocalStorage"));
    } else {
      return [];
    }
  });

  // removable emoji
  function handleEmojiButtonClick(newEmoji, characterName) {
    const oldEmoji = getEmoji(characterName, emojiData);
    const filteredEmojiData = emojiData.filter((item) => {
      if (item.name === characterName) {
        return false;
      } else {
        return true;
      }
    });
    const newEmojiData =
      oldEmoji === newEmoji
        ? filteredEmojiData
        : [...filteredEmojiData, { name: characterName, emoji: newEmoji }];
    setEmojiData(newEmojiData);
    localStorage.setItem("emojiDataLocalStorage", JSON.stringify(newEmojiData));
  }

  // Favorite
  const [favorites, setFavorite] = useState(() => {
    // Set default value
    if (localStorage.getItem("favoritesLocalStorage")) {
      return JSON.parse(localStorage.getItem("favoritesLocalStorage"));
    } else {
      return [];
    }
  });
  function handleFavoriteButtonClick(characterName) {
    const isFavorite = favorites.includes(characterName);

    // Option 1
    let newFavorites;
    if (isFavorite) {
      // Remove from favorites
      newFavorites = favorites.filter((item) => {
        if (item === characterName) {
          return false;
        } else {
          return true;
        }
      });
    } else {
      // Add to favorites
      newFavorites = favorites.concat(characterName);
    }

    // Option 2
    // const newFavorites = isFavorite
    //   ? favorites.filter((item) => {
    //       if (item === characterName) {
    //         return false;
    //       } else {
    //         return true;
    //       }
    //     })
    //   : favorites.concat(characterName);

    // Option X: Other solutions are possible

    setFavorite(newFavorites);
    localStorage.setItem("favoritesLocalStorage", JSON.stringify(newFavorites));
  }

  return (
    <StyledContainerDiv>
      <Header title="Harry Potter App" />
      <StyledMain>
        {data.length === 0 ? <div>loading...</div> : null}
        {shownData.map((character) => (
          <Card
            characterName={character.name}
            house={character.house}
            imgUrl={character.image}
            key={character.name}
            onEmojiButtonClick={handleEmojiButtonClick}
            emoji={getEmoji(character.name, emojiData)}
            onFavoriteButtonClick={handleFavoriteButtonClick}
            isFavorite={favorites.indexOf(character.name) > -1}
          />
        ))}
      </StyledMain>
      <Footer
        activeHouse={activeHouse}
        onHouseButtonClick={handleHouseButtonClick}
      />
    </StyledContainerDiv>
  );
}

const StyledContainerDiv = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const StyledMain = styled.main`
  margin-bottom: 150px;
`;

export default HarryPotterApp;
