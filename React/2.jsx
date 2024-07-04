import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(prevCount => prevCount + 1);
  };

  const buttonStyle = {
    backgroundColor: count > 10 ? 'red' : 'green',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    cursor: 'pointer'
  };

  return (
    <div>
      <h1>Счетчик: {count}</h1>
      <button style={buttonStyle} onClick={incrementCounter}>
        Увеличить
      </button>
    </div>
  );
};

export default Counter;
