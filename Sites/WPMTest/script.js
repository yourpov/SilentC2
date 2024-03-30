const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const endgameElement = document.getElementById("end-game-container");
const settingsButton = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

// List of words for game
const words = [
  "sigh",
  "tense",
  "airplane",
  "ball",
  "pies",
  "juice",
  "warlike",
  "bad",
  "north",
  "dependent",
  "steer",
  "silver",
  "highfalutin",
  "superficial",
  "quince",
  "eight",
  "feeble",
  "admit",
  "drag",
  "loving",
  "hacker",
  "dragon",
  "exhale",
  "anxious",
  "aircraft",
  "sphere",
  "pastries",
  "beverage",
  "aggressive",
  "unfavorable",
  "northern",
  "reliant",
  "navigate",
  "sterling",
  "grandiose",
  "shallow",
  "quinoa",
  "octal",
  "frail",
  "acknowledge",
  "pull",
  "affectionate",
  "programmer",
  "mythical creature",
  "online multiplayer",
  "top score",
  "tactical",
  "jumping game",
  "role-playing",
  "competitive gaming",
  "quest",
  "simulation",
  "precision shot",
  "cat",
  "dog",
  "apple",
  "orange",
  "banana",
  "grape",
  "watermelon",
  "pineapple",
  "kiwi",
  "mango",
  "pear",
  "peach",
  "plum",
  "cherry",
  "strawberry",
  "blueberry",
  "raspberry",
  "blackberry",
  "lemon",
  "lime",
  "coconut",
  "pomegranate",
  "apricot",
  "fig",
  "date",
  "olive",
  "pumpkin",
  "squash",
  "zucchini",
  "carrot",
  "potato",
  "tomato",
  "cucumber",
  "lettuce",
  "spinach",
  "kale",
  "broccoli",
  "cauliflower",
  "celery",
  "onion",
  "garlic",
  "ginger",
  "pepper",
  "salt",
  "sugar",
  "flour",
  "butter",
  "cheese",
  "milk",
  "yogurt",
  "egg",
  "bacon",
  "sausage",
  "ham",
  "chicken",
  "beef",
  "pork",
  "fish",
  "shrimp",
  "lobster",
  "crab",
  "clam",
  "oyster",
  "scallop",
  "squid",
  "octopus",
  "mushroom",
  "bean",
  "pea",
  "lentil",
  "chickpea",
  "soybean",
  "rice",
  "pasta",
  "bread",
  "cake",
  "cookie",
  "pie",
  "ice cream",
  "chocolate",
  "candy",
  "snack",
  "beverage",
  "juice",
  "smoothie",
  "coffee",
  "tea",
  "soda",
  "water",
  "lemonade",
  "margarita",
  "wine",
  "beer",
  "whiskey",
  "vodka",
  "rum",
  "gin",
  "cocktail",
  "mocktail",
  "fizz",
  "punch",
  "sprite",
  "coke",
  "pepsi",
  "root beer",
  "ginger ale",
  "tonic water",
  "club soda",
  "flavored water",
  "sports drink",
  "energy drink",
  "iced tea",
  "hot chocolate",
  "chai",
  "matcha",
  "latte",
  "cappuccino",
  "espresso",
  "macchiato",
  "frappuccino",
  "americano",
  "mocha",
  "smoothie bowl",
  "protein shake",
  "milkshake",
  "cocktail",
  "appetizer",
  "soup",
  "salad",
  "sandwich",
  "burger",
  "pizza",
  "pasta",
  "sushi",
  "taco",
  "burrito",
  "quesadilla",
  "nachos",
  "wings",
  "fries",
  "onion rings",
  "mozzarella sticks",
  "spring rolls",
  "egg rolls",
  "potstickers",
  "empanadas",
  "dim sum",
  "gyoza",
  "pierogi",
  "ravioli",
  "lasagna",
  "macaroni and cheese",
  "stir-fry",
  "curry",
  "stew",
  "chili",
  "casserole",
  "grilled cheese",
  "panini",
  "wraps",
  "tuna melt",
  "club sandwich",
  "BLT",
  "submarine sandwich",
  "hoagie",
  "hero",
  "pita",
  "tortilla",
  "sourdough",
  "baguette",
  "croissant",
  "muffin",
  "pancake",
  "waffle",
  "french toast",
  "crepe",
  "biscuit",
  "scone",
  "donut",
  "bagel",
  "english muffin",
  "cinnamon roll",
  "danish",
  "turnover",
  "strudel",
  "pie",
  "cake",
  "cupcake",
  "cookie",
  "brownie",
  "macaron",
  "eclair",
  "tart",
  "cheesecake",
  "ice cream",
  "sundae",
  "parfait",
  "mousse",
  "trifle",
  "pudding",
  "jelly",
  "caramel",
  "fudge",
  "candy",
  "gum",
  "marshmallow",
  "toffee",
  "brittle",
  "popcorn",
  "pretzel",
  "chips",
  "crackers",
  "nuts",
  "trail mix",
  "granola",
  "cereal",
  "oatmeal",
  "yogurt",
  "cheese",
  "dip",
  "salsa",
  "guacamole",
  "hummus",
  "pate",
  "spread",
  "tapenade",
  "chutney",
  "relish",
  "jam",
  "preserves",
  "honey",
  "maple syrup",
  "chocolate spread",
  "mayonnaise",
  "mustard",
  "ketchup",
  "bbq sauce",
  "hot sauce",
  "ranch dressing",
  "vinaigrette",
  "caesar dressing",
  "ranch dip",
  "blue cheese dip",
];

let randomWord;
let score = 0;
let time = 10;
// let difficulty = "medium";
let difficulty =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

const timeInterval = setInterval(updateTime, 1000);

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function addWordToDom() {
  randomWord = getRandomWord();
  word.innerText = randomWord;
}

function updateScore() {
  score++;
  scoreElement.innerText = score;
}

function updateTime() {
  time--;
  timeElement.innerText = time + "s";
  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function gameOver() {
  endgameElement.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="history.go(0)">Play Again</button>
    `;
  endgameElement.style.display = "flex";
}

text.addEventListener("input", (e) => {
  const insertedText = e.target.value;
  if (insertedText === randomWord) {
    e.target.value = "";
    addWordToDom();
    updateScore();
    if (difficulty === "hard") time += 2;
    else if (difficulty === "medium") time += 3;
    else time += 5;
    updateTime();
  }
});

settingsButton.addEventListener("click", () =>
  settings.classList.toggle("hide")
);
settingsForm.addEventListener("change", (e) => {
  difficulty = e.target.value;
  localStorage.setItem("difficulty", difficulty);
});

// Init
difficultySelect.value = difficulty;
addWordToDom();
text.focus();
