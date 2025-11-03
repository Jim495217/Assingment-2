// tests/numberProcessor.test.js
const { sumNumbers, findHighest, findLowest, calculateAverage } = require('../src/numberProcessor');

describe('Number Processor Functions', () => {
  const nums = [5, 10, 15, 20, 25];

  test('calculates sum correctly', () => {
    expect(sumNumbers(nums)).toBe(75);
  });

  test('finds highest number correctly', () => {
    expect(findHighest(nums)).toBe(25);
  });

  test('finds lowest number correctly', () => {
    expect(findLowest(nums)).toBe(5);
  });

  test('calculates average correctly', () => {
    expect(calculateAverage(nums)).toBe(15);
  });
});
