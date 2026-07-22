// const hello=function () {
//     console.log("Hello, World");
//   }

// function main(hello){
//     setTimeout(
//         ()=>{
//             hello();

//         }, 2000
// );

// }

// main(hello)

// for (let i = 1; i <=10; i++){
//   setTimeout(() => {
//     console.log(i)
//   }, i*1000);
// }

// (async function executor(){
//     try {
//         await asyncFunc1();
//         await asyncFunc2();
//         await asyncFunc3();
//         console.log('All succeeded');
//     } catch(){
//         console.log("Error occured");
//     }
// })();


async function getData() {
  try {
    const res= await fetch("https://dummyjson.com/users");
    const data = await res.json()
    console.log(data.users[0].hair)
  } catch (error) {
    consoel.log(error)

  }

}

getData()

function getPdata() {
  fetch("https://dummyjson.com/users")
  .then((res)=>res.json())
    .then((data) => console.log("k",data.users[0].hair))
    .catch((error)=>console.log(error))
    .finally(()=>console.log("finally bliiock"))

}
getPdata()


const myPromise = new Promise((resolve, reject) => {

})
