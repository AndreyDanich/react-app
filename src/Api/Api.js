
const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'X-API-KEY': 'N7FBPDG-8XG4TRX-JVCVPP5-HZ87GDW'}
  };
  
  fetch('https://api.kinopoisk.dev/v1.4/movie?page=1&limit=100&selectFields=name&selectFields=id&selectFields=description&selectFields=releaseYears&selectFields=rating&selectFields=poster&selectFields=logo', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));