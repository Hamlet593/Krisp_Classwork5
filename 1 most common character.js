/*Write a function to get the most common character in the string (use function composition).*/

const str = "Helllloooo world!";

const strFromArray = data => data.split('');

const characters = data => data.reduce((acc, item) => {
  acc[item] ? acc[item]++ : acc[item] = 1;
  return acc;
}, {});

const getMaxChar = data => {
  let max = 0;
  let result;
  for(let key in data){
    if(data[key] > max){
      max = data[key];
      result = key;
    }
  }
  return result;
}

const compose = (...fns) => str => fns.reduceRight((acc, fn) => fn(acc), str);

const getMax = compose(getMaxChar, characters, strFromArray);

console.log(getMax(str))