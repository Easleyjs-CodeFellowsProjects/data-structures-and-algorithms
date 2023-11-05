# Challenge Title
## Left Join

## Description
Given two hash maps, return the "left join" of them.

## Requirements
**Write a function that LEFT JOINs two hashmaps into a single data structure.**

Write a function called left join
**Arguments: two hash maps**
- The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
- The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.

Return: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic

NOTES:

Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row.
If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.

## Tests
- It should return error when passed non-int values
- It should successfully return nulls passed two hash maps with no common values for some entries
- It should successfully return the left join of two hashmaps with common values


## Whiteboard
![a whiteboard of a hash table](./whiteboard.png)