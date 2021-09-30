import { useState } from "react";
import getEmoji from "../utils/getEmojji";

export default function useEmoji() {
  // emoji
  /*
emojiData Example data:
  [
    {
      name: "Harry Potter",
      emoji: "🦩"
    },
    {
      name: "Ron Weasley",
      emoji: "🐹"
    },
    ...
  ] 
  */
  const [emojiData, setEmojiData] = useState(() => {
    if (localStorage.getItem("emojiDataLocalStorage")) {
      return JSON.parse(localStorage.getItem("emojiDataLocalStorage"));
    } else {
      return [];
    }
  });

  // removable emoji
  function handleEmojiButtonClick(newEmoji, characterName) {
    const oldEmoji = getEmoji(characterName, emojiData);
    const filteredEmojiData = emojiData.filter((item) => {
      if (item.name === characterName) {
        return false;
      } else {
        return true;
      }
    });
    const newEmojiData =
      oldEmoji === newEmoji
        ? filteredEmojiData
        : [...filteredEmojiData, { name: characterName, emoji: newEmoji }];
    setEmojiData(newEmojiData);
    localStorage.setItem("emojiDataLocalStorage", JSON.stringify(newEmojiData));
  }

  return { emojiData, handleEmojiButtonClick };
}
