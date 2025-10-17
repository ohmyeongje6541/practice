import React, { useState } from 'react';

export default function Form({ onCheck, isCorrect }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!inputValue) return;
    onCheck(inputValue);
    setInputValue('');
  };

  return ( 
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="1부터 100 사이의 숫자를 입력하세요"
        value={inputValue}
        min="1"
        max="100"
        required
        disabled={isCorrect}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ padding: '10px', fontSize: '16px', width: '240px' }}
      />
      <br />
      <button
        type="submit"
        disabled={isCorrect}
        style={{
          marginTop: '10px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#8899aa',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: isCorrect ? 'not-allowed' : 'pointer'
        }}
      >
        제출
      </button>
    </form>
  );
}
