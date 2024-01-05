// map() function
const arr = [1, 2, 3, 4, 5];
function double(x) {
  return x * 2;
}
const output = arr.map(double);
console.log(output);
console.log("arr: ", arr);

// or we can write it as shown below by using arrow function
console.log(arr.map((x) => x * 2));

// filter() function
const oddValues = arr.filter((x) => x % 2);
console.log("oddValues: ", oddValues);

const evenValues = arr.filter((x) => x % 2 == 0);
console.log("evenValues: ", evenValues);

// reduce() function
const sumOfArrayElements = arr.reduce((x, acc) => {
  acc = acc + x;
  return acc;
}, 0);
console.log("sum: ", sumOfArrayElements);
