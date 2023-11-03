const BinaryTree = require('./BinaryTree/index');
const { HashTable } = require('./index');

/*
    - Go through first tree (with in-order traversal), add all values to storage array.
    - Go through second tree, add all values to storage array.
    - Go through storage array, add values to hashmap. If value already exists there, add to output array.
    Return output array.
*/
function tree_intersection(firstTree, secondTree) {
  const allValuesArr = []; // store all values from both trees.
  const outputArr = []; // common values from both trees.
  let containsStrings = false;

  const parseValue = (v) => {
    let parsedValue = 0;
    try {
      parsedValue = parseInt( v );
      return parsedValue;
    } catch(e) {
      console.log('VALUE IS NOT AN INT:', v);
      return null;
    }
  };

  firstTree.inOrderTraversal((value) => {
    const parsedValue = parseValue( value );
    if ( parsedValue ) {
      allValuesArr.push( parsedValue );
    } else {
      containsStrings = true;
    }
  });

  secondTree.inOrderTraversal((value) => {
    const parsedValue = parseValue( value );
    if ( parsedValue ) {
      allValuesArr.push( parsedValue );
    } else {
      containsStrings = true;
    }
  });

  if ( !containsStrings ) {

    const myHashTable = new HashTable( allValuesArr.length*10 );

    // at this point we have our array with all values.
    // loop through allValues array and add values to hash map.
    // when a value exists in hashmap, push value to output arr.

    let counter = 0;
    while ( counter < allValuesArr.length -1 ) {
      const arrValue = allValuesArr[ counter ];
      const results = myHashTable.get( arrValue );

      if ( results === null ) {
        myHashTable.set( arrValue, 1);
      }
      if ( results ) {
        outputArr.push( allValuesArr[ counter ]);
      }
      counter++;
    }
    return outputArr;
  } else {
    return 'Non-int detected.';
  }

}



module.exports = tree_intersection;

