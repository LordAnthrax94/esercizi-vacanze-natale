/*
  Quanto manca a natale? 
  Hai una data. Scrivi una funzione "countdownNatale" che restituisca il numero di giorni che mancano a natale.

  Input:
    const data = "2024-12-18";
  
  Output: 
    7
*/

const data = "2024-12-18";

function countdownNatale(data){
  const dataNatale = new Date("2024-12-24");

  const dataInput = new Date(data)

  const differenzaTempo = dataNatale - dataInput;

  const giorniMancanti = Math.floor(differenzaTempo / (1000 * 60 * 60 * 24));

  return giorniMancanti
}

console.log(countdownNatale(data));

