function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let currentElement = arr[i];
    let j = i - 1;

    // Move elements of the sorted subarray to make room for the current element
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Place the current element in its correct position within the sorted subarray
    arr[j + 1] = currentElement;
  }

  return arr;
}
