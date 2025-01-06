/*
  Crea un timer che mostra quanti giorni, ore, minuti e secondi mancano a Natale. 
  Aggiorna il valore ogni secondo. 
  Inietta i dati dinamicamente nel DOM.
*/

const dataNatale = new Date("2024-12-24T00:00:00")

function timerNatale(){
  const dataOggi = new Date("2024-01-06")

  const giorniMancanti = dataNatale - dataOggi;

  const giorni = Math.floor(giorniMancanti / (1000 * 60 * 60 * 24));
  const ore = Math.floor((giorniMancanti % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minuti = Math.floor((giorniMancanti % (1000 * 60 * 60)) / (1000 * 60));
  const secondi = Math.floor((giorniMancanti % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = `Mancano ${giorni} giorni, ${ore} ore, ${minuti} minuti, ${secondi} secondi a Natale`;  
  if (giorniMancanti <= 0) {
    document.getElementById("countdown").innerHTML = "Buon Natale!";
  }
}

setInterval(timerNatale, 1000);