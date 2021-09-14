import "./CardHermione.css";

function hi() {
  return "Hello";
}

function CardHermione() {
  const characterName = "Hermione Granger";
  const house = "Gryffindor";

  /*
  if (house === "Gryffindor") {
     "RED";
  } else {
     "COLORED";
  }
*/

  // Beispiel 1
  let color1;
  if (house === "Gryffindor") {
    color1 = "red";
  } else if (house === "Hufflepuff") {
    color1 = "yellow";
  } else if (house === "Ravenclaw") {
    color1 = "blue";
  } else if (house === "Slytherin") {
    color1 = "green";
  } else {
    color1 = "white";
  }

  // Beispiel 2
  let color2;
  color2 = house === "Gryffindor" ? "RED" : "COLORED";

  // Beispiel 3 (WRONG)
  // let color3
  // color3 = if (house === "Gryffindor") {
  //    "RED";
  // } else {
  //    "COLORED";
  // }

  // Beispiel 4
  let color4;
  color4 =
    house === "Gryffindor"
      ? "red"
      : house === "Hufflepuff"
      ? "yellow"
      : house === "Ravenclaw"
      ? "blue"
      : house === "Slytherin"
      ? "green"
      : "white";

  const tpStr = `blabla ${color4}`;
  const tpStr2 = "blabla " + color4;

  return (
    <section className={color4}>
      <img src="" />
      <div>{characterName}</div>
      <div>Inline Ternary: {house === "Gryffindor" ? "RED" : "COLORED"}</div>
      <div>Color1: {color1}</div>
      <div>Color4: {color4}</div>
    </section>
  );
}

export default CardHermione;
