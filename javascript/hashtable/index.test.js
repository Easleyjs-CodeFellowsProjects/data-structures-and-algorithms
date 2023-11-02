const HashTable = require('./index.js');

describe('Hash Table class', () => {
  xtest('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    const myHashTable = new HashTable(10);

    // Insert multiple key-value pairs into the hash table
    myHashTable.set('apple', 'value1');
    myHashTable.set('banana', 'value2');
    myHashTable.set('cherry', 'value3');

    console.log(myHashTable.get('apple'));
    expect(myHashTable.get('apple')).toStrictEqual(['apple:value1']);
  });

  xtest('Retrieving based on a key returns the value stored', () => {
    const myHashTable = new HashTable(10);

    // Insert multiple key-value pairs into the hash table
    myHashTable.set('apple', 'value1');
    myHashTable.set('banana', 'value2');
    myHashTable.set('cherry', 'value3');

    expect(String(myHashTable.get('apple')).split(':')[1]).toBe('value1');
  });

  xtest('Successfully returns null for a key that does not exist in the hashtable', () => {
    const myHashTable = new HashTable(10);

    // Insert multiple key-value pairs into the hash table
    myHashTable.set('apple', 'value1');
    myHashTable.set('banana', 'value2');
    myHashTable.set('cherry', 'value3');
    myHashTable.set('date', 'value4');

    expect(myHashTable.get('pumpkin')).toBe(null);


  });

  xtest('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    const myHashTable = new HashTable(10);

    // Insert multiple key-value pairs into the hash table
    myHashTable.set('apple', 'value1');
    myHashTable.set('banana', 'value2');
    myHashTable.set('cherry', 'value3');
    myHashTable.set('date', 'value5');

    // Retrieve the list of unique keys
    const uniqueKeys = myHashTable.getUniqueKeys();

    // Expectations
    expect(uniqueKeys).toContain('banana');
    expect(uniqueKeys).toContain('cherry');
    expect(uniqueKeys).toContain('date');
  });

  xtest('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    const myHashTable = new HashTable(10);

    // Use keys that result in different hash values
    myHashTable.set('name', 'John');
    myHashTable.set('income', 1000);

    // Attempt to retrieve values from the bucket with the same hash
    const nameValue = String(myHashTable.get('name')).split(':')[1];
    const incomeValue = parseInt(String(myHashTable.get('income')).split(':')[1]);

    // Expectations
    expect(nameValue).toBe('John');
    expect(incomeValue).toBe(1000);
  });


  xtest('Successfully hash a key to an in-range value', () => {
    const myHashTable = new HashTable(10);

    // Choose a key to hash
    const key = 'exampleKey';

    // Calculate the hash for the chosen key
    const hash = myHashTable.hash(key);

    // Check if the hash is within the expected range (0 to size - 1)
    expect(hash).toBeGreaterThanOrEqual(0);
    expect(hash).toBeLessThan(myHashTable.size);
  });

  xtest('Successfully hash a key to an in-range value', () => {
    const myHashTable = new HashTable(10);

    // Choose a key to hash
    const key = 'exampleKey';

    // Calculate the hash for the chosen key
    const hash = myHashTable.hash(key);

    // Check if the hash is within the expected range (0 to size - 1)
    expect(hash).toBeGreaterThanOrEqual(0);
    expect(hash).toBeLessThan(myHashTable.size);
  });

  test('Should find the first duplicate word in a string', () => {
    const input = 'it is what it is';
    const inputArr = input.split(' ');
    const myHashTable = new HashTable(inputArr.length);

    console.log(inputArr);
  });

});
