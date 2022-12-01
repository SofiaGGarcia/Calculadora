var n1, n2, suma, resta, mult, div;
n1 = parseInt(prompt("Ingrese el primer numero"));
n2 = parseInt(prompt("Ingrese el segundo numero"));
///////VALIDACIONES //////////////////////////////////
while (isNaN(n1 && n2)){
    n1=parseInt(prompt("Ingrese número 1"))
    n2=parseInt(prompt("Ingrese número 2"))
}
if (n1 <= 0 || n2 <= 0){
    n1=parseInt(prompt("Ingrese número 1"))
    n2=parseInt(prompt("Ingrese número 2"))
}
////////////////////

suma = n1 + n2;
resta = n1 - n2;
mult = n1 * n2;
div = n1 / n2;
if (mult == 0){
    mult = 1;}
alert("Suma: " + suma);
alert("Resta: " + resta);
alert("Multiplicacion: " + mult);
alert("Division: " + div);

console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicacion: " + mult);
console.log("Division: " + div);