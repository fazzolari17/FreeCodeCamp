function mutation(arr) {
  let [ one, two ] = arr;
  one = one.toLowerCase();
  two = two.toLowerCase();
  for(let i = 0; i < two.length; i++) {
    if(!one.includes(two[i])) {
      return false;
    }; 
  };
  return true;
};

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]))