import React, { useState } from "react";

export default function CreateMemo() {
  const [input, setInput] = useState("");
  const [generatedMemo, setGeneratedMemo] = useState(null);

  const handleGenerate = async () => {
    // 임시 구조화 로직 (LLM 대신)
    const mockData = {
      title: "회의 준비",
      content: input,
    };

    // 실제라면 여기에 fetch()로 API 호출
    setGeneratedMemo(mockData);
  };

  const handleSave = () => {
    const existing = JSON.parse(localStorage.getItem("memos")) || [];
    const newMemo = {
      ...generatedMemo,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      done: false,
    };
    localStorage.setItem("memos", JSON.stringify([...existing, newMemo]));
    setGeneratedMemo(null);
    setInput("");
    alert("메모가 저장되었습니다!");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">메모 생성</h2>

      <textarea
        className="w-full p-2 border mb-4"
        rows="5"
        placeholder="자연어로 메모를 입력하세요"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>

      <button className="bg-blue-500 text-white px-4 py-2" onClick={handleGenerate}>
        구조화된 메모 생성
      </button>

      {generatedMemo && (
        <div className="mt-6 border p-4 bg-gray-100">
          <h3 className="text-lg font-semibold mb-2">구조화된 메모</h3>
          <p><strong>제목:</strong> {generatedMemo.title}</p>
          <p><strong>내용:</strong> {generatedMemo.content}</p>

          <div className="mt-4 flex gap-2">
            <button className="bg-green-500 text-white px-4 py-2" onClick={handleSave}>
              메모 저장
            </button>
            <button className="bg-red-500 text-white px-4 py-2" onClick={() => setGeneratedMemo(null)}>
              취소
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
