console.clear; // para borrar la terminal


let nombre ='Alejandro';
let apellido = 'Iñigues';
let edad = 27;
let casado = false;
const dni = 12321231;

let inscripto; //undefined lo contrario es true 
let comentario = "" //lo contrario es true
let cero = 0;  //lo contrario es true
console.log(true || true);//true
console.log(true || false);//true
console.log(true && true);//true
console.log(true && false);// false
console.log(!true && !false);//false

//let nombreCompleto = nombre + " " + apellido; concatenar 2 variables
//console.log(typeof nombre); // typeof devuelve el tipo de dato de la variable
 let nombreCompleto = `${nombre}  ${apellido}`;

 let salarioEnero = 200;
 let salarioFebrero = "300";
 let salarioMarzo = 400;

 let  salario1erTrismetre  = salarioEnero + +salarioFebrero + salarioMarzo; // el + pegado a la variable es para parsear el number a string

 // let departamento = "5d"   parseInt() es para transformar un strig a un number hasta la 1ª letra de izq a der
 // Number(depatamento); tambien parsea pero solo numeros sin letras ej "5"

console.log(salario1erTrismetre);

// operadores

//modulo

console.log(5%2);

//operadores logicos
/* || OR 
&& y
! NOT */




