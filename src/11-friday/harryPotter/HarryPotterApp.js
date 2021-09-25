import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import getEmoji from "./utils/getEmojji";
import styled from "styled-components";
import { useActiveHouse } from "./hooks/useActiveHouse";
import useEmoji from "./hooks/useEmoji";
import useFavorite from "./hooks/useFavorite";
import useData from "./hooks/useData";

function HarryPotterApp() {
  const { activeHouse, handleHouseButtonClick } = useActiveHouse();
  const { emojiData, handleEmojiButtonClick } = useEmoji();
  const { favorites, handleFavoriteButtonClick } = useFavorite();

  const { data } = useData();

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
            isFavorite={favorites.includes(character.name)}
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
