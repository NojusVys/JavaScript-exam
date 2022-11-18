/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

// const ENDPOINT = "cars.json";
const automobiliai = fetch("cars.json");
automobiliai
    .then((res) => {
        return res.json();
    })
    .then((data) => displayList(data))
    .catch((e) => console.log(e.message));

function displayList(data) {
    const container = document.getElementById("output");

    for (let i = 0; i < data.length; i++) {
        const gamintojas = document.createElement("li");
        gamintojas.className = "manufacturer";
        gamintojas.textContent = data[i].brand;
        container.appendChild(gamintojas);
        for (let j = 0; j < data[i].models.length; j++) {
            const modelis = document.createElement("li");
            modelis.className = "model";
            modelis.textContent = data[i].models[j];
            container.appendChild(modelis);
        }
    }
}
