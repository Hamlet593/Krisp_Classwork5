/*A complete bracelet is an array with at least one subsequence (pattern) repeating at least two times, and completely - the subsequence cannot be cut-off at any point.
The subsequence must have a length two or greater.

[1, 2, 3, 3, 1, 2, 3, 3]  // Pattern: [1, 2, 3, 3]
[1, 2, 1, 2, 1, 2, 1, 2]  // Pattern: [1, 2] or [1, 2, 1, 2]
[1, 1, 6, 1, 1, 7, 1, 1, 6, 1, 1, 7, 1, 1, 6, 1, 1, 7]  // Pattern:[1, 1, 6, 1, 1, 7]
[4, 4, 3, 4, 4, 4, 4, 3, 4, 4]  // Pattern: [4, 4, 3, 4, 4]

Incomplete bracelets:
[1, 2, 2, 2, 1, 2, 2, 2, 1]  // Incomplete (chopped off)
[1, 1, 6, 1, 1, 7]  // Incomplete (subsequence repeats only once)

Create a function that returns trueif a bracelet is complete, and falseotherwise.

completeBracelet([1, 2, 2, 1, 2, 2]) ➞ true completeBracelet([5, 1, 2, 2]) ➞ false completeBracelet([5, 5, 5]) ➞ false
// potential pattern [5, 5] cut-off (patterns >= 2)

Patterns must be at least two integers in length.*/

function completeBracelet(arr){
  let obj = {};
  
  let allSubarray = []
  
  debugger;
  
  for(let i = 2; i <= arr.length / 2; i++){
    if(arr.length % i === 0){
      obj[`arr${i}`] = i;
    }
  }
  
//Ստացանք սա > let obj = {
//     arr2: 2, >> այսինքն հնարավոր է 2 length-անոց
//     arr4: 4 >> և 4 length-անոց subArray-ներ:
//   }
  
  
  for(let key in obj){
    let tempData = [...arr]; //copy ենք անում սկզբնական array-ը հղումը փոխելով, որպեսզի փոփոխություններ անելուց main array-ը չփոխվի
    
    let subArray = [];
    
    for(let i = 0; i < tempData.length; i++){
      subArray.push(tempData.splice(0, obj[key]));
      i--;
    }
    
    
    allSubarray = [...subArray];

    subArray = subArray.flat();
    
    for(let i = 0; i < obj[key]; i++){
      for(let j = i; j < (subArray.length / 2) - 1; j += 0){
        if(subArray[j] !== subArray[j + obj[key]]){          
          break;
        }
        else{
          j += obj[key]
        }
      }
    }
  }

  return allSubarray;
}

console.log(completeBracelet([1, 2, 1, 2, 1, 2, 1, 2]));