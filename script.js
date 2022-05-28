// PRELOADER
var loader = document.getElementById("loading");
function preLoader() {
    loader.style.display = "none";
}

window.addEventListener('load', init);

// GLOBAL VARIABLES
let time = 5;
let score = 0;
let isPlaying;

// DOM ELEMENTS VARIABLES
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = ['hat', 'river', 'lucky', 'statue', 'generate',
    'stubborn', 'cocktail', 'runaway', 'github', 'developer',
    'establishment', 'understanding', 'javascript', 'nutrition',
    'revolver', 'echo', 'siblings', 'investigate', 'horrendous',
    'symptom', 'laughter', 'successfully', 'master', 'space',
    'definition'];

// INITIALIZE GAME
function init() {
    // LOAD WORD FROM ARRAY
    showWord(words);
    // START MATCHING ON WORD INPUT
    wordInput.addEventListener("input", startMatch);
    // START COUNTDOWN
    setInterval(countdown, 1000);
    // CHECK GAME STATUS
    setInterval(checkStatus, 50);
}

// START MATCHING
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = 6;
        showWord(words);
        wordInput.value = "";
        score++;
    }
    // IF SCORE IS -1, DISPLAY 0
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

// MATCH currentWord TO wordInput
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = `<h4 class="mt-3 text-success" id="message">Correct ✅</h4>`;
        return true;
    } else {
        message.innerHTML = `<h4 class="mt-3 text-danger" id="message">Wrong ❌</h4>`;
        return false;
    }
}

// PICK & SHOW RANDOM WORD
function showWord(words) {
    // GENERATE RANDOM WORD
    const randIndex = Math.floor(Math.random() * words.length);
    const randWord = words[randIndex];
    // DISPLAY WORD IN DOM
    currentWord.innerHTML = randWord;
}

// COUNTDOWN TIMER
function countdown() {
    // MAKE SURE TIME IS NOT RAN OUT
    if (time > 0) {
        // DECREASE TIME BY 1
        time--;
    } else if (time === 0) {
        // GAME OVER
        isPlaying = false;
    }
    // DISPLAY TIME
    timeDisplay.innerHTML = time;
}

function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = `<h4 class="mt-3 badge bg-danger" id="message">Game Over☹️</h4>`;
        score = -1;
    }
}