const { HashTable } = require('./index');

function left_join(firstMap, secondMap) {
  const outputArr = []; // array to hold all strings/words with their synonyms and antonyms
  let containsInt = false;

  const parseValue = (v) => {
    try {
      if ( isNaN( parseInt( v ))) {
        return v;
      }
      containsInt = true;
      return null;
    } catch(e) {
      return v;
    }
  };

  firstMap.keys().forEach(word => {
    const firstResult = firstMap.get( word );
    const secondResult = secondMap.get( word );
    const synonym = parseValue(String( firstResult ).split(':')[1]);
    const antonym = secondResult ? parseValue(String( secondResult ).split(':')[1]) : 'NULL';

    let wordOutput = `${ word } synonym: ${ synonym } antonym: ${ antonym }`;
    outputArr.push( wordOutput );
  });

  if ( !containsInt ) {
    return outputArr;
  } else {
    return 'Integer detected.';
  }
}

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

console.log(left_join(hashMapOne, hashMapTwo));

module.exports = left_join;
