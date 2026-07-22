"use strict";

const person = {
  name: "Mosh",
  walk() {
    console.log(this);
  },
};

person.walk();

const walk = person.walk.bind(person);
walk();
//console.log(walk);

function greet() {
  console.log("hi");
}

const greetHi = greet.bind(person);
greetHi();
