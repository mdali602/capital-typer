import styled from "styled-components";

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Paragraph: styled.p`
    text-align: center;
    margin: auto;
    padding: 10px 0;
    width: 80%;
    font-weight: bold;
  `,
  Input: styled.input`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 1000;
    cursor: default;
  `,
  Letter: styled.span<{ letter: string; typed: string }>`
    background-color: ${(p) =>
      !p.typed ? "#555 " : p.letter === p.typed ? "goldenrod" : "red"};
  `,
  Button: styled.button`
    padding: 5px 10px;
    z-index: 1001;
    cursor: pointer;
  `,
};

export default S