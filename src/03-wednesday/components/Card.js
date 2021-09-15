import { useState } from "react";
import "./Card.css";

function tellColorName(house) {
  let color;
  if (house === "Gryffindor") {
    color = "red";
  } else if (house === "Hufflepuff") {
    color = "yellow";
  } else if (house === "Ravenclaw") {
    color = "blue";
  } else if (house === "Slytherin") {
    color = "green";
  } else {
    color = "white";
  }
  return color;
}

function Card({ characterName, house, imgUrl }) {
  const color = tellColorName(house);

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
    <section className="Card">
      <div className="CardEmojiBar">
        <button onClick={() => handleEmojiButtonClick("🦩")}> 🦩 </button>
        <button onClick={() => handleEmojiButtonClick("🦸‍♂️")}> 🦸‍♂️ </button>
        <button onClick={() => handleEmojiButtonClick("🦸‍♀️")}> 🦸‍♀️ </button>
        <button onClick={() => handleEmojiButtonClick("🦹‍♂️")}> 🦹‍♂️ </button>
      </div>
      <img src={imgUrl} alt="" />
      <div>
        {emoji}
        {characterName === "Harry Potter" ? "⚡" : ""}
        {characterName}
      </div>
      <div className={color}>House: {house}</div>
      <button onClick={() => handleDetailsButtonClick()}>Details</button>
      {showDetails ? <div>DETAILS</div> : <div></div>}
    </section>
  );
}

export default Card;
