/*Create a function that takes a list of functions and sorts them in ascending order based on how many calls are needed for them to return a non-function.*/

f1 = (_) => "hello";

f2 = (_) => (_) => "world";

f3 = (_) => (_) => (_) => "user";

const calls = data => typeof data === 'function' ? 1 + calls(data()) : 0;
const sortingData = data => data.sort((a, b) => calls(a) - calls(b));
const getNames = data => data.map(item => item.name || item);

const compose = (...fns) => data => fns.reduceRight((acc, fn) => fn(acc), data);

const test = compose(getNames, sortingData);

console.log(test([f1, f3, f2]))
console.log(test([f2, 'dsfksdf']))