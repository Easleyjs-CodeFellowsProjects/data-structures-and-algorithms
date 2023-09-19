// use the code as we intended.
const reverseArray = require('./reverseArray');

// Make sure the function can reverse arrays correctly
describe('Testing reverseArray function', () => {
  test('Should be able to reverse array', () => {
    let result = reverseArray([4,8,11]);

    expect(result).toEqual([11,8,4]);
  });
});
