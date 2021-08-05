// Get Quote From API
async function getQuote() {
  const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
  try {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json()
    console.log(data);
  } catch (error) {
    getQuote();
    console.log('whoops, no quote', error);
  }
}

// On Load
getQuote();

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

*/

