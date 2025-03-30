const btnE1 = document.getElementById("btn");
const quoteE1 = document.getElementById("quote");
const AuthorE1 = document.getElementById("author");

const apiURL = "https://api.quotable.io/random";

async function getQuote() {
  const response = await fetch(apiURL);
  const data = await response.json();
  const quotecontent = data.content;
  const quoteAuthor = data.author;
  quoteE1.innerText = quotecontent;
  AuthorE1.innerText = "~" + quoteAuthor;
  console.log(data);
}

btnE1.addEventListener("click", getQuote());
