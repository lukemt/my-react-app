import styled from "styled-components";

export default function Card({ name, house }) {
  return (
    <StyledAppCardDiv>
      {name} from {house}
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
