import React, { useState } from 'react';

const Form = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Введите текст:
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      <button type="submit">Вывести в консоль</button>
    </form>
  );
};

export default Form;
