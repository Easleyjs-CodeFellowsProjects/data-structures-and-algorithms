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

module.exports = left_join;
