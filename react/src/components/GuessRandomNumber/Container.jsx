
import Form from "./Form";
import RandomNumber from "./RandomNumber";
import React, { useEffect, useState } from "react";

export default function Container() {
  const [randomNumber, setRandomNumber] = useState();
  const [attemptCount, setAttemptCount] = useState(0);
  const [hint, setHint] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  // 초기 랜덤 숫자 생성
  useEffect(() => {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);
  }, []);

  // 숫자 비교 함수
  const checkNumber = (userInput) => {
    const userNumber = parseInt(userInput, 10);
    setAttemptCount((prev) => prev + 1);

    if (userNumber === randomNumber) {
      setIsCorrect(true);
      setHint("정답입니다!");
    } else if (userNumber < randomNumber) {
      setHint("Up!");
    } else {
      setHint("Down!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>랜덤 숫자 맞추기 게임</h1>
      <RandomNumber number={randomNumber} isCorrect={isCorrect} />
      <Form onCheck={checkNumber} isCorrect={isCorrect} />
      <p style={{ fontSize: "18px" }}>{hint}</p>
      <p style={{ fontWeight: "bold" }}>시도 횟수: {attemptCount}</p>
    </div>
  );
}
