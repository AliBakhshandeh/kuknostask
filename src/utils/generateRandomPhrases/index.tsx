const generateRandomPhrases = () => {
  const phrases = [];
  const wordList = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
    "kiwi",
    "lemon",
    "mango",
    "nectarine",
    "orange",
    "peach",
    "quince",
    "raspberry",
    "strawberry",
    "tangerine",
    "watermelon",
    "zucchini",
  ];

  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    phrases.push(wordList[randomIndex]);
  }

  return phrases;
};
export default generateRandomPhrases;
