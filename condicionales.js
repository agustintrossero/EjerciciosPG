// --------------- 1 ---------------- //

/*
function sePoneLaOlla (x){
    if (x=="Domingo"){
        return "¡Pongamos, la olla, hoy se comen pastas!"
    } else {
        return "mejor lo dejamos para el domingo"
    }
}
console.log(sePoneLaOlla("Domingo"))
console.log(sePoneLaOlla("Martes"))
*/

// --------------- 2 ---------------- //

/*
function elMayor(a,b){
    if (a > b){
        return a
    } else {
        return b
    }
}
console.log(elMayor(4,5))
console.log(elMayor(10,4))
*/

// --------------- 3 ---------------- //

/*
function signo(x){
    if (x >= 1) {
        return 1
    } else if (x == 0) {
        return 0
    } else {
        return -1
    }
}

console.log(signo(54))
console.log(signo(0))
console.log(signo(-133))
*/

// --------------- 3 ---------------- //

/*
function puedoIrAlBanco(diaDeLaSemana, horaActual){
    return (diaDeLaSemana == "Lunes" || 
            diaDeLaSemana == "Martes" || 
            diaDeLaSemana == "Miercoles" || 
            diaDeLaSemana == "Jueves" || 
            diaDeLaSemana == "Viernes") && 
            (horaActual >= 10 && horaActual <= 15) 
}
console.log (puedoIrAlBanco("Lunes", 11))
console.log (puedoIrAlBanco("Martes", 13))
console.log (puedoIrAlBanco("Jueves", 8))
console.log (puedoIrAlBanco("Sabado", 10))
*/

// --------------- 4 ---------------- //

/*
function filosofoHipster(profesion, nacionalidad, km){
    return (profesion == "Musico" && 
    nacionalidad == "Argentina" && 
    km >= 2)
}
console.log(filosofoHipster("Musico", "Argentina", 2))
console.log(filosofoHipster("Musico", "Colombia", 2))
console.log(filosofoHipster("Abogado", "Argentina", 2))
console.log(filosofoHipster("Musico", "Argentina", 5))
console.log(filosofoHipster("Musico", "Argentina", 1))
*/

// --------------- 5 ---------------- //

/*
function pagoConTarjeta(seCobraInteres, cuotasTarjeta, efectivoDisponible) {
    return !seCobraInteres  && 
    cuotasTarjeta >=3  || 
    efectivoDisponible < 100;
 }

 console.log (pagoConTarjeta (true, 6, 320))
 console.log (pagoConTarjeta (true, 2, 80))
 console.log (pagoConTarjeta (true, 3, 20))
 console.log (pagoConTarjeta (true, 1, 400))
*/


// --------------- 6 ---------------- //

/*

//Tiene que ser un número positivo. Tiene que ser múltiplo de 2 o de 3  No tiene que ser el número 15
function esNumeroDeLaSuerte (x){
    return ((x>0 && x!==15) && (x%2==0 || x%3==0))
}
console.log(esNumeroDeLaSuerte(15))
console.log(esNumeroDeLaSuerte(3))
console.log(esNumeroDeLaSuerte(0))
console.log(esNumeroDeLaSuerte(10))
*/

// --------------- 7 ---------------- //

//Tené en cuenta que el mínimo de edad para realizar el trámite para las mujeres (género "F") es de 60 años, mientras que para los hombres (género "M") es 65. En ambos casos, se deben contar con al menos 30 años de aportes jubilatorios.
/*
function puedeJubilarse(edad, genero, aniosAporte){
    return ((edad >= 60 && genero == "F" && aniosAporte >=30) ||
            (edad >= 65 && genero == "M" && aniosAporte >=30))
}
console.log (puedeJubilarse(68,"M",30))
console.log (puedeJubilarse(68,"F",30))
console.log (puedeJubilarse(60,"M",40))
console.log (puedeJubilarse(60,"F",34))
*/

// --------------- 7 ---------------- //

//Alcanzar la altura mínima de 1.5m (o 1.2m si está acompañada por un adulto) No tener ninguna afección cardíaca
/*
function  puedeSubirse(altura, compania, cardiaco){
    return ((altura >= 1.5 || altura >= 1.2 && compania) &&
            !cardiaco)
}
console.log(puedeSubirse(1.2,true,false))
console.log(puedeSubirse(1.5,false,true))
console.log(puedeSubirse(1,true,false))
*/

// --------------- 8 ---------------- //

/*
function medallaSegunPuesto(x){
    if (x == 1){
        return "Oro"
    } else if (x == 2) {
        return "Plata"
    } else if (x == 3) {
        return "Bronce"
    } else if (x >= 4) {
        return "Segui participando"
    }
}
console.log( medallaSegunPuesto(1))
console.log( medallaSegunPuesto(2))
console.log( medallaSegunPuesto(3))
console.log( medallaSegunPuesto(4))
console.log( medallaSegunPuesto(5))
*/

// --------------- 9 ---------------- //





