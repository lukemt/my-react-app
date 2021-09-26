import styled from "styled-components";
import logo from "./HeaderLogo.svg";

function Header() {
  return (
    <StyledHeader className="header">
      <StyledImg src={logo} alt="" />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  padding: 30px;
  text-align: center;

  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 20px #dedede;
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
`;

const StyledImg = styled.img`
  display: block;
  height: 70px;
  margin: 0 auto;
`;

export default Header;
