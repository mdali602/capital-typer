import { KeyboardEventHandler, useEffect, useState } from "react";
import generateText from "../helpers/generateText";

const regex = /^[a-z ]$/;

const generatedText = generateText()

export default function useTyper() {
  // const [paragraph, setParagraph] = useState(generateText()); // Not a good way generate Text will be called every render
  // const [paragraph, setParagraph] = useState(generateText); // Not a good way generate Text will be called every render
  const [paragraph, setParagraph] = useState(generatedText);
  const [typed, setTyped] = useState("");
  const [startTime, setStartTime] = useState(0);
  const [wpm, setWpm] = useState(0);

  const handleReset = () => {
    setTyped("");
    setStartTime(0);
    setWpm(0);
    setParagraph(generateText());
  };

  const handleKeyDown: KeyboardEventHandler = (e) => {
    if (!typed.length) setStartTime(new Date().getTime());
    const key = e.key.toLowerCase();
    if (regex.test(key)) {
      setTyped((prevTyped) => `${prevTyped}${key}`);
    }
    if (key === "backspace") {
      setTyped((prevTyped) => prevTyped.substr(0, prevTyped.length - 1));
    }
  };

  useEffect(() => {
    if (paragraph.length === typed.length) {
      const endTime = new Date().getTime();
      const wordsPerMin = Math.round(
        paragraph.split(" ").length / ((endTime - startTime) / 1000 / 60)
      );
      setWpm(wordsPerMin);
    }
  }, [paragraph, typed, startTime, setWpm]);

  return { paragraph, wpm, typed, handleKeyDown, handleReset };
}
