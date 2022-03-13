
const sumar = (x,y) => {
    return console.log(x+y);
}

console.log("Ejercicio 1");
sumar(2,3);

//////////////////////////////


let array= [1,2,3,4,5,6,7,8,9,10];
let sumando=0;

console.log(array);

const sumarArreglos = (array) =>{

    for(let i = 0 ; i < array.length; i++){
        sumando = sumando + array[i];
        console.log("Sumando en el for: " + sumando);

    }
    console.log("total: " + sumando)
}

console.log("Ejercicio 2")
sumarArreglos(array);