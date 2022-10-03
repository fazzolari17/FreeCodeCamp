function titleCase(str) {
  str = str.toLowerCase();
  str = str.split(' ');
  let newStr = [];

  for(let i = 0; i < str.length; i++) {
    let temp = '';
    temp += str[i][0].toUpperCase();
    temp += str[i].substring(1);
    newStr.push(temp);
  };
  newStr = newStr.join(' ');

  return newStr;
};

titleCase("I'm a little tea pot");