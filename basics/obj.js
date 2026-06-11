let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(salaries) {
  let s = 0;

  for (let [key, val] of Object.entries(salaries)) {
    s += val;
  }
  return s;
}

console.log(sumSalaries(salaries)); // 650

let user = {
  name: "John",
  age: 30,
};

function count(user) {
  return Object.values(user).length;
}

console.log(count(user)); // 2
