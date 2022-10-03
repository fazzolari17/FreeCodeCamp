function findLongestWordLength(str) {
  let longestWord = 0
  str = str.split(' ')
  str.forEach(item => item.length > longestWord 
    ? longestWord = item.length 
    : '');

  return longestWord;
  };

findLongestWordLength("The quick brown fox jumped over the lazy dog");