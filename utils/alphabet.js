const alphabet = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ё",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "У",
  "Ф",
  "Х",
  "Ц",
  "Ч",
  "Ш",
  "Щ",
  "Ъ",
  "Ы",
  "Ь",
  "Э",
  "Ю",
  "Я",
];

const arms = ["Л", "П", "О"];
const feet = ["Л", "П", "О"];

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createArray = (cellsNumber) => {
  const cells = [];
  for (let i = 0; i < cellsNumber; i++) {
    const alphabetIndex = getRandomInt(0, alphabet.length - 1);
    const armsIndex = getRandomInt(0, 2);
    const feettIndex = getRandomInt(0, 2);
    const line = alphabet[alphabetIndex] + arms[armsIndex] + feet[feettIndex];
    cells.push(line);
  }
  console.log(cells);
  return cells;
};

module.exports = {
  createArray,
};
