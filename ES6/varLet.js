// function sayHello(){
//     for (var i=0; i<5; i++){
//         console.log(i)
//     }
//     console.log(i)
// }

// sayHello()

function sayHello() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i); //error: not accessible out of block like var
}

sayHello();
