const wordElement = document.getElementById("word");
const wrongLettersElement = document.getElementById("wrong-letters");
const playAgainButton = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
const finalMessageRevealWord = document.getElementById(
  "final-message-reveal-word"
);
const figureParts = document.querySelectorAll(".figure-part");

const words = [
  "mysterious",
  "adventure",
  "delightful",
  "champion",
  "fantastic",
  "celebrate",
  "wonderful",
  "imagination",
  "excitement",
  "creativity",
  "fascinating",
  "enchantment",
  "captivating",
  "colorful",
  "butterfly",
  "universe",
  "happiness",
  "sparkling",
  "incredible",
  "victorious",
  "brilliant",
  "discovery",
  "serendipity",
  "inspiration",
  "beautiful",
  "challenge",
  "journey",
  "vibrant",
  "tranquil",
  "application",
  "programming",
  "interface",
  "discord",
  "telegram",
  "guilded",
  "botnet",
  "qbot",
  "mirai",
  "rce",
  "silent",
  "instagram",
  "playstation",
  "function",
  "return",
  "length",
  "type",
  "node",
  "arguments",
  "paramaters",
  "forloop",
  "container",
  "instance",
  "response",
  "console", 
  "xbox",
  "Table",
  "controller",
  "multiplayer",
  "highscore",
  "strategy",
  "platformer",
  "roleplaying",
  "competitive",
  "adventure",
  "simulation",
  "headshot",
  "respawn",
  "achievement",
  "virtual",
  "nintendo",
  "playstation",
  "xbox",
  "joystick",
  "graphics",
  "arcade",
  "quest",
  "gamer",
  "keyboard",
  "console",
  "sandbox",
  "indie",
  "shooter",
  "online",
  "explore",
];
let selectedWord = words[Math.floor(Math.random() * words.length)];

let playable = true;

const correctLetters = [];
const wrongLetters = [];

function displayWord() {
  wordElement.innerHTML = `
    ${selectedWord
      .split("") // to array
      .map(
        (letter) => `
    <span class="letter">
    ${correctLetters.includes(letter) ? letter : ""}
    </span>
    `
      )
      .join("")} 
    `; // to string
  const innerWord = wordElement.innerText.replace(/\n/g, "");
  if (innerWord === selectedWord) {
    finalMessage.innerText = "Congratulations You won😃";
    finalMessageRevealWord.innerText = "";
    popup.style.display = "flex";
    playable = false;
  }
}

function UpdateWrongLetters() {
  wrongLettersElement.innerHTML = `
  ${wrongLetters.length > 0 ? "<p>Wrong</p>" : ""}
  ${wrongLetters.map((letter) => `<span>${letter}</span>`)}
  `;
  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;
    index < errors
      ? (part.style.display = "block")
      : (part.style.display = "none");
  });
  if (wrongLetters.length === figureParts.length) {
    finalMessage.innerText = "You killed the mf😕";
    finalMessageRevealWord.innerText = `The word was: ${selectedWord}`;
    popup.style.display = "flex";
    playable = false;
  }
}

function Notify() {
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
}

window.addEventListener("keypress", (e) => {
  if (playable) {
    const letter = e.key.toLowerCase();
    if (letter >= "a" && letter <= "z") {
      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          correctLetters.push(letter);
          displayWord();
        } else {
          Notify();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);
          UpdateWrongLetters();
        } else {
          Notify();
        }
      }
    }
  }
});

playAgainButton.addEventListener("click", () => {
  playable = true;
  correctLetters.splice(0);
  wrongLetters.splice(0);
  selectedWord = words[Math.floor(Math.random() * words.length)];
  displayWord();
  UpdateWrongLetters();
  popup.style.display = "none";
});

// Init
displayWord();
