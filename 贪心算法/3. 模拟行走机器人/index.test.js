const minMoney = require('./index.js');

test('minMoney 456 require 7', () => {
  expect(minMoney(456)).toBe(7);
});
test('minMoney 200 require 2', () => {
  expect(minMoney(200)).toBe(2);
});

test('minMoney 0.5 require -1', () => {
  expect(minMoney(0.5)).toBe(-1);
});
