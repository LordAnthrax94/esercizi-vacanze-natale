/*
  Sfruttano l'api di gerry scotti, stampa in console sue 5 frasi.
  Endpoint API: https://gerry-quotes.fly.dev/quotes/random

  Puoi utilizzare sia fetch che axios per la chiamata AJAX.
*/

const endpoint = "https://gerry-quotes.fly.dev/quotes/random";

let scottiFrasi = [];

axios.get(endpoint)
  .then(response => {
    scottiFrasi.push(response.data.response)
  })

  console.log(scottiFrasi);
  