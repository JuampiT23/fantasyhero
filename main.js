const formulario = document.getElementById('formulario-heroe');
const nombreHeroeInput = document.getElementById('nombre-heroe');
const puntosAtaqueInput = document.getElementById('puntos-ataque');
const nombreMascotaInput = document.getElementById('nombre-mascota');
const mensajeBienvenida = document.getElementById('mensaje-bienvenida');
const botonSiguiente = document.getElementById('boton-siguiente');
const encuentro = document.getElementById('encuentro');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombreHeroe = nombreHeroeInput.value.trim();
    const puntosAtaque = parseInt(puntosAtaqueInput.value);
    const nombreMascota = nombreMascotaInput.value.trim();

    if (nombreHeroe && puntosAtaque <= 255 && nombreMascota) {
        mensajeBienvenida.innerHTML = `<p>¡Tu nombre es ${nombreHeroe}! Recuerdas que estas en una mision, un viaje. Quien te acompaña es ${nombreMascota}, no sabes de donde salio o desde cuando la conoces pero se nota que esta de tu lado.</p>`;
        
        botonSiguiente.style.display = 'block';
    
        formulario.style.display = 'none';
    } else {
        mensajeBienvenida.innerHTML = '<p class="text-danger">Por favor, completa correctamente todos los campos.</p>';
    }
});

botonSiguiente.addEventListener('click', function() {
    encuentro.style.display = 'block';
    
    botonSiguiente.style.display = 'none';
});

let weapons = ["X", "Gladius", "Excalibur", "Ultima", "Robins", "Yoichi", "Artemis"];
let wpnAtk = [0, 100, 150, 200, 100, 150, 200];
let wpnCrit = [0, 10, 15, 20, 10, 15, 20];

const cofres = document.getElementById('cofres');
const resultadoArma = document.getElementById('resultado-arma');

botonSiguiente.addEventListener('click', function() {
    cofres.style.display = 'block';
});

    cofres.addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON') {
            let weaponChoise = Number(e.target.getAttribute('data-num'));
            let mensaje = '';
        switch (weaponChoise) {
            case 1:
                mensaje = `Bien, has recogido ${weapons[1]}, la espada del viejo héroe. Quizás puedas llegar lejos.`;
                break;
            case 2:
                mensaje = `Bien, has recogido ${weapons[2]}, la espada del mito, con ella podrás hacerle frente a lo que viene.`;
                break;
            case 3:
                mensaje = `Bien, has recogido ${weapons[3]}, la espada sagrada. Ve tranquilo, héroe. Los dioses están de tu lado.`;
                break;
            case 4:
                mensaje = `Bien, has recogido ${weapons[4]}, el arco del viejo héroe. Quizás puedas llegar lejos.`;
                break;
            case 5:
                mensaje = `Bien, has recogido ${weapons[5]}, el arco del mito, con él podrás hacerle frente a lo que viene.`;
                break;
            case 6:
                mensaje = `Bien, has recogido ${weapons[6]}, el arco sagrado. Ve tranquilo, héroe. Los dioses están de tu lado.`;
                break;
            default:
                mensaje = 'Número no válido.';
        }
        resultadoArma.innerHTML = `<p class="text-success">${mensaje}</p>`;

        cofres.style.display = 'none';
    }
});