let dimensionArreglo: number = 6;
let v1: number[] = [1, 2, 3, 4, 5, 6];
let v2: number[] = [1, 2, 3, 4, 5, 6];
let vSuma: number[] = new Array(dimensionArreglo);
let indice: number;

for (indice = 0; indice < dimensionArreglo; indice++) {
  vSuma[indice] = v1[indice] + v2[indice];
}

console.log("La suma de los elementos en los vectores es: " + vSuma);
