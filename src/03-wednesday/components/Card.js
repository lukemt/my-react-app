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

function Card({ characterName, house, imgUrl }) {
  const colorClassName = tellColorName(house);

  // const showDetails = false;
  const [showDetails, setShowDetails] = useState(false);

  //
  const handleDetailsButtonClick = () => {
    alert("button was clicked!!!");
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

  const [emoji, setEmoji] = useState("");

  // Option 1: Arrow function definition
  // const handleEmojiButtonClick = (newEmoji) => {
  //   setEmoji(newEmoji);
  // };

  // Option 2: simple function definition
  // function handleEmojiButtonClick(newEmoji) {
  //   setEmoji(newEmoji);
  // }

  // removable emoji
  function handleEmojiButtonClick(newEmoji) {
    if (emoji === newEmoji) {
      setEmoji("");
    } else {
      setEmoji(newEmoji);
    }
  }

  return (
    <section className="card">
      <EmojiBar handleEmojiButtonClick={handleEmojiButtonClick} />

      <h2>
        {emoji}
        {characterName === "Harry Potter" ? "⚡" : ""}
        {characterName}
      </h2>
      <img src={imgUrl} alt="" />
      <div className={colorClassName}>House: {house}</div>
      <button onClick={() => handleDetailsButtonClick()}>Details</button>
      {showDetails ? <div>DETAILS</div> : <div></div>}
    </section>
  );
}

export default Card;
