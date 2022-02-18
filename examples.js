/* Hagamos una función llamada 'perimetro' que nos diga el perimetri de una circulo
cuando le damos el radio como parámetro  (3.14 * radio * 2)*/

/* Luego hagamos otra función llamada 'area' que nos dé el área de un circulo
cuando recibe el radio como parámetro (3.14 *radio2)*/

const PI = 3.14;

function perimetroCirculo(radio){
    return PI  * radio * 2;
}

function perimetroCuadrado(lado) {
    return lado * 4;
}

let resultado = perimetroCirculo(2.5)

console.log(perimetro.toFixed(2));//  toFixed(se pasa  la cant de decimales que quiero que se muestre)