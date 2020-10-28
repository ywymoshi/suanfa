const smallerNumbersThanCurrent = require('./index.js');

test('smallerNumbersThanCurrent [5,8,4,3,5,6] require [2, 0, 4, 5, 2, 1]', () => {
  expect(smallerNumbersThanCurrent([5, 8, 4, 3, 5, 6])).toEqual([
    2,
    0,
    4,
    5,
    2,
    1,
  ]);
});
