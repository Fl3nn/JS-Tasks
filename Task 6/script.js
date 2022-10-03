/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis:
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus visurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

const users = [
  { id: '1', name: 'John Smith', age: 20 },
  { id: '2', name: 'Ann Smith', age: 24 },
  { id: '3', name: 'Tom Jones', age: 31 },
  { id: '4', name: 'Rose Peterson', age: 17 },
  { id: '5', name: 'Alex John', age: 25 },
  { id: '6', name: 'Ronald Jones', age: 63 },
  { id: '7', name: 'Elton Smith', age: 16 },
  { id: '8', name: 'Simon Peterson', age: 30 },
  { id: '9', name: 'Daniel Cane', age: 51 },
];

let allAges = 0;
const getUserAverageAge = () => {
  users.forEach(user => {
    allAges = allAges + user.age;
  })
  console.log("Vidutinis amzius: " + Math.round(allAges / users.length));
}


const userNames = []

const getUsersNames = () => {
  let id = 0;
  users.forEach(user => {
    userNames[id] = user.name;
    id = id + 1;
  })
}




getUserAverageAge();
getUsersNames();

console.log(userNames);


// const filterDogOwers = () => {
//   let id = 0;
//   document.body.append("Have Doggies:");
//   users.forEach(user => {
//     if (user.hasDog === true) {
//       haveDoggies[id] = user.name;
//       age[id] = user.age;
//       const name = document.createElement("h3");
//       name.append(haveDoggies[id]);
//       document.body.append(name);
//       id = id + 1;
//     }
//   })
// }