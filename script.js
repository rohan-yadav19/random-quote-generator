const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("Quote");
const authorEl = document.getElementById("author");

const apiURL = "https://api.quotable.io/random";

async function getQuote() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quoteEl.innerText = quoteContent;
    authorEl.innerText = "~ " + quoteAuthor;
    console.log(data);
  } catch (error) {
    console.error("Error fetching quote:", error);
    quoteEl.innerText = "Error loading quote. Please try again.";
  }
}

btnEl.addEventListener("click", getQuote);