import { useState } from "react";
import "./Footer.css";

function Footer({ activeHouse, onHouseButtonClick }) {
  return (
    <footer>
      <button
        className={activeHouse === "Gryffindor" ? "footer__button--active" : ""}
        onClick={() => onHouseButtonClick("Gryffindor")}
      >
        G
      </button>
      <button
        className={activeHouse === "Hufflepuff" ? "footer__button--active" : ""}
        onClick={() => onHouseButtonClick("Hufflepuff")}
      >
        H
      </button>
      <button
        className={activeHouse === "Ravenclaw" ? "footer__button--active" : ""}
        onClick={() => onHouseButtonClick("Ravenclaw")}
      >
        R
      </button>
      <button
        className={activeHouse === "Slytherin" ? "footer__button--active" : ""}
        onClick={() => onHouseButtonClick("Slytherin")}
      >
        S
      </button>
      <button
        className={activeHouse === "" ? "footer__button--active" : ""}
        onClick={() => onHouseButtonClick("")}
      ></button>
    </footer>
  );
}
export default Footer;
