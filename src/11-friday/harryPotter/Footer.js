import styled from "styled-components";

function Footer({ activeHouse, onHouseButtonClick }) {
  return (
    <StyledFooter>
      <StyledButton
        className={activeHouse === "Gryffindor" ? "footer__button--active" : ""}
        onClick={() => onHouseButtonClick("Gryffindor")}
      >
        G
      </StyledButton>
      <StyledButton
        className={activeHouse === "Hufflepuff" ? "footer__button--active" : ""}
        onClick={() => onHouseButtonClick("Hufflepuff")}
      >
        H
      </StyledButton>
      <StyledButton
        className={activeHouse === "Ravenclaw" ? "footer__button--active" : ""}
        onClick={() => onHouseButtonClick("Ravenclaw")}
      >
        R
      </StyledButton>
      <StyledButton
        className={activeHouse === "Slytherin" ? "footer__button--active" : ""}
        onClick={() => onHouseButtonClick("Slytherin")}
      >
        S
      </StyledButton>
      <StyledButton
        className={activeHouse === "" ? "footer__button--active" : ""}
        onClick={() => onHouseButtonClick("")}
      ></StyledButton>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  padding: 30px;
  text-align: center;

  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 20px #dedede;
  position: fixed;
  width: 100%;
  max-width: 600px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
`;

const StyledButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

export default Footer;
