import { useState } from "react";
import styled, { css } from "styled-components";
import EmojiBar from "./EmojiBar";
import getHouseColor from "./utils/getHouseColor";

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

  return (
    <StyledSection isFavorite={isFavorite}>
      <StyledImg src={imgUrl} alt="" />
      <StyledContentDiv>
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
      </StyledContentDiv>
      <EmojiBar
        emojiState={emoji}
        onEmojiButtonClick={onEmojiButtonClick}
        characterName={characterName}
      />
    </StyledSection>
  );

  function handleDetailsButtonClick() {
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
  }
}

const StyledHouseDiv = styled.div`
  color: ${({ color }) => color};
`;

const StyledSection = styled.section`
  border: 0px solid #aaa;
  margin: 15px;
  padding: 15px;
  border-radius: 13px;

  box-shadow: 0px 0px 20px #dedede;
  display: flex;
  ${({ isFavorite }) =>
    isFavorite &&
    css`
      background-color: #fffbe1;
    `}
`;

const StyledImg = styled.img`
  width: 120px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`;

const StyledContentDiv = styled.div`
  flex-grow: 1;
  margin: 0 20px;
`;

export default Card;
