// const square = function (number) {
//   return number * number;
// };

// const square = (number) => number * number;

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

// const activeJobs = jobs.filter(function (job) {
//   return job.isActive;
// });

const activeJobs = jobs.filter((job) => job.isActive);

console.log(activeJobs);

// const person = {
//   talk() {
//     setTimeout(function () {
//       console.log("this:", this);
//     }, 1000);
//   },
// };

const person = {
  talk() {
    const self = this;
    setTimeout(function () {
      console.log("this:", self);
    }, 1000);
  },
};

person.talk();

// const person = {
//   talk() {
//     setTimeout(() => {
//       console.log("this:", this);
//     }, 1000);
//   },
// };

// person.talk();
