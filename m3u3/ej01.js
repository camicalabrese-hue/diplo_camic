function calcularPromedio(nota1, nota2) {
    const promedio = (nota1 + nota2) / 2;
    return promedio;
}

const notaPrimerParcial = 7.5;
const notaSegundoParcial = 5;

const promedioFinal = calcularPromedio(notaPrimerParcial, notaSegundoParcial);

console.log(`La nota del primer parcial es ${notaPrimerParcial}`);
console.log(`La nota del segundo parcial es ${notaSegundoParcial}`);
console.log(`El promedio de las notas es ${promedioFinal}`);