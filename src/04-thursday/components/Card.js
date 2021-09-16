import { useState } from "react";
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

function Card({ characterName, house, imgUrl, onEmojiButtonClick, emoji }) {
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
    <section className="card">
      <img src={imgUrl} alt="" />
      <div className={"card__content"}>
        <h2>
          {emoji}
          {characterName === "Harry Potter" ? "⚡" : ""} {characterName}
        </h2>
        <div className={colorClassName}>House: {house}</div>
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

export default Card;
