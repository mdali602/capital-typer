import wordList from "./wordList";

function generateWord(arr: string[]) {
  const availableWords = [...arr];
  return function () {
    const index = Math.floor(Math.random() * availableWords.length);
    return availableWords.splice(index, 1)[0];
  };
}

export default function generateText() {
  const wordGeneratorFn = generateWord(wordList);
  return new Array(25).fill("").map(() => wordGeneratorFn()).join(" ")
}
