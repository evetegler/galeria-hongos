function encontrarMaximo(a, b) {
    console.log("ejecutando la función encontrarMaximo");
    if (a > b) {
        return a;
    } else {
        return b;
    }
}


console.log("Declarando variables y llamando a la función encontrarMaximo");

let numero1 = 10;
let numero2 = 7;

let maximo = encontrarMaximo(numero1, numero2);

console.log("El máximo entre", numero1, "y", numero2, "es:", maximo);