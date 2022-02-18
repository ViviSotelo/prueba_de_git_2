console.clear;

let nombreAlumna ='Paula';
let apellidoAlumna = 'Burgos';
let edadAlumna = 41;
let estadoCivilAlumna = false;
const dniAlumna = 12321231;

let nombreAlumno ='Daniel';
let apellidoAlumno = 'Britos';
let edadAlumno = 35;
let estadoCivilAlumno = false;
const dniAlumno = 12321231;

/* consol.log (`${nombreAlumna}  ${apellidoalumna}`);
console.log(`${nombreAlumno}  ${apellidoalumnao`);*/

function nombreCompleto(nombre, apellido = "no declarado") {
    return console.log(`${nombre} ${apellido}`);
}

/* nombreComleto('Pablo','Mendez'); */


function ingresos(a,b){
    return a + b;
}
function gastos(a,b){
    return a + b;
}
function saldo(ingresos, gastos){
    return ingresos - gastos;
}

console.log(saldo(ingresos(20, 30), gastos(10,5)));
