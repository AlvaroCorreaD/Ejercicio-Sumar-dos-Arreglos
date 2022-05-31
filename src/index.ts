let dimensionArreglo: number = 6;
let v1: number[] = [1, 2, 3, 4, 5, 6];
let v2: number[] = [1, 2, 3, 4, 5, 6];
let vSuma: number[] = new Array(dimensionArreglo);
let indice: number;

for (indice = 0; indice < dimensionArreglo; indice++) {
  vSuma[indice] = v1[indice] + v2[indice];
  console.log(vSuma[indice]);
}

// let arreglo1: number[] = new Array(6);
// let arreglo2: number[] = new Array(6);
// let sumaArreglos: number[] = new Array(6);
// let indice: number;

// for (indice = 0; indice < 6; indice++) {
//   arreglo1[indice] = Number(
//     prompt("Indique los elementos del primer arreglo:", indice, ":")
//   );
// }

// for (indice = 0; indice < 6; indice++) {
//   arreglo2[indice] = Number(
//     prompt("Ingrese los elementos del segundo arreglo:", indice, ":")
//   );
// }

// for (indice = 0; indice < 6; indice++) {
//   sumaArreglos[indice] = arreglo1[indice] + arreglo2[indice];
//   console.log(
//     "El  resultado de la suma de los elementos en los arreglos es:",
//     sumaArreglos[indice]
//   );
// }
