"use strict"
let num1;
let num2;
let operacion;
let resultado;

alert("Bienvenido a la calculadora web");
operacion = prompt("¿Que operacion quiere realizar", operacion);
num1 = parseFloat(prompt("dame un numero", num1));
num2 = parseFloat(prompt("dame otro numero", num2));
if (operacion === "suma"||operacion==="Suma") {
    sum(num1, num2); 
} 


function sum(num1, num2) {
    resultado = num1 + num2;
    alert("El resultado de la suma es" + resultado);
}
if (operacion=== "resta"||operacion=="Resta"){
    rest(num1,num2) 
}

    function rest(num1, num2) {
        resultado = num1 - num2;
        alert("El resultado de la resta es" + resultado);
    }

    if (operacion=== "multiplicacion"||operacion=="Multiplicacion"){
        multi(num1,num2) 
    }
    

    function multi(num1, num2) {
        resultado = num1 * num2;
        alert("El resultado de la multiplicacion es" + resultado);
    }

    if (operacion=== "Division"||operacion=="division"){
        division(num1,num2) 
    }

    function division(num1,num2){
        resultado = num1/num2;
        alert("El resultado de la division es "+ resultado);
    }