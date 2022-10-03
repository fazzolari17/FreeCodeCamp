function confirmEnding(str, target) {
  str = str
    .split('')
    .reverse()
    .join('')
    
  target = target
    .split('')
    .reverse()
    .join('')
  
    for (let i = 0; i < target.length; i++) {
      if(str[i] !== target[i]) {
        return false
      }
    }
    return true
};

confirmEnding("Bastian", "n");