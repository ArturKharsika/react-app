import React, { useState } from 'react';

const AddNumber = ({ addDataHandler }) => {
  const [digit, setDigit] = useState('');

  const btnClickHandler = () => {
    addDataHandler(digit);
    setDigit('');
  }

  return (
    <div>
      <input onChange={(e) => setDigit(e.target.value)} value={ digit }  type="number" />
      <button onClick={ btnClickHandler }>add</button>
    </div>
  );
};

export default AddNumber;