let user = { name: "John", years: 30 };

// your code to the left side:
// ... = user
let { name, years: age, isAdmin = false } = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 300,
};

function topSalary(salaries) {
  let maxSal = 0;
  let maxName = "";

  for (let [key, val] of Object.entries(salaries)) {
    if (val >= maxSal) {
      maxSal = val;
      maxName = key;
    }
  }
  return maxName;
}
console.log(topSalary(salaries));
