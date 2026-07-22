const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);

const combined = [...first, "a", ...second, "b"];
console.log(combined);

const clone = [...first];
console.log(clone, first);

const one = { name: "Bob" };
const two = { job: "teacher" };

console.log({ ...one, ...two, location: "osa" });
