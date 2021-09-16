function Emoji({ emoji, emojiState, onEmojiButtonClick }) {
  return (
    <button
      className={emoji === emojiState && "emoji-active"}
      onClick={() => onEmojiButtonClick(emoji)}
    >
      {emoji}
    </button>
  );
}
export default Emoji;
