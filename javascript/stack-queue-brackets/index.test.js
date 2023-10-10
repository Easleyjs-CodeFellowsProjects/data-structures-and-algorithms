const validateBrackets = require('./index');

describe('Should instantiate bracketValidate function', () => {
  test('validateBrackets should be a function', () => {

    expect(typeof validateBrackets).toBe('function');
  });
});

describe('Should return true on matched brackets', () => {
  test('Matching brackets ()', () => {
    const results = validateBrackets('( parameter )');

    expect(results).toBeTruthy();
  });
  test('Multiple brackets {()}', () => {
    const results = validateBrackets('{( stuff )}');

    expect(results).toBeTruthy();
  });

});

describe('Should return false on mismatched brackets', () => {
  test('Mismatched brackets {()', () => {
    const results = validateBrackets('{( another test )');
    expect(results).toBeFalsy();
  });
});
