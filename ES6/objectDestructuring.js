const address = {
  street: "cross",
  city: "Banglore",
  country: "India",
};
// const street = address.street;
// const city = address.city;

// const { street, city, country } = address;

// console.log(street, city, country);

const { street: st } = address;

console.log(st);
