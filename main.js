const weapons = ["Gladius", "Artemis", "Ultima", "Robins", "Excalibur", "Yoichi"];
const wpnAtk = [20, 60, 70, 30, 40, 50];
const bosses = ["Gran Águila", "Dragón del Cielo", "Mago Muerto", "Quimera", "Usurpador del Trono"];
const bossImages = ["Fields.jpg", "Summit.jpg", "Graveyard.jpg", "Forest.jpg", "Castle.jpg"];
let bossPower = [];
let heroAttack;
let currentBossIndex = 0;

let heroName, heroClass, petName;

const dice_roll = () => Math.floor(Math.random() * (12 - 6 + 1)) + 6;

const formulario = document.getElementById('formulario-heroe');
const aventura = document.getElementById('aventura');
const descripcionAventura = document.getElementById('descripcion-aventura');
const imagenAventura = document.getElementById('imagen-aventura');
const opcionesArmas = document.getElementById('opciones-armas');

async function obtenerBossPower() {
    const maxPokemonId = 898;
    bossPower = [];
    for (let i = 0; i < bosses.length; i++) {
        const randomId = Math.floor(Math.random() * maxPokemonId) + 1;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        const data = await response.json();
        const baseStat = data.stats[0].base_stat * 5;
        bossPower.push(baseStat);
    }
}

formulario.addEventListener('submit', async function (e) {
    e.preventDefault();

    heroName = document.getElementById('nombre').value.trim();
    heroClass = document.getElementById('clase').value.trim();
    petName = document.getElementById('mascota').value.trim();

    if (heroName && heroClass && petName) {
        await obtenerBossPower();

        Swal.fire({
            icon: 'success',
            title: `Así que eres ${heroName} el ${heroClass}`,
            text: `Veo que te acompaña ${petName}.`
        });

        formulario.style.display = 'none';
        descripcionAventura.innerHTML = "Te encuentras en una cueva oscura. Solo hay un camino hacia adelante.";
        imagenAventura.src = "img/Cueva.jpg";
        aventura.style.display = 'block';

        iniciarSeleccionArma();
    }
});

function iniciarSeleccionArma() {
    descripcionAventura.innerHTML = "Encuentras 6 cofres en la cueva. Elige un número para abrir un cofre y obtener un arma.";
    imagenAventura.src = "img/Cueva.jpg";
    opcionesArmas.innerHTML = '';

    for (let i = 0; i < 6; i++) {
        const boton = document.createElement('button');
        boton.classList.add('btn', 'btn-dark', 'mx-2');
        boton.innerText = i + 1;
        boton.onclick = () => seleccionarArma(i);
        opcionesArmas.appendChild(boton);
    }
}

function seleccionarArma(indice) {
    const arma = weapons[indice];
    heroAttack = wpnAtk[indice];

    Swal.fire({
        icon: 'info',
        title: `¡Has encontrado ${arma}!`,
        text: `Sientes su poder recorrer tu cuerpo.`
    });

    iniciarEnfrentamiento();
}

function iniciarEnfrentamiento() {
    if (currentBossIndex >= bosses.length) {
        finalizarAventura(`Has derrotado a todos los Guardianes. ${petName} vuelve a su forma original y recuerdas que no eres ${heroClass}, eres el príncipe del reino y por fin has recuperado tu vida junto a la princesa.`);
        return;
    }

    const boss = bosses[currentBossIndex];
    const bossImage = bossImages[currentBossIndex];
    const bossAtk = bossPower[currentBossIndex];

    descripcionAventura.innerHTML = `Te encuentras con ${boss}. Poder del enemigo: ${bossAtk}.`;
    imagenAventura.src = `img/${bossImage}`;

    const botonDado = document.createElement('button');
    botonDado.classList.add('btn', 'btn-primary');
    botonDado.innerText = "Atacar al enemigo.";
    botonDado.onclick = () => enfrentarBoss(boss, bossAtk);
    opcionesArmas.innerHTML = '';
    opcionesArmas.appendChild(botonDado);
}

function enfrentarBoss(boss, bossAtk) {
    const roll = dice_roll();
    const totalAttack = roll * heroAttack;

    if (totalAttack >= bossAtk) {
        Swal.fire({
            icon: 'success',
            title: "¡Victoria!",
            text: `Has derrotado a ${boss}.`
        });
        currentBossIndex++;
        iniciarEnfrentamiento();
    } else {
        finalizarAventura(`Has sido derrotado por ${boss}. Sientes que tu cuerpo cae, pero tu alma permanece.`, "gameOver.jpg");
    }
}

function finalizarAventura(mensaje, imagen = "Ending.jpg") {
    Swal.fire({
        icon: 'info',
        title: mensaje,
    });

    descripcionAventura.innerHTML = "";
    imagenAventura.src = `img/${imagen}`;
    opcionesArmas.innerHTML = '';

    const botonReiniciar = document.createElement('button');
    botonReiniciar.classList.add('btn', 'btn-success');
    botonReiniciar.innerText = "Volver a la Cueva.";
    botonReiniciar.onclick = reiniciarAventura;
    opcionesArmas.appendChild(botonReiniciar);
}

function reiniciarAventura() {
    formulario.style.display = 'block';
    aventura.style.display = 'none';
    currentBossIndex = 0;
}
