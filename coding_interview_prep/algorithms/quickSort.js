function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[array.length - 1];
  const left = [];
  const right = [];

  for ( const el of array.slice(0, array.length - 1) ) {
    el < pivot ? left.push(el) : right.push(el);
  }

    return [...quickSort(left), pivot, ...quickSort(right)];



}

console.log(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))