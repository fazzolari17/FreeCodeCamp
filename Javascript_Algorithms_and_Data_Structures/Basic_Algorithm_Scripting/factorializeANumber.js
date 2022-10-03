function factorialize(num) {
  let arr = []
  for (let i = 1; i <= num; i++) {
    arr.push(i)
  }
  return num = arr.reduce((a, b) => a * b, 1)
}

factorialize(5);