// --------------- 1 ---------------- //
/*
let seriesFavoritasDeAna = ["Game of Thrones", "Breaking Bad", "House of Cards"];
let seriesFavoritasDeHector = ["En Terapia", "Recordando el Show de Alejandro Molina"]
let holaMundo = ["hola","mundo!"]
let holaHola = ["hola","hola!"]

console.log (seriesFavoritasDeAna)
console.log (seriesFavoritasDeHector)
console.log (holaMundo)
console.log (holaHola)
*/

// --------------- 2 ---------------- //

/*
let numerosDeLoteria = [2, 11, 17, 32, 36, 39];
let tiradasDelDado = [1, 6, 6, 2, 2, 4];
let salioCara = [false, false, true, false];
let listaDeListasDeNumeros = [[1, 6], [6, 2, 2, 4]];
console.log (numerosDeLoteria)
console.log (tiradasDelDado)
console.log (salioCara)
console.log (console.log(listaDeListasDeNumeros))
*/

// --------------- 3 ---------------- //

/*
let numerosDeLoteria = [2, 11, 17, 32, 36, 39];
let a = [].length
let b = numerosDeLoteria.length
let c = [4, 3].length

console.log(a,b,c)
*/

// --------------- 4 ---------------- //

//que porcentaje del array es positivo, negativo o cero
/*
function masMenos(francciones){
    let positivos = 0
    let negativos = 0
    let ceros = 0
    
    for ( i = 0; i < francciones.length; i++ ){
        if (francciones[i] > 0){
             positivos++
        } else if (francciones[i] < 0){
             negativos++
        } else if (francciones[i] == 0){
             ceros ++
        }
    }
    let suma = positivos + negativos + ceros
    let porcentaje = [positivos/suma, negativos/suma, ceros/suma]
    return porcentaje
}
console.log(masMenos([1, 2, 0, -1]))
*/

// --------------- 5 ---------------- //

/*
let pertenencias = [ "espada" , "escudo" , "antorcha" ];
console.log(pertenencias)
console.log(pertenencias.length)

pertenencias.push("amuleto mágico")
console.log(pertenencias)
console.log(pertenencias.length)
console.log(pertenencias[1])
*/

// --------------- 6 ---------------- //

/*
let unArray = [1, 2, 3];
let otroArray = [4, 5];

function trasladar(unArray, otroArray){
     let ultimo = unArray.pop()
     let agregado = otroArray.push(ultimo)
     // alternativa mas corta --------- otroArray.push( unArray.pop() )
     return agregado
}

console.log(unArray)
console.log(otroArray)

console.log("---------------")
trasladar(unArray,otroArray)

console.log(unArray)
console.log(otroArray)
*/

// --------------- 7 ---------------- //



// --------------- 8 ---------------- //



