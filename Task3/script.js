/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

// const ENDPOINT = "https://api.github.com/users";

document.getElementById("btn").addEventListener("click", (event, ENDPOINT) => {
    event.preventDefault();
    const vartotojai = fetch("https://api.github.com/users");
    vartotojai
        .then((res) => {
            return res.json();
        })
        .then((data) => displayList(data))
        .catch((e) => console.log(e.message));
    document.getElementById("btn").style = "display: none";
    document.getElementById("message").style = "display: none";
});

function displayList(data) {
    const container = document.getElementById("output");

    for (let i = 0; i < data.length; i++) {
        const prisijungimas = document.createElement("li");
        prisijungimas.className = "login";
        const nuotraukosURL = document.createElement("li");
        nuotraukosURL.className = "avatar-url";
        prisijungimas.textContent = data[i].login;
        nuotraukosURL.textContent = data[i].avatar_url;
        container.appendChild(prisijungimas);
        container.appendChild(nuotraukosURL);
    }
}
