alert ("Despiertas, ves que un viejo y ciego anciano se para frente a ti.")
// ----------------------------DOWN----------------------------------


//     HERO BEGINS

let hero = prompt ("¿Tu nombre, aventurero?")
// let nivelheroe = Number (prompt("Asumo que sabes tu nivel..."))
// const HEROCLASS = "mago"
// const HEROCLASS2 = "oscuro"
// let claseheroe = prompt ("Dime tu clase, heroe.").toLowerCase()

// if (HEROCLASS == claseheroe){
//     alert ("Mago eh! Increible.")
    
//     let subclase = prompt ("¿Que clase de Mago eres?").toLowerCase()
//     if (subclase == HEROCLASS2){
//         alert ("Increible, tal y como dice la profesia")
//     }else {
//         alert ("Bien, no es del todo correcto pero creo que con esto deberia servir.")
//     }
// } else {
//     alert ("Ah, ya veo. No es lo que dice la profesia, pero creo que debera funcionar.")
// }

    // HERO LEVEL

// const HEROLEVEL = 100

// if (HEROLEVEL == nivelheroe){
//     alert ("Todo resulta como tiene que ser, eres quien dara fin a este mal y creo que sera pronto.")

// }else if (nivelheroe < 10){
//     alert ("Vaya, veo que tienes mucho camnio por delante.")

// }else if (nivelheroe < 25){
//     alert ("Eres joven aun, este viaje te dara la experiencia que necesitas.")

// }else if (nivelheroe < 50){
//     alert ("Mucho camino por detras y mucho por aprender. Acompañame viajero.")

// }else if (nivelheroe < 75){
//     alert ("Ya casi puedes con esta mision, puede mejorar aun un poco mas.")

// }else if (nivelheroe > 100){
//     alert ("Veo que no te tomas esto enserio. Ya vete.")
    
// }else{
//     alert ("Veo que no te tomas esto enserio. Ya vete.")
// } 

// ----------------------------UP----------------------------------


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

// ------------------------------- DOWN -----------------------------------

// let karma =[1, 2, 3, 5]
// total = karma.reduce((acc,elem)=> acc+elem, 0)

// Karma = [
//     {action: "help1", karmaPoint: 2},
//     {action: "help2", karmaPoint: 4},
//     {action: "help3", karmaPoint: 6},
//     {action: "help4", karmaPoint: 1},
// ]

// let totalkarmna = Karma.reduce((acc,Karma)=> acc + Karma.karmaPoint, 0)
// console.log(totalkarmna)

// -------------------------------- UP ------------------------------------

// ----------------------------DOWN----------------------------------


//     QUIZ DE ANIMAL ESPIRITU   -   ver de descartar idea por Karma Points
alert ("Un animal que cambia su forma segun tus sentimientos esta sentado a tu lado.")

// let cardinal1 = "norte"; let cardinal2 = "sur"; let cardinal3 = "oeste"; let cardinal4 = "este"
// let element1 = "aire"; let element2 = "tierra"; let element3 = "fuego"; let element4 = "aire"

// function quiz1(elemento) {
    let animalname = prompt ("¿Como se llama el animal que te acompaña?")
//     // let animalcardinal = prompt ("Dime el Punto " + Cardinal + " de tu Espiritu Animal")
//     let animalelement = prompt ("Cual es el elemento de tu Animal?")

//     if (animalelement == element1.toLowerCase()) {
//         console.log ("Bien, veo que " + animalname + " te permitira navegar por los enormes oceanos.")

//     } else if (animalelement == element2.toLowerCase()){
//         console.log ("Bien, veo que " + animalname + " te hara atravezar los continentes con sus fuertes patas.")

//     }else if (animalelement == element3.toLowerCase()){
//         console.log ("Bien, veo que " + animalname + " te hara dominar las profundidades de nuestro mundo.")
        
//     }
//     else if (animalelement == element4.toLowerCase()){
//         console.log ("Bien, veo que " + animalname + " te hara cruzar por los aires con sus enormes alas.")
        
//     }else{
//             console.log ("Creo que no llegaremos muy lejos, joven aventurero.")
//         }
        
//     }

// quiz1()

// ----------------------------UP----------------------------------


// let fighter1 = presentfight ()
// let fighter2 = presentfight ()

// if (fighter1.power > fighter2.power){
//     alert ("Winner is " + fighter1.fgtName)
// } else {
//     alert ("Winner is " + fighter2.fgtName)
// }

// function presentfight() {
//     let fgtName = prompt ("Repite tu nombre, luchador");
//     let fgtlvl = Number (prompt("Ah, si, tu nivel ¿Cual era?"));
//     let fgtstr = Number (prompt("¿Durante cuantos años has entrenado?"));

//     let fgtpower = fgtstr / 0.25 + fgtlvl * 0.25;

//     let fighter ={
//         nombre: fgtName,
//         level: fgtlvl,
//         strength: fgtstr,
//         power: fgtpower,
//     };
//     return fighter
// }

alert ("Una tenue luz ilumina seis cofres. El anciano se acerca a ellos.")

let weapons = ["X", "Gladius", "Excalibur", "Ultima", "Robins", "Yoichi", "Artemis"]
let wpnAtk = [0, 100, 150, 200, 100, 150, 200]
let wpnCrit = [0, 10, 15, 20, 10, 15, 20]

// class ChestWeapon {
//     constructor (wpnName, atk, critic){
//         this.wpnName = wpnName
//         this.atk = atk
//         this.critic = critic
//     }}

// let wpn1 = new ChestWeapon (weapons[1], 150, 10)
// let wpn2 = new ChestWeapon (weapons[2], 200, 15)
// let wpn3 = new ChestWeapon (weapons[3], 200, 20)
// let wpn4 = new ChestWeapon (weapons[4], 150, 10)
// let wpn5 = new ChestWeapon (weapons[5], 200, 15)
// let wpn6 = new ChestWeapon (weapons[6], 250, 20)


let bosses = ["Phantom", "Ancient Dragon", "Death King", animalname, "Singularity"]
let bossPower = [35, 80, 100, 150, 500]

// ----------------------------DOWN----------------------------------

//     IDEA GENERAR BOSS DESDE PET

// for (let i=0; i < mgkpower.length; i++){
//     if (mgkpower[i] >= bossPower[i]){
//         console.log ("The Boss " + bosses[i] + " has been defeated");
// }
// else {
//     console.log (bosses[i] + " has defeated you.")
//     if (bossPower[5] > mgkpower[5]){
//         bosses.push("Hero's Phantom")
//         console.log ("So, " + bosses[6] + " was born form the hero's death body.")
//     }
// }
// }


// ----------------------------UP----------------------------------

// Un Dado
// Math.round(Math.random()*6)

// Dos Dados
// function diceRoll (){
//     return Math.round(Math.random()*(12-6))+6
// }
    
const dice_roll=() => Math.round(Math.random()*(12-6))+6


let weaponChoise

do {weaponChoise = Number(prompt ("Escribe en el aire el numero de uno de los 6 cofres frente a ti y lo abrire."))
    if (isNaN(weaponChoise) || weaponChoise == 0 || weaponChoise >= 7)
    alert('Vamos, la forma del numero. Del 1 al 6');
}
while (isNaN(weaponChoise) || weaponChoise == 0 || weaponChoise >= 7);

if(weaponChoise == 1){
    alert ("Bien, has recogido " + weapons[1] + ", la espada del viejo heroe. Quizas puedas llegar lejos.")
        
}else if (weaponChoise == 2){
    alert ("Bien, has recogido " + weapons[2] + ", la espada del mito, con ella podras hacerle frente a lo que viene.")

}else if (weaponChoise == 3){
    alert ("Bien, has recogido " + weapons[3] + ", la espada sagrada, ve tranquilo, heroe. Los dioses estan de tu lado.")

}else if (weaponChoise == 4){
    alert ("Bien, has recogido " + weapons[4] + ", el arco del viejo heroe. Quizas puedas llegar lejos.")

}else if (weaponChoise == 5){
    alert ("Bien, has recogido " + weapons[5] + ", el arco del mito, con el podras hacerle frente a lo que viene.")

}else if (weaponChoise == 6){
    alert ("Bien, has recogido " + weapons[6] + ", el arco sagrado, ve tranquilo, heroe. Los dioses estan de tu lado.")

}


function wpnDice (diceMath) {
    let par1 = dice_roll();
    let par2 = wpnAtk[weaponChoise];
    let par3 = wpnCrit[weaponChoise];
    let heroLuck = diceMath((par3/par1)*par2);

    return heroLuck;
}

function btlResult(bossIndex) {
    let heroLuck = wpnDice(Math.floor);
    let bossPowerLevel = bossPower[bossIndex];
    return heroLuck - bossPowerLevel;
}


for (let i = 0; i < bosses.length; i++) {
    let resultadoBatalla = btlResult(i);

    if (resultadoBatalla > 0) {
        alert ("Victoria contra " + bosses[i] + "! Avanzas a la siguiente batalla.");
    } else {
        alert ("Has sido derrotado por " + bosses[i] + ". Fin de la aventura.");
        break;
    }
}




// document.getElementById('agregarTexto')
//     const nuevoParrafo = document.createElement('p');
    
//     nuevoParrafo.textContent = 'Inicio de historia.';





// let maximo = Math.max (5,6,7,8,9)
// let minimo = Math.min (5,6,7,8,9)
// Math.ceil (74.58)
// Math.floor (74.15)
// Math.random() *10
// Math.ceil(Math.random()*10)


//     TIRADA DE DADOS PARA POSIBLE "CONTINUE"


// let luckynumber1 = 7
// for(let diceluck = 1; diceluck <= 3; diceluck++){
//     let diceroll = Number(prompt("Antes que nada, probemos una juego de azar, imagina que tiras un dado. ¿Que numero creer que tiras? (Pista: Slevin)"))
//     if (diceroll == luckynumber1){
//         console.log ("Pasas la prueba")
//         break;
//     } else
//     console.log("Has fallado.")
// }