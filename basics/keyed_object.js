let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);
// function groupById(users) {
//   return users.map((item) => ({
//     [item.id]: item,
//   }));
// }

function groupById(users) {
  return users.reduce((res, item) => {
    res[item.id] = item;
    return res;
  }, {});
}

console.log(usersById);
/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
