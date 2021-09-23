import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Card({ name, house }) {
  return (
    <StyledAppCardDiv>
      <Link to={`/characters/person/${name}`}>
        {name} from {house}
      </Link>
    </StyledAppCardDiv>
  );
}

const StyledAppCardDiv = styled.div`
  border: 0px solid #aaa;
  margin: 15px;
  padding: 15px;
  border-radius: 13px;

  box-shadow: 0px 0px 20px #dedede;
  display: flex;
`;
