const parolaSegreta = "CANE";  // Cambia con la parola che vuoi!
let tentativi = 0;
const maxTentativi = 6;

function creaGriglia() {
    const grid = document.getElementById("grid");
    for (let i = 0; i < maxTentativi * 4; i++) {
        const div = document.createElement("div");
        div.classList.add("letter-box");
        grid.appendChild(div);
    }
}

function checkGuess() {
    const guessInput = document.getElementById("guessInput");
    let guess = guessInput.value.toUpperCase();

    if (guess.length !== 4) {
        alert("La parola deve essere di 4 lettere!");
        return;
    }

    const grid = document.getElementById("grid");
    const rowStart = tentativi * 4;
    
    for (let i = 0; i < 4; i++) {
        const box = grid.children[rowStart + i];
        box.textContent = guess[i];

        if (guess[i] === parolaSegreta[i]) {
            box.classList.add("correct");
        } else if (parolaSegreta.includes(guess[i])) {
            box.classList.add("present");
        } else {
            box.classList.add("absent");
        }
    }

    tentativi++;
    guessInput.value = "";

    if (guess === parolaSegreta) {
        document.getElementById("message").textContent = "Brava! 🎉 Ecco a te il messaggio nascosto: Buon Compleanno (+7)! 🎂 Cordiali saluti dai tuoi compagnetti Giovanni Luca e Martina <3";
        guessInput.disabled = true;
        triggerFireworks();
        showDogs();
    } else if (tentativi >= maxTentativi) {
        document.getElementById("message").textContent = "Peccato! La parola era: " + parolaSegreta;
        guessInput.disabled = true;
    }
}

function createFirework(x, y) {
    for (let i = 0; i < 10; i++) {
        let firework = document.createElement("div");
        firework.classList.add("firework");
        firework.style.left = `${x + Math.random() * 100 - 50}px`;
        firework.style.top = `${y + Math.random() * 100 - 50}px`;
        firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.body.appendChild(firework);
        setTimeout(() => firework.remove(), 1000);
    }
}

function triggerFireworks() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createFirework(window.innerWidth / 2, window.innerHeight / 3);
        }, i * 500);
    }
}

function showDogs() {
    let dogs = ["dog1.png", "dog2.png", "dog3.png"];  // Usa i nomi delle immagini
    dogs.forEach((dog, index) => {
        let img = document.createElement("img");
        img.src = dog;
        img.classList.add("dog");
        img.style.left = `${20 + index * 150}px`;
        img.style.bottom = "20px";
        document.body.appendChild(img);
    });
}

window.onload = creaGriglia;



// Funzione per creare i fuochi d'artificio
function createFirework() {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    
    // Posizione casuale sulla pagina
    firework.style.left = `${Math.random() * window.innerWidth}px`;
    firework.style.top = `${Math.random() * window.innerHeight}px`;

    // Aggiungi il fuoco d'artificio alla pagina
    document.body.appendChild(firework);

    // Rimuovi il fuoco d'artificio dopo che l'animazione è finita
    setTimeout(() => {
        firework.remove();
    }, 1000); // Durata dell'animazione dei fuochi d'artificio
}

// Genera fuochi d'artificio ogni 0.5 secondi
setInterval(createFirework, 500);

// Funzione per adattare gli elementi in modo responsive
function adjustForMobile() {
    // Ridurre la dimensione dei cagnolini sui telefoni
    const dogs = document.querySelectorAll('.dog');
    dogs.forEach(dog => {
        dog.style.width = '80px';   // Aumenta la dimensione dei bassotti
        dog.style.left = '10px';     // Posizione più centrata
        dog.style.bottom = '40px';  // Posiziona i bassotti più in basso
    });

    // Cambiare la dimensione dei fuochi d'artificio e renderli più visibili
    const fireworks = document.querySelectorAll('.firework');
    fireworks.forEach(firework => {
        firework.style.width = '15px';    // Aumentare la dimensione
        firework.style.height = '15px';
        firework.style.backgroundColor = 'gold';  // Colore più visibile
        firework.style.animationDuration = '1s';   // Velocità dell'animazione
    });

    // Modifica la posizione del messaggio per dispositivi mobili
    const message = document.getElementById('message');
    if (message) {
        message.style.fontSize = '20px';  // Aumentare la leggibilità del messaggio
    }

    // Modifica il layout della griglia per avere più spazio
    const grid = document.getElementById('grid');
    if (grid) {
        grid.style.gridTemplateColumns = 'repeat(3, 50px)';  // Mostra solo 3 lettere per riga
    }
}

// Funzione che verifica la dimensione dello schermo
function checkForResponsiveDesign() {
    if (window.innerWidth <= 600) {
        adjustForMobile();  // Attiva le modifiche per dispositivi mobili
    }
}

// Verifica se il design è responsivo ogni volta che la finestra cambia dimensione
window.addEventListener('resize', checkForResponsiveDesign);

// Chiamata iniziale per verificare la dimensione della finestra
checkForResponsiveDesign();
