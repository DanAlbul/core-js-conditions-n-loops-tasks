function sortByAsc(unsortedArr) {
  const merge = (arr, start, mid, end) => {
    let leftIndex = start;
    let rightIndex = mid;
    let sortedIndex = 0;
    const sorted = new Array(end - start);  // Create an array to hold sorted elements

    while (leftIndex < mid && rightIndex < end) {
      if (arr[leftIndex] <= arr[rightIndex]) {
        sorted[sortedIndex] = arr[leftIndex];
        leftIndex += 1;
      } else {
        sorted[sortedIndex] = arr[rightIndex];
        rightIndex += 1;
      }
      sortedIndex += 1;
    }

    while (leftIndex < mid) {
      sorted[sortedIndex] = arr[leftIndex];
      leftIndex += 1;
      sortedIndex += 1;
    }

    while (rightIndex < end) {
      sorted[sortedIndex] = arr[rightIndex];
      rightIndex += 1;
      sortedIndex += 1;
    }

    // Copy the sorted elements back into the original array
    const newArr = arr
    for (let i = start; i < end; i += 1) {
      newArr[i] = sorted[i - start];
    }
  };

  const mergeSort = (arr, start, end) => {
    if (end - start <= 1) {
      return;
    }

    const mid = Math.floor((start + end) / 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid, end);
    merge(arr, start, mid, end);
  };

  mergeSort(unsortedArr, 0, unsortedArr.length);
  return unsortedArr;
}


const arr = [
  30,
  -24,
  66,
  -39,
  30,
  70,
  76,
  96,
  -48,
  69
]

sortByAsc(arr)

console.log(arr)
