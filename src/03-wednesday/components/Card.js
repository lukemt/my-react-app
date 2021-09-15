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

  return (
    <section className="Card">
      <img src={imgUrl} alt="" />
      <div>
        {characterName === "Harry Potter" ? "⚡" : ""} {characterName}
      </div>
      <div className={color}>House: {house}</div>
      <button onClick={() => handleDetailsButtonClick()}>Details</button>
      {showDetails ? <div>DETAILS</div> : <div></div>}
    </section>
  );
}

export default Card;
