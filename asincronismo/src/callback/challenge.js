let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const API = 'https://rickandmortyapi.com/api/character/';


function fetchData(urlApi, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open('GET', urlApi, true);
  xhttp.onreadystatechange = (event) => {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error('Error' + urlApi);
        return callback(error, null);
      }
    }
  }
  xhttp.send()
}

fetchData(API, (error1, response1) => {
  if (error1) return console.error('error1', error1);
  fetchData(API + response1.results[0].id, (error2, response2) => {
    if (error2) return console.error('error2', error2);
    fetchData(response2.origin.url, (error3, response3) => {
      if (error3) return console.error('error3', error3)
      console.log(response1.info.count);
      console.log(response2.name);
      console.log(response3.dimension);
    })
  })
});