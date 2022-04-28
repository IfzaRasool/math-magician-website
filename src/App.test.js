import { render, screen } from '@testing-library/react';
import App from './App';
import Calculator from './components/calculator';
import calculate from './logic/calculate';
import operate from './logic/operate';

test('render text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to our Page!/i);
  expect(linkElement).toBeInTheDocument();
});

it('Addition ', () => {
  render(<Calculator />);
  expect(operate('1', '2', '+')).toBe('3');
});

it('Subtraction', () => {
  render(<Calculator />);
  expect(operate('201587963', '3652', '-')).toBe('201584311');
});

it('Multiplication', () => {
  render(<Calculator />);
  expect(operate('0', '0', 'x')).toBe('0');
});

it('Division', () => {
  render(<Calculator />);
  expect(operate('200000', '200', '÷')).toBe('1000');
});

describe('calculate test group', () => {
  it('calculations Test', () => {
    render(<Calculator />);
    expect(calculate(0, '+')).toEqual(expect.objectContaining({ operation: '+' }));
    expect(calculate(0, '1')).toEqual(expect.objectContaining({ next: '1', total: null }));
  });
  // Test AC
  it('return null values', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(obj, 'AC')).toEqual(obj);
  });

  //  buttonName is a number
  it('ButtonName is a number', () => {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    expect(calculate(numbers[3], '4')).toEqual({
      next: '4',
      total: null,
    });
  });

  it('empty object', () => {
    const objempty = {
      total: null,
      next: '0',
      operation: null,
    };
    expect(calculate(objempty, '0')).toEqual({});
  });

  it('Next value of the object', () => {
    expect(calculate(0, '10')).toEqual({
      total: null,
      next: '10',
    });
  });

  //   when the = is clicked
  it('expect an empty object', () => {
    const objEqual = {
      total: '90',
      next: '52',
      operation: '+',
    };
    expect(calculate(objEqual, '=')).toEqual({
      total: '142',
      next: null,
      operation: null,
    });
  });
});
