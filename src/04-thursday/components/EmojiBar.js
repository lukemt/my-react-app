import "./EmojiBar.css";
function EmojiBar({ emojiState, onEmojiButtonClick }) {
  const emojis = ["🦩", "🐵", "🧳", "🐹"];
  return (
    <div className="emojibar">
      {emojis.map((currentEmoji) => (
        <button
          key={currentEmoji}
          onClick={() => onEmojiButtonClick(currentEmoji)}
          className={
            "emojibar__button " +
            (emojiState === currentEmoji ? "emojibar__button--active" : "")
          }
        >
          {currentEmoji}
        </button>
      ))}
    </div>
  );
}

export default EmojiBar;
