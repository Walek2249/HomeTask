'use strict';

const { expect } = require('chai');
const Calculator = require('../js/calculator.js');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should add numbers correctly', () => {
    expect(calculator.add(1, 1)).to.equal(2);
    expect(calculator.add(5.1, 6.2, 1.2, -7)).to.equal(5.5);
  });

  it('should multiply numbers correctly', () => {
    expect(calculator.multiply(1, 1)).to.equal(1);
    expect(calculator.multiply(6, -0.5, 7, -0.1)).to.equal(2.1);
  });

  it('should subtract numbers correctly', () => {
    expect(calculator.subtraction(1, 1)).to.equal(0);
    expect(calculator.subtraction(15.11, -4)).to.equal(19.11);
  });

  it('should divide numbers correctly', () => {
    expect(calculator.divide(1, 1)).to.equal(1);
    expect(calculator.divide(10, -0.1)).to.equal(-100);
  });

  it('should return Infinity/-Infinity if the divider is zero', () => {
    expect(calculator.divide(10, 0)).to.equal(Infinity);
    expect(calculator.divide(-2, 0)).to.equal(-Infinity);
  });

  it('should exponentiate numbers correctly', () => {
    expect(calculator.exponentiation(0)).to.equal(0);
    expect(calculator.exponentiation(1)).to.equal(1);
    expect(calculator.exponentiation(-2.5)).to.equal(6.25);
  });
});
