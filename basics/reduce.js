let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

function getAverageAge(arr) {
  // sum = arr.reduce((sum, item) => sum + item.age, 0);
  // return sum / arr.length;
  return arr.reduce((sum, item) => sum + item.age, 0) / arr.length;
}
