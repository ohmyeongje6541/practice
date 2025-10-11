import React from "react";

export default function RandomNumber({ number, isCorrect }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>정답 숫자</h3>
      <h2 style={{ color: isCorrect ? "green" : "blue", fontSize: "36px" }}>
        {isCorrect ? number : "???"}
      </h2>
    </div>
  );
}
