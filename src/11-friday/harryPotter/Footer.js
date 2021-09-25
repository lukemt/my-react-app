import styled from "styled-components";

function Footer({ activeHouse, onHouseButtonClick }) {
  return (
    <StyledFooter>
      <StyledButton
        isActive={activeHouse === "Gryffindor"}
        onClick={() => onHouseButtonClick("Gryffindor")}
      >
        G
      </StyledButton>
      <StyledButton
        isActive={activeHouse === "Hufflepuff"}
        onClick={() => onHouseButtonClick("Hufflepuff")}
      >
        H
      </StyledButton>
      <StyledButton
        isActive={activeHouse === "Ravenclaw"}
        onClick={() => onHouseButtonClick("Ravenclaw")}
      >
        R
      </StyledButton>
      <StyledButton
        isActive={activeHouse === "Slytherin"}
        onClick={() => onHouseButtonClick("Slytherin")}
      >
        S
      </StyledButton>
      <StyledButton
        isActive={activeHouse === ""}
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
  background-color: ${({ isActive }) =>
    isActive ? "rgb(197, 240, 255)" : "rgb(220, 220, 220)"};
`;

export default Footer;
