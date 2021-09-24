import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import getEmoji from "./utils/getEmojji";
import styled from "styled-components";
import { useActiveHouse } from "./hooks/useActiveHouse";
import useEmoji from "./hooks/useEmoji";
import useFavorite from "./hooks/useFavorite";

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

  const { activeHouse, handleHouseButtonClick } = useActiveHouse();
  const { emojiData, handleEmojiButtonClick } = useEmoji();
  const { favorites, handleFavoriteButtonClick } = useFavorite();

  let shownData;
  if (activeHouse === "all") {
    shownData = data;
  } else {
    shownData = data.filter((character) => character.house === activeHouse);
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
