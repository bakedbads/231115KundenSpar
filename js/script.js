"use strict";

const gutschein = [
    {
        id: 1,
        img: "img/alkfrei.jpg",
        wochentag: "Montag",
        angebot: "50% Rabatt auf alle alkoholfreien Getränke"
    },
    {   
        id: 2,
        img: "img/putzmittel.jpg",
        wochentag: "Dienstag",
        angebot: "30% Rabatt auf alle Reinigungsmittel"
    },
    {   
        id: 3,
        img: "img/alk.jpg",
        wochentag: "Mittwoch",
        angebot: "15% Rabatt auf alle alkoholischen Getränke"
    },
    {   
        id: 4,
        img: "img/käse.jpg",
        wochentag: "Donnerstag",
        angebot: "10% Rabatt auf alle Käsesorten"
    },
    {   
        id: 5,
        img: "img/pflanzen.jpg",
        wochentag: "Freitag",
        angebot: "20% Rabatt auf alle Pflanzen"
    },
    {   
        id: 6,
        img: "img/nudeln.jpg",
        wochentag: "Samstag",
        angebot: "10% Rabatt auf alle Nudelsorten"
    },
    {   
        id: 7,
        img: "img/süsses.jpg",
        wochentag: "Sonntag",
        angebot: "10% Rabatt auf alle Süßigkeiten"
    }
];

// ELEMENTE AUSWÄHLEN
const $img = document.getElementById("angebotImg");
const $wochentag = document.getElementById("wochentag");
const $angebot = document.getElementById("angebot");
const $title = document.getElementById("title");
const $anzahlWochenTitle = document.getElementById("anzahlWochenTitle");

const $prev = document.getElementById("prev");
const $next = document.getElementById("next");
const $anzahlWochenBtn = document.getElementById("anzahlWochenBtn");

// INITIALISIEREN
let currentPage = 0;


// ZEIGE TAG AUF BASIS DES AKTUELLEN ITEMS
function showPage(page){
    const currentDay = new Date().getDay();

    $img.src = gutschein[page].img;
    $wochentag.innerHTML = gutschein[page].wochentag;
    $angebot.innerHTML = gutschein[page].angebot;

    if (page === currentDay) {
        // Current day
        $title.textContent = "Heutiges Angebot!";
    } else if (page > currentDay) {
        // Future day
        $title.textContent = "Kommendes Angebot";
    } else {
        // Past day
        $title.textContent = "Vorheriges Angebot";
    }
}

// LADE ERSTES ELEMENT
window.addEventListener("DOMContentLoaded", function(){
    showPage(currentPage);
});

// ANZAHL WOCHE
let amountWeeks = 20;
if ($anzahlWochenTitle) {
    $anzahlWochenTitle.textContent = "Noch " + amountWeeks + " Wochen!";
}

// LADE ERSTES ELEMENT
window.addEventListener("DOMContentLoaded", function(){
    showPage(currentPage);
})

// NEXT PAGE
$next.addEventListener("click", function(){
    currentPage++;
    if(currentPage > gutschein.length - 1){
        currentPage = 0;
    }
    showPage(currentPage);
});

// PREV PAGE
$prev.addEventListener("click", function(){
    currentPage--;
    if(currentPage < 0){
        currentPage = gutschein.length - 1;
    }
    showPage(currentPage);
});
