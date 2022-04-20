/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <input type="text" className="cal-screen" value="0" disabled />
        <div className="cal-buttons">
          <button type="button" className="btn">AC</button>
          <button type="button" className="btn">+/-</button>
          <button type="button" className="btn">%</button>
          <button type="button" className="btn primary">/</button>
          <button type="button" className="btn">7</button>
          <button type="button" className="btn">8</button>
          <button type="button" className="btn">9</button>
          <button type="button" className="btn primary">*</button>
          <button type="button" className="btn">4</button>
          <button type="button" className="btn">5</button>
          <button type="button" className="btn">6</button>
          <button type="button" className="btn primary">-</button>
          <button type="button" className="btn">1</button>
          <button type="button" className="btn">2</button>
          <button type="button" className="btn">3</button>
          <button type="button" className="btn primary">+</button>
          <button type="button" className="btn zero">0</button>
          <button type="button" className="btn">.</button>
          <button type="button" className="btn primar">=</button>
        </div>
      </div>
    );
  }
}
export default { Calculator, calculate, operate };
