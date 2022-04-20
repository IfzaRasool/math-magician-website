/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btn) {
    const btnData = btn.target.textContent;
    this.setState((event) => calculate(event, btnData));
  }

  render() {
    const { total, next, operation } = this.state;

    return (
      <div className="calculator">
        <div className="cal-screen">
          { total}
          { operation}
          { next }
        </div>
        <div className="cal-buttons">
          <button type="button" className="btn" onClick={this.handleClick}>AC</button>
          <button type="button" className="btn" onClick={this.handleClick}>+/-</button>
          <button type="button" className="btn" onClick={this.handleClick}>%</button>
          <button type="button" className="btn primary" onClick={this.handleClick}>÷</button>
          <button type="button" className="btn" onClick={this.handleClick}>7</button>
          <button type="button" className="btn" onClick={this.handleClick}>8</button>
          <button type="button" className="btn" onClick={this.handleClick}>9</button>
          <button type="button" className="btn primary" onClick={this.handleClick}>x</button>
          <button type="button" className="btn" onClick={this.handleClick}>4</button>
          <button type="button" className="btn" onClick={this.handleClick}>5</button>
          <button type="button" className="btn" onClick={this.handleClick}>6</button>
          <button type="button" className="btn primary" onClick={this.handleClick}>-</button>
          <button type="button" className="btn" onClick={this.handleClick}>1</button>
          <button type="button" className="btn" onClick={this.handleClick}>2</button>
          <button type="button" className="btn" onClick={this.handleClick}>3</button>
          <button type="button" className="btn primary" onClick={this.handleClick}>+</button>
          <button type="button" className="btn zero" onClick={this.handleClick}>0</button>
          <button type="button" className="btn" onClick={this.handleClick}>.</button>
          <button type="button" className="btn primary" onClick={this.handleClick}>=</button>
        </div>
      </div>
    );
  }
}
export default Calculator;
