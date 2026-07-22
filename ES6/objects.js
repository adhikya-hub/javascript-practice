const person = {
  name: "Mosh",
  walk: function () {},
  // walk called method as it is inside function
  talk() {}, //newer syntax
};

person.talk();
person["name"] = "Bob";

//use dot when we know the method to access
person.name;

//use squarebrackets when geeting the value from a form
const targetMember = "name";

person[targetMember.value] = "Alice";
