const quoteText = document.getElementById('quote-text'),
    genb = document.getElementById('gen-btn-quote');

function randomQuote() {
    fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
      quoteText.textContent = data.content;
  })
}

randomQuote();

genb.addEventListener('click', () => {
randomQuote();
});