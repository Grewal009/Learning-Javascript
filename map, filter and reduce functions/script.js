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
