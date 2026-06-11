let map = new Map();

map.set("name", "John");

//let keys = [...map.keys()];
let keys = Array.from(map.keys());
console.log(keys);
// Error: keys.push is not a function
keys.push("more");
//keys.add("more"); keys.add is not a function
console.log(keys);
