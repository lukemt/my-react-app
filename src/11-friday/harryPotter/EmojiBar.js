import styled, { css } from "styled-components";

function EmojiBar({ activeEmoji, onEmojiButtonClick }) {
  const emojis = ["🦩", "🐵", "🧳", "🐹"];
  return (
    <div>
      {emojis.map((emoji) => (
        <StyledButton
          key={emoji}
          onClick={() => onEmojiButtonClick(emoji)}
          isActive={activeEmoji === emoji}
        >
          {emoji}
        </StyledButton>
      ))}
    </div>
  );
}

const StyledButton = styled.button`
  display: block;
  width: 28px;
  height: 28px;
  border: 0px solid #dddddd;
  border-radius: 50%;
  cursor: pointer;
  margin-bottom: 10px;
  padding-left: 3px;
  ${({ isActive }) =>
    isActive &&
    css`
      border: 1px solid #6ec7ff;
      background-color: #e6f4ff;
    `}
`;

export default EmojiBar;
