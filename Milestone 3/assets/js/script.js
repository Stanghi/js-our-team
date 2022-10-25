/*
DONE - MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

DONE - MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto

DONE - MILESTONE 2:
Stampare le stesse informazioni su DOM sotto forma di stringhe

DONE - MILESTONE 3:
Stampare delle card formattate contenete immagini e testo (La grafica fornita è solo un esempio ma sentitevi liberi di “graficare” come preferite)

TODO - BONUS:
Aggiungere degli aggettivi (più di uno) che identifichino ogni persona e stamparli nella card
*/

let team = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg",
        aggettivi: [
            "Professionale",
            "Rispettoso"
        ]
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg",
        aggettivi: [
            "Puntuale",
            "Curiosa"
        ]
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg",
        aggettivi: [
            "Curioso",
            "Responsabile"
        ]
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg",
        aggettivi: [
            "Responsabile",
            "Rispettosa"
        ]
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg",
        aggettivi: [
            "professionale",
            "Ambizioso"
        ]
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg",
        aggettivi: [
            "Affidabile",
            "Attenta"
        ]
    }
];
let listTeam = document.querySelector(".container");

for (let indice in team){
    const person = team[indice];

    let aggettivoOutput = "";

    for (let aggettivo of person.aggettivi){
        aggettivoOutput += `<span class="badge p-1 me-1 text-bg-primary">${aggettivo}</span>`;
    }

    listTeam.innerHTML += `
    <div class="card-box">
        <div class="ms-card">
            <img src="assets/img/${person.foto}" alt="${person.nome}" class="card-image">
            <div class="card-description">
                <p class="text-title">${person.nome}</p>
                <p class="text-body">${person.ruolo}</p>
                <div>
                    ${aggettivoOutput}
                </div>
            </div>
        </div>
    </div>`;
}






