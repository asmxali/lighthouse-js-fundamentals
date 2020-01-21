function range(start,end,step) 
{
  let arr = [];
  for (arr; (end - start) * step >= 0; start += step) {
    arr.push(start);
  }
  return arr;

}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));