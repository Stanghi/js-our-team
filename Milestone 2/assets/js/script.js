/*
DONE - MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

DONE - MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto

DONE - MILESTONE 2:
Stampare le stesse informazioni su DOM sotto forma di stringhe

TODO - MILESTONE 3:
Stampare delle card formattate contenete immagini e testo (La grafica fornita è solo un esempio ma sentitevi liberi di “graficare” come preferite)

TODO - BONUS:
Aggiungere degli aggettivi (più di uno) che identifichino ogni persona e stamparli nella card
*/

let team = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    }
];
let listTeam = document.querySelector(".container");

for (let indice in team){
    const person = team[indice];

    let printIndice = parseInt(indice) + 1;

    listTeam.innerHTML += `
    <p class="m-0"><strong>PERSON ${printIndice}</strong></p>
    <ul class="m-1">
        <li><strong>Nome:</strong> ${person.nome}</li>
        <li><strong>Ruolo:</strong> ${person.ruolo}</li>
        <li><strong>Foto:</strong> ${person.foto}</li>
    </ul>`;
}

