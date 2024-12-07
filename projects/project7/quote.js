const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
  "The purpose of our lives is to be happy. - Dalai Lama",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "Get busy living or get busy dying. - Stephen King",
  "You only live once, but if you do it right, once is enough. - Mae West",
];

const quoteDisplay = document.getElementById('quote')
const newQuoteButton = document.getElementById('new-quote')
const copyButton = document.getElementById('copy-quote')
const tweenButton = document.getElementById('tweet-quote')

function generateRandomQuote(){
  const randomIndex = Math.floor(Math.random() * quotes.length)
  quoteDisplay.textContent = quotes[randomIndex]
}

function copyToClipboard(){
  const quote = quoteDisplay.textContent;

  navigator.clipboard.writeText(quote).then(() => {
    alert("Quote copied!")
  })
}

function tweetQuote(){
  const quote = quoteDisplay.textContent

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`

  window.open(twitterUrl, "_blank")
}

newQuoteButton.addEventListener('click', generateRandomQuote)
copyButton.addEventListener('click', copyToClipboard)
tweenButton.addEventListener('click', tweetQuote)

generateRandomQuote()