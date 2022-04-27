import React, { useState } from 'react';
import calculate from '../logic/calculate';
import CreateButton from './buttons';

const Calculator = () => {
  const obj = {
    total: 0,
    next: null,
    operation: null,
  };

  const [newobj, setObj] = useState(obj);

  const handleClick = (btnValue) => {
    const newProps = { ...newobj };
    setObj(calculate(newProps, btnValue));
  };
  const btnName = [
    'AC',
    '+/-',
    '%',
    '÷',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
  ];

  return (
    <div className="cal-container">
      <p>Let us do some Math!!!</p>
      <div className="calculator">
        <div className="cal-screen">
          { newobj.total}
          { newobj.operation}
          { newobj.next }
        </div>
        <div className="cal-buttons">
          { btnName.map((btn) => (
            <CreateButton key={btn} value={btn} handleClick={handleClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
