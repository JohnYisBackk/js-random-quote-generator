// ===============================
// 1️⃣ GET ELEMENTS FROM DOM
// ===============================

const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");

const newQuoteBtn = document.getElementById("newQuoteBtn");
const copyQuoteBtn = document.getElementById("copyQuoteBtn");

const themeToggle = document.getElementById("themeToggle");
const quoteContainer = document.getElementById("quoteContainer");

// ===============================
// 2️⃣ QUOTES ARRAY
// ===============================

const quotes = [
  {
    quote:
      "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
  {
    quote: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde",
  },
  {
    quote: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman",
  },
  {
    quote: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House",
  },
  {
    quote: "Fix the cause, not the symptom.",
    author: "Steve Maguire",
  },
  {
    quote: "Before software can be reusable it first has to be usable.",
    author: "Ralph Johnson",
  },
  {
    quote: "Make it work, make it right, make it fast.",
    author: "Kent Beck",
  },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    quote: "Small daily improvements over time lead to stunning results.",
    author: "Robin Sharma",
  },
];
// ===============================
// 3️⃣ GENERATE RANDOM QUOTE
// ===============================

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  // pridanie animacie
  quoteContainer.classList.remove("animate");
  void quoteContainer.offsetWidth;

  quoteText.textContent = quote.quote;
  quoteAuthor.textContent = `— ${quote.author}`;

  quoteContainer.classList.add("animate");
}

// ===============================
// 4️⃣ COPY QUOTE
// ===============================

function copyQuote() {
  const fullQuote = `${quoteText.textContent} ${quoteAuthor.textContent}`;

  navigator.clipboard.writeText(fullQuote);
  copyQuoteBtn.textContent = "Copied!";

  //pridanie animacie
  quoteText.classList.add("quote-pulse");
  quoteAuthor.classList.remove("quote-pulse");

  setTimeout(() => {
    quoteText.classList.remove("quote-pulse");
    quoteAuthor.classList.remove("quote-pulse");
  }, 2000);

  setTimeout(() => {
    copyQuoteBtn.textContent = "Copy Quote";
  }, 2000);
}

// ===============================
// 5️⃣ TOGGLE THEME
// ===============================

function toggleTheme() {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
}

// ===============================
// 6️⃣ EVENT LISTENERS
// ===============================

newQuoteBtn.addEventListener("click", generateRandomQuote);
copyQuoteBtn.addEventListener("click", copyQuote);
themeToggle.addEventListener("click", toggleTheme);

// ===============================
// 7️⃣ INIT
// ===============================

generateRandomQuote();

