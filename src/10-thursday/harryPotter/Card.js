import { useState } from "react";
import styled from "styled-components";
import "./Card.css";
import EmojiBar from "./EmojiBar";
import { getHouseColor } from "./utils/getHouseColor";

function Card({
  characterName,
  house,
  imgUrl,
  emoji,
  isFavorite,
  onEmojiButtonClick,
  onFavoriteButtonClick,
}) {
  // const showDetails = false;
  const [showDetails, setShowDetails] = useState(false);

  //
  const handleDetailsButtonClick = () => {
    // Option 1:
    // setShowDetails(!showDetails);

    // Option 2:
    // if (showDetails) {
    //   setShowDetails(false);
    // } else {
    //   setShowDetails(true);
    // }

    // Option 3:
    const newShowDetails = showDetails ? false : true;
    setShowDetails(newShowDetails);
  };

  return (
    <section className={"card" + (isFavorite ? " card--favorite" : "")}>
      <img src={imgUrl} alt="" />
      <div className={"card__content"}>
        <button onClick={() => onFavoriteButtonClick(characterName)}>
          Like
        </button>
        <h2>
          {emoji}
          {characterName === "Harry Potter" ? "⚡" : ""} {characterName}
        </h2>
        <StyledHouseDiv color={getHouseColor(house)}>
          House: {house}
        </StyledHouseDiv>
        <button onClick={() => handleDetailsButtonClick()}>
          Show {showDetails ? "Less" : "More"}
        </button>
        {showDetails ? <div>DETAILS</div> : <div></div>}
      </div>
      <EmojiBar
        emojiState={emoji}
        onEmojiButtonClick={onEmojiButtonClick}
        characterName={characterName}
      />
    </section>
  );
}

const StyledHouseDiv = styled.div`
  color: ${({ color }) => color};
`;

export default Card;
