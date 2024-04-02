/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let numPalo = Math.floor(Math.random() * 4);
  let numCarta = Math.floor(Math.random() * 12) + 1;
  checkType(numPalo, numCarta);
  iniciarCronometro();
};

window.checkType = function(palo, numero) {
  let palos = ["heart", "club", "spade", "diamond"];
  let paloSeleccionado = palos[palo];
  let numFinal = "";
  switch (numero) {
    case 1:
      numFinal = "A";
      break;
    case 10:
      numFinal = "J";
      break;
    case 11:
      numFinal = "Q";
      break;
    case 12:
      numFinal = "K";
      break;

    default:
      numFinal = numero;
      break;
  }
  let icono = "";
  switch (palo) {
    case 0:
      icono = "♥";
      break;
    case 1:
      icono = "♣";
      break;
    case 2:
      icono = "♠";
      break;
    case 3:
      icono = "♦";
      break;
    default:
      break;
  }
  crearCarta(paloSeleccionado, icono, numFinal);
};

window.crearCarta = function(paloSeleccionado, icono, numFinal) {
  let idCarta = document.getElementById("carta");
  idCarta.innerHTML = `<h1 class="${paloSeleccionado} d-flex ms-4">${icono}</h1> 
  <h1 class="numero">${numFinal}</h1>
  <h1 class="${paloSeleccionado}-turned d-flex me-4">${icono}</h1>`;
};

document.getElementById("newCard").addEventListener("click", e => {
  onload();
});

let segundos = 10;
let intervalo;

function iniciarCronometro() {
  clearInterval(intervalo);
  intervalo = setInterval(cronometro, 1000);
}

window.cronometro = function() {
  segundos--;
  document.getElementById("countdown").textContent = segundos;
  if (segundos === 0) {
    onload();
    segundos = 11;
  }
};

document
  .getElementById("submitBtn")
  .addEventListener("click", cambiarTamanoCarta);
document
  .getElementById("heightCard")
  .addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      let heightValue = document.getElementById("heightCard").value;
      let carta = document.getElementById("carta");
      carta.style.height = heightValue + "px";
    }
  });
document
  .getElementById("widthCard")
  .addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      let widthValue = document.getElementById("widthCard").value;
      let carta = document.getElementById("carta");
      carta.style.width = widthValue + "px";
    }
  });

function cambiarTamanoCarta() {
  let heightValue = document.getElementById("heightCard").value;
  let widthValue = document.getElementById("widthCard").value;
  let carta = document.getElementById("carta");
  carta.style.width = widthValue + "px";
  carta.style.height = heightValue + "px";
}

/*
function cambiarTamanoLetra() {
  let combi=(heightValue+widthValue)/2
  let valorTexto = document.getElementsByTagName("h1");
  switch (combi) {
    case combi >=375:
      valorTexto.style.fo=""
      break;
  
    default:
      break;
  }
}*/
