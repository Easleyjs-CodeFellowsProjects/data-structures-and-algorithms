function BinarySearch(arr, searchNum) {
  let hasFoundIndex = false;
  let arrCenter = Math.round((arr.length / 2));
  console.log(arrCenter);

  while (!hasFoundIndex) {
    if (searchNum === arr[arrCenter] ) {
      hasFoundIndex = true;
      return arrCenter;
    }
    if ( searchNum > arr[arrCenter] ) {
      arrCenter = arrCenter + (arrCenter-1);
    }
    if ( searchNum < arr[arrCenter] ) {
      arrCenter = arrCenter -1;
    }
  }
}

console.log('Index of search result: ',BinarySearch([1,2,3,4,5,6], 2));
