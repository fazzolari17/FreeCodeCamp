function getIndexToIns(arr, num) {
  arr.sort((a,b) => a - b);
 
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > num || arr[i] === num) {
      return i;
    };
      if(i === arr.length - 1) {
        return arr.length ;
      };
  };
  return 0;

};

console.log(getIndexToIns([3, 10, 5], 3));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([2, 5, 10], 15));