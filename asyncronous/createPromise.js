const greetPriya = new Promise((resolve, reject) => {
  try {
    //const greet = 0 / 9;
    const greet = "Hi Priya";
    resolve(greet);
  } catch (error) {
    reject(new Error(error));
  }
});

const greetAnu = new Promise((resolve, reject) => {
  try {
    resolve("hi Anu");
  } catch (er) {
    reject(new Error(er));
  }
});

console.log("start");

greetPriya
  .then((x) => {
    console.log(x);
    return greetAnu;
  })
  .then((k) => console.log(k))
  .catch((y) => console.log(y.message))
  .finally(() => {
    console.log("Done!");
  });
