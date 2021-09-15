function EmojiBar({ handleEmojiButtonClick }) {
  return (
    <div className="EmojiBar">
      <button onClick={() => handleEmojiButtonClick("🦩")}> 🦩 </button>
      <button onClick={() => handleEmojiButtonClick("🦸‍♂️")}> 🦸‍♂️ </button>
      <button onClick={() => handleEmojiButtonClick("🦸‍♀️")}> 🦸‍♀️ </button>
      <button onClick={() => handleEmojiButtonClick("🦹‍♂️")}> 🦹‍♂️ </button>
    </div>
  );
}

export default EmojiBar;
