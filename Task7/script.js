/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
    make: "audi",
    model: "A6",
    year: 2005,
    color: "white",
};

const objectKeysArray = [];
function showObjectKeys(item, objectKeysArray) {
    objectKeysArray.push = Object.keys(item);
    return objectKeysArray;
}
showObjectKeys(audi, objectKeysArray);
console.log(`Objekto "keys" masyvas: `);
console.log(objectKeysArray);
