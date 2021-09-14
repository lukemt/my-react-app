import "./CardHarry.css";

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

function CardHarry() {
  const characterName = "Harry Potter";
  const house = "Gryffindor";
  const imgUrl = "";

  const color = tellColorName(house);

  return (
    <section className="CardHarry">
      <img src={imgUrl} />
      <div>{characterName}</div>
      <div className={color}>House: {house}</div>
    </section>
  );
}

export default CardHarry;
