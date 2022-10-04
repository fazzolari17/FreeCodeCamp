function sumAll(arr) {
  const sorted = arr.sort((a, b) => a - b);
  const [ start, end ] = sorted;
  let acc = 0

  for(let i = start; i <= end; i++) {
    acc += i;
  };
  return acc;
};

console.log(sumAll([1, 4]));