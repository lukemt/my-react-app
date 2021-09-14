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

  return (
    <section className="Card">
      <img src={imgUrl} />
      <div>{characterName}</div>
      <div className={color}>House: {house}</div>
    </section>
  );
}

// Exactly the same, but longer:
// function Card(props) {
//   const color = tellColorName(props.house);

//   return (
//     <section className="Card">
//       <img src={props.imgUrl} />
//       <div>{props.characterName}</div>
//       <div className={color}>House: {props.house}</div>
//     </section>
//   );
// }

export default Card;
