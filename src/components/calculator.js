/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import calculate from '../logic/calculate';
import CreateButton from './buttons';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnValue) {
    this.setState((obj) => calculate(obj, btnValue));
  }

  render() {
    const { total, next, operation } = this.state;
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
      <div className="calculator">
        <div className="cal-screen">
          { total}
          { operation}
          { next }
        </div>
        <div className="cal-buttons">
          { btnName.map((btn) => (
            <CreateButton key={btn} value={btn} handleClick={this.handleClick} />
          ))}
        </div>
      </div>
    );
  }
}
export default Calculator;
