/*Create a function that recursively counts the integer's number of digits.*/

function count(number){
  
  let newNumber = Math.floor(Math.abs(number) / 10);

  return Boolean(newNumber) ? count(newNumber) + 1 : 1;
  
}
console.log(count(318));
console.log(count(-92563));
console.log(count(4666));
console.log(count(-314890));
console.log(count(654321))