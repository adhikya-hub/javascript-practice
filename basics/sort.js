// sort it in decreasing order
let arr = [5, 2, 1, -10, 8];

//arr.sort((a, b) => b - a);

function cFn(a, b) {
  if (a > b) {
    return -1;
  } else if (a == b) {
    return 0;
  } else {
    return 1;
  }
}
arr.sort(cFn);

console.log(arr); // 8, 5, 2, 1, -10

let ar = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(ar);

console.log(sorted); // CSS, HTML, JavaScript
console.log(ar); // HTML, JavaScript, CSS (no changes)

function copySorted(arr) {
  return arr.slice().sort();
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let names = [pete, john, mary];

sortByAge(names);

// now: [john, mary, pete]
console.log(names[0].name); // John
console.log(names[1].name); // Mary
console.log(names[2].name); // Pete

function sortByAge(names) {
  return names.sort((a, b) => a.age - b.age);
}
