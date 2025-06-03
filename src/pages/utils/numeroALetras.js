// src/pages/utils/numeroALetras.js

const unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
const especiales = ["diez", "once", "doce", "trece", "catorce", "quince"];
const decenas = ["", "diez", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
const centenas = ["", "ciento", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];

function numeroALetras(num) {
  if (num === 1000) return "mil";
  if (num === 100) return "cien";

  const c = Math.floor(num / 100);
  const d = Math.floor((num % 100) / 10);
  const u = num % 10;

  let resultado = "";

  // Centenas
  if (c > 0) {
    resultado += centenas[c] + " ";
  }

  // Decenas especiales (10-15)
  if (d === 1 && u <= 5) {
    resultado += especiales[u];
  }
  // Dieci...
  else if (d === 1) {
    resultado += "dieci" + unidades[u];
  }
  // Veinte...
  else if (d === 2 && u !== 0) {
    resultado += "veinti" + unidades[u];
  }
  // Treinta y ...
  else if (d >= 3) {
    resultado += decenas[d];
    if (u > 0) {
      resultado += " y " + unidades[u];
    }
  }
  // Solo unidades
  else if (d === 0 && u > 0) {
    resultado += unidades[u];
  }

  return resultado.trim();
}

export default numeroALetras;
