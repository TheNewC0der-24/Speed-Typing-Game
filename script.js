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
    // START COUNTDOWN
    setInterval(countdown, 1000);
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