function updateInventory(arr1, arr2) {
  arr1 = arr1.concat(arr2) 
  arr1 = arr1.sort((a,b) => a[1] > b[1] ? 1: -1)

  for(let i = 0; i < arr1.length; i++) {
      let temp;
      if(i === arr1.length - 1) {
          continue;
      } else if (arr1[i][1] === arr1[i+1][1]) {
          temp = [arr1[i][0] + arr1[i+1][0], arr1[i][1]]
          arr1.splice(i, 2, temp)
      }
  }



    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);