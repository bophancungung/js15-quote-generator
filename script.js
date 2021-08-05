const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
  if (!loader.hidden) {
    quoteContainer.hidden = false;
    loader.hidden = true;
  }
}

async function getQuoteFromAPI() {
  showLoadingSpinner();
  // We need to use a Proxy URL to make our API call in order to avoid cors errors
  const proxyUrl = 'https://salty-ravine-62609.herokuapp.com/'
  const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    // If Author is blank, add 'Unknown'
    data.quoteAuthor === '' 
      ? authorText.innerText = 'Unknown'
      : authorText.innerText = data.quoteAuthor
    // Dynamically reduce font size for long quotes
    data.quoteText.length > 110
      ? quoteText.classList.add('long-quote')
      : quoteText.classList.remove('long-quote')
    quoteText.innerText = data.quoteText;
    removeLoadingSpinner();
    console.log(data);
  } catch (error) {
    console.log('whoops, no quote', error);
  }
}

// Tweet Quote
function tweetQuote() {
  const quote = quoteText.innerText;
  const author = authorText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', getQuoteFromAPI);
twitterBtn.addEventListener('click', tweetQuote);

getQuoteFromAPI();


/*
  Setting up our project
github
heropatterns.com --> Circuit Board --> copy Generated CSS Code
https://fonts.google.com/specimen/Montserrat?query=montserrat => @IMPORT

  Styling and HTML elements
HTML elements
? button tag using fab has class or title will error
Styling

  Create beautiful button

  fetching data with Javascript
https://forismatic.com/en/api/

  Manipulating DOM and Creating a loader with Javascript
*/

