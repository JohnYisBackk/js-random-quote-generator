// 1) DOM elements
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const copyBtn = document.getElementById("copyBtn");
const quoteCard = document.getElementById("quoteCard");

let lastIndex = null;

// 2) Quotes data
let quotes = [
  {
    text: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman",
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
  {
    text: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde",
  },
  {
    text: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House",
  },
  {
    text: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
  },
  {
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    text: "The best way to get a project done faster is to start sooner.",
    author: "Jim Highsmith",
  },
];

// 3) Function to get a random index
function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

// 4) Function to display a random quote
function showRandomQuote() {
  if (quotes.length === 0) return;

  let index = getRandomIndex(quotes.length);
  while (index === lastIndex && quotes.length > 1) {
    index = getRandomIndex(quotes.length);
  }
  lastIndex = index;

  const quote = quotes[index];

  quoteCard.classList.remove("fade-in");
  quoteCard.classList.add("fade-out");

  setTimeout(() => {
    quoteText.textContent = quote.text;
    quoteAuthor.textContent = `— ${quote.author}`;

    localStorage.setItem("lastQuote", JSON.stringify(quote));

    // fade-in card
    quoteCard.classList.remove("fade-out");
    quoteCard.classList.add("fade-in");
  }, 220);
}

// 5) Function to copy the current quote to the clipboard
function copyQuote() {
  if (!quoteText.textContent || quoteText.textContent.includes("click")) return;

  const text = quoteText.textContent;
  const author = quoteAuthor.textContent;
  const fullQuote = `${text} ${author}`;

  navigator.clipboard.writeText(fullQuote);

  copyBtn.textContent = "Copied!";
  setTimeout(() => {
    copyBtn.textContent = "Copy";
  }, 1500);
}

// 6) Event listeners for buttons
newQuoteBtn.addEventListener("click", showRandomQuote);
copyBtn.addEventListener("click", copyQuote);

// 7) Load the last displayed quote on page load
function loadLastQuote() {
  const saved = localStorage.getItem("lastQuote");

  if (!saved) return;

  const quote = JSON.parse(saved);
  quoteText.textContent = quote.text;
  quoteAuthor.textContent = `— ${quote.author}`;

  quoteCard.classList.remove("fade-out");
  quoteCard.classList.add("fade-in");
}

// Initialize the app by loading the last quote
loadLastQuote();
