//“my-short-string” into camel-cased “myShortString”
// function camelize(str) {
//   arr = str.split("-");

//   for (let i = 1; i < arr.length; i++) {
//     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//   }
//   console.log(arr.join(""));
// }
//

function camelize(str) {
  return str
    .split("-")
    .map((word, idx) =>
      idx === 0 ? word : word[0].toUpperCase() + word.slice(1),
    )
    .join("");
}

console.log(camelize("my-short-string"));
