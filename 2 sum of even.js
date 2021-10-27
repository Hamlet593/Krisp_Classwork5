/*We have an array, filter the even numbers from the array.
Then, calculate a sum of all the remaining numbers, and after that print sum of numbers in this format `The result is ${result}.` (use function composition).*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getEven = data => data.filter(item => item % 2 === 0);

const getSum = data => data.reduce((acc, item) => acc + item, 0);

const compose = (...fns) => data => fns.reduceRight((acc, fn) => fn(acc), data);

const printResult = data => `The result is ${data}`

const callCompose = compose(printResult, getSum, getEven);

console.log(callCompose(arr))