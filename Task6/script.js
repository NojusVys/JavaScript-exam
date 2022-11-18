/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atliks nurodytas užduotis:
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus vidurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

const users = [
    { id: "1", name: "John Smith", age: 20 },
    { id: "2", name: "Ann Smith", age: 24 },
    { id: "3", name: "Tom Jones", age: 31 },
    { id: "4", name: "Rose Peterson", age: 17 },
    { id: "5", name: "Alex John", age: 25 },
    { id: "6", name: "Ronald Jones", age: 63 },
    { id: "7", name: "Elton Smith", age: 16 },
    { id: "8", name: "Simon Peterson", age: 30 },
    { id: "9", name: "Daniel Cane", age: 51 },
];

function calculateAverageAge(users) {
    let averageAge = 0;
    for (let i = 0; i < users.length; i++) {
        averageAge += users[i].age;
    }
    averageAge /= users.length;
    console.log("Vidutinis amžius: ");
    console.log(averageAge);
}
calculateAverageAge(users);

const namesArray = [];
function makeNamesArray(users, namesArray) {
    for (let i = 0; i < users.length; i++) {
        namesArray.push(users[i].name);
    }
    return namesArray;
}

console.log("Naujas vardų masyvas: ");
makeNamesArray(users, namesArray);
console.log(namesArray);
