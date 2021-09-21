export function getEmoji(characterName, emojiData) {
  const item = emojiData.find((itemInner) => itemInner.name === characterName);
  if (item) {
    return item.emoji;
  } else {
    return "";
  }
}
