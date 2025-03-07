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
    const guessInput = document.getElementById("guess");
    const guess = guessInput.value.toUpperCase();
    guessInput.value = "";

    if (guess === "CANE") {
        // Modifica il testo del messaggio
        document.getElementById("message").textContent = "Brava! 🎉 Hai sbloccato il messaggio nascosto! Buon Compleanno +7! 🎂 Cordiali saluti dai tuoi compagnetti di banco Giovanni Luca e Martina";

        // Rende visibile il messaggio
        const messageElement = document.getElementById("message");
        messageElement.style.display = "block";  // Impostiamo display su 'block' per renderlo visibile

        // Disabilita l'input per evitare ulteriori tentativi
        guessInput.disabled = true;

        // Avvia i fuochi d'artificio
        triggerFireworks();

        // Mostra i bassotti con i cappellini
        showDogs();
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
