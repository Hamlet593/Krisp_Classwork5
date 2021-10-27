/*Write recursive a function that, given the start startNum and end endNum values, return an array containing all the numbers inclusive to that range. See examples below.*/

function inclusiveArray(startNum, endNum){
  if(startNum < endNum){
    return [startNum, ...inclusiveArray(++startNum, endNum)]
  }
  else{
    return [startNum]
  }
}

console.log(inclusiveArray(1, 5))
console.log(inclusiveArray(2, 8))
console.log(inclusiveArray(10, 20))
console.log(inclusiveArray(17, 5))