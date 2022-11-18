/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

window.onload = function () {
    let clicks = 0;
    const mygtukas = document.querySelector(".btn");
    mygtukas.addEventListener("click", skaiciavimas);

    function skaiciavimas() {
        clicks++;
        document.getElementById("btn_state").value = clicks;
        return clicks;
    }
};
