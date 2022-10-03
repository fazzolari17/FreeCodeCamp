function repeatStringNumTimes(str, num) {
  let repeated = ''
  for (let i = 0; i < num; i++) {
    repeated += str
  };
  return repeated;
}

repeatStringNumTimes("abc", 3);