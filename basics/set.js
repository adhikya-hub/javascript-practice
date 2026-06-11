function unique(arr) {
  st = new Set(arr);
  // for (let x of arr) {
  //   st.add(x);
  // }
  return [...st];
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values)); // Hare, Krishna, :-O
