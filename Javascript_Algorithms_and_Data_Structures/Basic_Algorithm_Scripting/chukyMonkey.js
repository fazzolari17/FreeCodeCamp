function chunkArrayInGroups(arr, size) {
  let tempArr = [];
  while(arr.length > 0) {
    tempArr.push(arr.splice(0, size));
  };
  return tempArr;
};

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));