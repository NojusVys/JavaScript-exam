/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let clicks = 0;
const mygtukas = document
    .querySelector(".btn")
    .addEventListener("click", hello);

function hello() {
    const states = mygtukas.getElementById("btn_state");
    clicks += 1;
    console.log(states);
}
