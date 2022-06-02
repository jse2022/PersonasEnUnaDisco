import "./styles.css";

/**
 * Para tener control de la gente que hay en una disco el gerente quiere
saber cuantas personas de diferentes edades han entrado.
• No se han permitido la entrada a menores de 18 ni mayores de 40.
Para la carga de los datos se usa la función aleatorio (use la función
aleatorio(menorValor,mayorValor), es decir aleatorio(19,40))
• Se sabe que la cantidad total de personas dentro del local es de 270
• Se quiere saber:
• Cuántas personas son menores de 21 años
• Cuántas personas mayores o igual a 21 años
• Cuántas personas en total
 */
let contadorMenorVintiuno: number = 0;
let contadorMayorVintiuno: number = 0;

let arrayPersonas: number[] = Array(270);
for (let indice = 0; indice < 270; indice++) {
  arrayPersonas[indice] = Math.round(Math.random() * (40 - 18) + 18);
  if (arrayPersonas[indice] < 21) {
    contadorMenorVintiuno++;
  }
  if (arrayPersonas[indice] >= 21) {
    contadorMayorVintiuno++;
  }
}
console.log(`Edades de personas que ingresaron al boliche ${arrayPersonas}`);
console.log(
  `En la fecha ingresaron ${contadorMenorVintiuno} personas menores de 21 años`
);
console.log(
  `En la fecha ingresaron ${contadorMayorVintiuno} personas mayores de 21 años`
);
