function bubbleSort(array) {
  for(let i = 0; i < array.length; i++) 
  {
    for(let j = 1; j < array.length; j++) 
    {
      if(array[j] < array[j-1]) 
      {
        swap(array, j)
      } 
    }
  }
  return array;
}

const swap = (array, index) => {
  let temp  = array[index];
  array[index] = array[index-1];
  array[index-1] = temp;
  return array;
}

bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]) 