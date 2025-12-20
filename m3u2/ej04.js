const numeros = [57, 88, 150, 5, 7, 16, 19, 87, 160, 102, 140, 12];

let mayor = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > mayor) {
    mayor = numeros[i];
  }
}

console.log(`El mayor de estos numeros ${numeros} es ${mayor}`);

