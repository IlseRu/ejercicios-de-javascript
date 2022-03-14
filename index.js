
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

//////////////////////////////

const muestrameUnAnimal = () => {
    var opc=0;

    do{
    opc = Number (prompt( 'Please select an animal: \n 1. Dog 🐶 \n 2. Dolphin 🐬 \n 3. Exit 👋'));
    switch(opc){
        case 1: 
        document.write("Escogiste perro");
        console.log("escogiste perro");
        console.log("       _=,_");
        console.log("    o_/6 /#) ");
        console.log("    (__ |##/ ");
        console.log("     ='|--|");
        console.log("      /   #'-.");
        console.log("      ( #|_    _'-. /");
        console.log("        |/   _( # |''");
        console.log("snd    C/ ,--___/   ");

        break;
        case 2: 
        document.write("Escogiste delfín");
        console.log("escogiste delfín");
        console.log("              ,-.");
        console.log("             /  (  '");
        console.log("    *  _.--'!   '--._");
        console.log("      ,'              ''.");
        console.log("'    |!                   )");
        console.log("   _.'  O      ___       ! )");
        console.log("  (_.-^, __..-'  ''''--.   )");
        console.log("      /,'        '    _.' /");
        console.log("   '         *    .-''    |");
        console.log("                 (..--^.  '");
        console.log("                  mrf  | / ");
        console.log("                       '");
        break;
        case 3: 
        alert("Hasta luego");
    }
}while(opc!=3);
}

muestrameUnAnimal();