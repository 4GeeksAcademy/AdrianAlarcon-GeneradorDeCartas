/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let numPalo = Math.floor(Math.random() * 4);
  let numCarta = Math.floor(Math.random() * 12) + 1;

  crearCarta(numPalo, numCarta);
};

window.crearCarta = function(palo, numero) {
  let palos = ["heart", "club", "spade", "diamond"];
  let paloSeleccionado = palos[palo];
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
      icono = "";
      break;
  }
  let idCarta = document.getElementById("carta");
  idCarta.innerHTML = `<h1 class="${paloSeleccionado} d-flex ms-4">${icono}</h1> 
  <h1 class="numero">${numero}</h1>
  <h1 class="${paloSeleccionado}-turned d-flex me-4">${icono}</h1>`;
};
