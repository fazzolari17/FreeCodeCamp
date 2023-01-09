function pairwise(arr, arg) {
  let indices = [];

  if(arr.length === 0) return 0;

  for(let i = 0; i < arr.length; i++) {

    for(let j = i+1; j < arr.length; j++) {
      if(indices.includes(i) || indices.includes(j)) continue;
      if( (arr[i] + arr[j]) === arg ) indices.push(i,j);
    }

  }

  return indices.reduce((a, b) => a + b);

}

pairwise([1,4,2,3,0,5], 7);
pairwise([0, 0, 0, 0, 1, 1], 1);