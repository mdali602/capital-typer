import S from "./helpers/styles";
import useTyper from "./hooks/useTyper";

import "./styles.css";

export default function App() {
  const { paragraph, wpm, typed, handleKeyDown, handleReset } = useTyper();

  return (
    <div className="App">
      <h1>Let's test your typing skills</h1>
      <S.Wrapper>
        <S.Paragraph>Typing Speed (in WPM): {wpm}</S.Paragraph>
        <S.Paragraph>
          {paragraph.split("").map((letter, idx) => (
            <S.Letter key={`letter-${idx}`} letter={letter} typed={typed[idx]}>
              {letter}
            </S.Letter>
          ))}
        </S.Paragraph>
        <S.Input onKeyDown={handleKeyDown} />
        {/* <S.Input autoFocus onKeyDown={handleKeyDown} /> */}
        <S.Button onClick={handleReset}>Reset</S.Button>
      </S.Wrapper>
    </div>
  );
}
