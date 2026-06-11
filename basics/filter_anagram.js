let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let mp = new Map();
  for (let str of arr) {
    let sorted = str.toLowerCase().split("").sort().join("");
    mp.set(sorted, str);
  }

  return mp.values();
}

console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"
