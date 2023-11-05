const BinaryTree = require('./BinaryTree/index');
const { HashTable } = require('./index');

/*
  TO-DO:
  - set up input data/hash tables for testing/etc.
  - look through .keys() of first hash table
  - for each key, create a string with word.
  - then using key/word, loop through the second hash table and look for matches. Append each match to the string.
  - Push finished string to a results array
  - Return results array
*/
function left_join(firstMap, secondMap) {
  const outputArr = []; // array to hold all strings/words with their synonyms and antonyms
  let containsInt = false;

  const parseValue = (v) => {
    let parsedValue = 0;
    try {
      parsedValue = parseInt( v );
      return null;
    } catch(e) {
      //console.log('VALUE IS NOT AN INT:', v);
      return parsedValue;
    }
  };

  firstMap.keys().forEach(word => {
    const synonym = String(firstMap.get( word )).split(':')[1]; //parseValue()
    const antonym = String(secondMap.get( word )).split(':')[1] || 'NULL'; //parseValue()

    let wordOutput = `${ word } synonym: ${ synonym } antonym: ${ antonym }`;
    outputArr.push( wordOutput );
  });

  if ( !containsInt ) {
    return outputArr;
  } else {
    return 'Integer detected.';
  }
}

const hashMapOne = new HashTable(10);
hashMapOne.set('diligent', 'employed');
hashMapOne.set('fond', 'enamored');
hashMapOne.set('guide', 'usher');
hashMapOne.set('outfit', 'garb');
hashMapOne.set('wrath', 'anger');

const hashMapTwo = new HashTable(10);
hashMapOne.set('diligent', 'idle');
hashMapOne.set('fond', 'averse');
hashMapOne.set('guide', 'follow');
hashMapOne.set('flow', 'jam');
hashMapOne.set('wrath', 'delight');

console.log(left_join(hashMapOne, hashMapTwo));

module.exports = left_join;
