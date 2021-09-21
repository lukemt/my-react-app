import { useState } from "react";
import styled from "styled-components";
import "./Card.css";
import EmojiBar from "./EmojiBar";

function tellColorName(house) {
  let color;
  if (house === "Gryffindor") {
    color = "card__house--red";
  } else if (house === "Hufflepuff") {
    color = "card__house--yellow";
  } else if (house === "Ravenclaw") {
    color = "card__house--blue";
  } else if (house === "Slytherin") {
    color = "card__house--green";
  } else {
    color = "card__house--white";
  }
  return color;
}

function Card({
  characterName,
  house,
  imgUrl,
  emoji,
  isFavorite,
  onEmojiButtonClick,
  onFavoriteButtonClick,
}) {
  const colorClassName = tellColorName(house);

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
        {/* <div className={colorClassName}>House: {house}</div> */}
        <StyledHouseDiv house={house}>House: {house}</StyledHouseDiv>
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

// Example with ternary expression
const StyledHouseDiv1 = styled.div`
  color: ${({ house }) => (house === "Gryffindor" ? "red" : "blue")};
`;

// Example with return
const StyledHouseDiv2 = styled.div`
  color: ${({ house }) => {
    return house === "Gryffindor" ? "red" : "blue";
  }};
`;

// Another example with return
const StyledHouseDiv3 = styled.div`
  color: ${({ house }) => {
    if (house === "Gryffindor") {
      return "red";
    } else {
      return "blue";
    }
  }};
`;

// Example with all houses
const StyledHouseDiv4 = styled.div`
  color: ${({ house }) => {
    if (house === "Gryffindor") {
      return "red";
    } else if (house === "Hufflepuff") {
      return "yellow";
    } else if (house === "Ravenclaw") {
      return "blue";
    } else if (house === "Slytherin") {
      return "green";
    } else {
      return "white";
    }
  }};
`;

function getColor({ house }) {
  if (house === "Gryffindor") {
    return "red";
  } else if (house === "Hufflepuff") {
    return "yellow";
  } else if (house === "Ravenclaw") {
    return "blue";
  } else if (house === "Slytherin") {
    return "green";
  } else {
    return "white";
  }
}

// Example with seperate function
const StyledHouseDiv = styled.div`
  color: ${getColor};
`;

export default Card;
