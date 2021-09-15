function EmojiBar({ onEmojiButtonClick }) {
  return (
    <div className="EmojiBar">
      <button onClick={() => onEmojiButtonClick("🦩")}> 🦩 </button>
      <button onClick={() => onEmojiButtonClick("🦸‍♂️")}> 🦸‍♂️ </button>
      <button onClick={() => onEmojiButtonClick("🦸‍♀️")}> 🦸‍♀️ </button>
      <button onClick={() => onEmojiButtonClick("🦹‍♂️")}> 🦹‍♂️ </button>
    </div>
  );
}

export default EmojiBar;
