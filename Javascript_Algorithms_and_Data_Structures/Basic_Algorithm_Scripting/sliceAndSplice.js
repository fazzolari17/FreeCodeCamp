function frankenSplice(arr1, arr2, n) {
  let tempArr = [ ...arr2 ];
  tempArr.splice(n, 0, arr1);
  return tempArr.flat();

}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));