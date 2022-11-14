/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const mygtukas = document
    .getElementById("submit-btn")
    .addEventListener("click", (event) => {
        event.preventDefault();
        const kilos = document.getElementById("search").value;
        const pounds = kilos * 2.2046;
        const grams = kilos / 0.001;
        const ounces = kilos * 35.247;
        const tevas = document.getElementById("output");
        const liPound = document.createElement("li");
        const liGrams = document.createElement("li");
        const liOunces = document.createElement("li");
        liPound.className = "result";
        liPound.textContent = `${pounds} lb`;
        tevas.appendChild(liPound);
        liGrams.className = "result";
        liGrams.textContent = `${grams} g`;
        tevas.appendChild(liGrams);
        liOunces.className = "result";
        liOunces.textContent = `${ounces} oz`;
        tevas.appendChild(liOunces);
    });
