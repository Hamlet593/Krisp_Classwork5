/*Create a gather function that accepts a string argument and returns another function. The function calls should support continued chaining until the orderis called.
The ordershould accept a number as an argument and return another function. The function calls should support continued chaining until the getis called.
get should return all of the arguments provided to the gather functions as a string in the order specified in the order functions.

gather("a")("b")("c").order(0)(1)(2).get() ➞ "abc"
gather("a")("b")("c").order(2)(1)(0).get() ➞ "cba"
gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get() ➞ "hello!"

Expect to gatherand orderto chain any number of times, but always with the same number of invocations for each (i.e both functions will always be chained the same number of times).*/

function gather(str) {
  let text = str;
  console.log("gather");

  return function innerGather(str) {
    text += str;
    console.log("innerGather");
    innerGather.order = function (n) {
      console.log("order");
      const orders = [];
      orders.push(n);

      return function innerOrder(n) {
        console.log("innerOrder");
        orders.push(n);

        innerOrder.get = function () {
          const result = orders.map((i) => text[i]);
          return result.join("");
        };

        return innerOrder;
      };
    };
    
    return innerGather;
  };
}

console.log(gather("s")("f")("d").order(0)(1)(2)(1).get());
