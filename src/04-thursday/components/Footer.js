import { useState } from "react";
import "./Footer.css";

function Footer() {
  const [activeHouse, setActiveHouse] = useState("");

  return (
    <footer>
      <h2>{activeHouse}</h2>
      <button
        className={activeHouse === "Gryffindor" ? "footer__button--active" : ""}
        onClick={() => setActiveHouse("Gryffindor")}
      >
        G
      </button>
      <button
        className={activeHouse === "Hufflepuff" ? "footer__button--active" : ""}
        onClick={() => setActiveHouse("Hufflepuff")}
      >
        H
      </button>
      <button
        className={activeHouse === "Ravenclaw" ? "footer__button--active" : ""}
        onClick={() => setActiveHouse("Ravenclaw")}
      >
        R
      </button>
      <button
        className={activeHouse === "Slytherin" ? "footer__button--active" : ""}
        onClick={() => setActiveHouse("Slytherin")}
      >
        S
      </button>
    </footer>
  );
}
export default Footer;
