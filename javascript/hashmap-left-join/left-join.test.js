const { HashTable } = require('./index');
const left_join = require('./left-join');

describe('It should be able to take two hash maps and perform a left join', () => {
  test('Two hash maps with some corresponding values should return a left join', () => {
    const hashMapOne = new HashTable(100);
    hashMapOne.set('diligent', 'employed');
    hashMapOne.set('fond', 'enamored');
    hashMapOne.set('guide', 'usher');
    hashMapOne.set('outfit', 'garb');
    hashMapOne.set('wrath', 'anger');

    const hashMapTwo = new HashTable(100);
    hashMapTwo.set('diligent', 'idle');
    hashMapTwo.set('fond', 'averse');
    hashMapTwo.set('guide', 'follow');
    hashMapTwo.set('flow', 'jam');
    hashMapTwo.set('wrath', 'delight');

    //console.log();
    //console.log(results);

    const results = left_join(hashMapOne, hashMapTwo);

    expect( results[0] ).toBe('guide synonym: usher antonym: follow');
  });

  test('Two hash maps with no corresponding values should return', () => {
    const hashMapOne = new HashTable(100);
    hashMapOne.set('diligent', 'employed');
    hashMapOne.set('fond', 'enamored');
    hashMapOne.set('guide', 'usher');
    hashMapOne.set('outfit', 'garb');
    hashMapOne.set('wrath', 'anger');

    const hashMapTwo = new HashTable(100);
    hashMapTwo.set('good', 'idle');
    hashMapTwo.set('bad', 'averse');
    hashMapTwo.set('index', 'follow');
    hashMapTwo.set('column', 'jam');
    hashMapTwo.set('bread', 'delight');

    const results = left_join(hashMapOne, hashMapTwo);

    expect( results[0] ).toBe('guide synonym: usher antonym: NULL');
  });

  test('Two hash maps with with an integer value in them should warning', () => {
    const hashMapOne = new HashTable(100);
    hashMapOne.set('diligent', '7');
    hashMapOne.set('fond', 'enamored');
    hashMapOne.set('guide', 'usher');
    hashMapOne.set('outfit', 'garb');
    hashMapOne.set('wrath', 'anger');

    const hashMapTwo = new HashTable(100);
    hashMapTwo.set('good', '7');
    hashMapTwo.set('bad', '10');
    hashMapTwo.set('index', 'follow');
    hashMapTwo.set('column', 'jam');
    hashMapTwo.set('bread', 'delight');

    const results = left_join(hashMapOne, hashMapTwo);
    expect( results ).toBe('Integer detected.');
  });

});
