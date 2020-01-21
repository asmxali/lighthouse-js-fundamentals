function concat(array1,array2)
{
  let newArray = [];
  
  for(var row = 0; row < array1.length; row++)
  {
    newArray.push(array1[row]);
  }
  for (var column = 0; column < array2.length; column++)
  {
    newArray.push(array2[column]);
  }
  
  return newArray;
}




console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);