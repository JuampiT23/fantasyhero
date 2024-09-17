//     HERO BEGINS

let hero = prompt ("¿Tu nombre, aventurero?")
let nivelheroe = Number (prompt("Asumo que sabes tu nivel..."))
const HEROCLASS = "mago"
const HEROCLASS2 = "oscuro"
let claseheroe = prompt ("Dime tu clase, heroe.").toLowerCase()

if (HEROCLASS == claseheroe){
    alert ("Mago eh! Increible.")
    
    let subclase = prompt ("¿Que clase de Mago eres?").toLowerCase()
    if (subclase == HEROCLASS2){
        alert ("Increible, tal y como dice la profesia")
    }else {
        alert ("Bien, no es del todo correcto pero creo que con esto deberia servir.")
    }
} else {
    alert ("Ah, ya veo. No es lo que dice la profesia, pero creo que debera funcionar.")
}

    // HERO LEVEL

const HEROLEVEL = 100

if (HEROLEVEL == nivelheroe){
    alert ("Todo resulta como tiene que ser, eres quien dara fin a este mal y creo que sera pronto.")

}else if (nivelheroe < 10){
    alert ("Vaya, veo que tienes mucho camnio por delante.")

}else if (nivelheroe < 25){
    alert ("Eres joven aun, este viaje te dara la experiencia que necesitas.")

}else if (nivelheroe < 50){
    alert ("Mucho camino por detras y mucho por aprender. Acompañame viajero.")

}else if (nivelheroe < 75){
    alert ("Ya casi puedes con esta mision, puede mejorar aun un poco mas.")

}else if (nivelheroe > 100){
    alert ("Veo que no te tomas esto enserio. Ya vete.")
    
}else{
    alert ("Veo que no te tomas esto enserio. Ya vete.")
} 

// if (((HEROCLASS == claseheroe) && (HEROCLASS2 == subclase)) && (HEROLEVEL == nivelheroe)){
//     alert ("Increible. ¡El Heroe, Morrandir, ha llegado!")
// }

// POSIBLE PASADO - VER IDEA DE TIRADAD DE DADOS

// let pastTraining = Number(prompt("Dime tu Edad"))
// let futureTraining = Number (prompt("Dime cuantos años entrenaras"))

// for (let baseatk = pastTraining; baseatk <= futureTraining; baseatk++){
//     let training = Number (prompt("Cuantos enemigos derrotados?"))
//     console.log ("Iteracion N°" + iteration)
// }

//     TIRADA DE DADOS

let luckynumber1 = 7

for(let diceluck = 1; diceluck <= 3; diceluck++){
    let diceroll = Number(prompt("Antes que nada, probemos una juego de azar, imagina que tiras un dado. ¿Que numero creer que tiras? (Pista: Slevin)"))
    if (diceroll == luckynumber1){
        console.log ("Pasas la prueba")

        break;
        
    } else
    console.log("Has fallado.")
}

//     QUIZ DE ANIMAL ESPIRITU


// let cardinal1 = "norte"; let cardinal2 = "sur"; let cardinal3 = "oeste"; let cardinal4 = "este"
let element1 = "aire"; let element2 = "tierra"; let element3 = "fuego"; let element4 = "aire"

function quiz1(elemento) {
    let animalname = prompt ("¿Como se llama el animal que te acompaña?")
    // let animalcardinal = prompt ("Dime el Punto " + Cardinal + " de tu Espiritu Animal")
    let animalelement = prompt ("Cual es el elemento de tu Animal?")

    if (animalelement == element1.toLowerCase()) {
        console.log ("Bien, veo que " + animalname + " te permitira navegar por los enormes oceanos.")

    } else if (animalelement == element2.toLowerCase()){
        console.log ("Bien, veo que " + animalname + " te hara atravezar los continentes con sus fuertes patas.")

    }else if (animalelement == element3.toLowerCase()){
        console.log ("Bien, veo que " + animalname + " te hara dominar las profundidades de nuestro mundo.")
        
    }
    else if (animalelement == element4.toLowerCase()){
        console.log ("Bien, veo que " + animalname + " te hara cruzar por los aires con sus enormes alas.")
        
    }else{
            console.log ("Creo que no llegaremos muy lejos, joven aventurero.")
        }
        
    }

quiz1()




// function preguntitas(pais, capital) {
//     let nombre = prompt("nombre")
//     let respuesta_nombre = prompt ("cual es el elemento de " + pais + "?")

//     if (respuesta_nombre = elemento.toLowerCase()){
//         console.log ("Asi es")
//     }else{
//         console.log ("No.")
//     }
    
// }

// preguntitas()



// -------------------------------------------

// function userdesc (precio, descuento){

//     if (descuento < 0 || descuento > 100){
//         alert ("Ingresar un valor de 1 a 100")
//         return precio
//     }



//     return precio + "promo"
// }

// let promo = userdesc (15000, 50)

// userdesc()

// console.log (promo);


// let firebrand ={
//     clase: "Espada",
//     atributo: "Fuego",
//     daño: 250,
//     habilitada: true,
// }

// let icebrand ={
//     clase: "Espada",
//     atributo: "Hielo",
//     daño: 250,
//     habilitada: true,
// }

// console.log (icebrand)


// let welcome = "Bienvenido " + hero + ", nuevo heroe de Frehlz. Asi que tu nivel es " + nivelheroe + ". Ya veo, bien, empcecemos."

// console.log (welcome)