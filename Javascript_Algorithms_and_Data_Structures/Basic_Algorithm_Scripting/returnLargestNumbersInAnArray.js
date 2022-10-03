function largestOfFour(arr) {
  let largestNumber = -100;
  const newArr = [];
  for(let i = 0; i < arr.length; i++) {
    largestNumber = -100
    arr[i].forEach(number => number > largestNumber ? largestNumber = number : ''
    );
    newArr.push(largestNumber);
  };
  return newArr;
};

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);