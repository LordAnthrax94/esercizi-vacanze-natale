/*
  Il nostro albero di natale deve avere una quantità di addobbi bilanciata. 
  Devono esserci tante stelle quante palline.
  Dato un array con più "pallina" e "stella", scrivi una funzione "bilanciaAlbero"
  che ritorni un array con lo stesso numero di "pallina" e "stella".
  La funzione non puà rimuovere elementi, ma solo aggiungerne.

  Input:
    const addobbiSuAlbero = ["pallina", "pallina", "pallina", "stella"];

  Output:
    ["pallina", "pallina", "pallina", "stella", "stella", "stella"] 
    (aggiunte due "stella" per bilanciare il numero di addobbi)

  -----------

  Input:
    const addobbiSuAlbero = ["pallina", "pallina", "pallina", "stella", "stella", "stella"];

  Output:
    ["pallina", "pallina", "pallina", "stella", "stella", "stella"]; 
    (In questo caso restituisce l'array immutato, perchè ci sono lo stesso numero di "pallina" e "stella")
*/

const addobbiSuAlbero = ["pallina", "pallina", "pallina", "stella"];

function bilanciaAlbero(addobbiSuAlbero){
  const numPalline = addobbiSuAlbero.filter(addobbo => addobbo === "pallina").length
  const numStelle = addobbiSuAlbero.filter(addobbo => addobbo === "stella").length

  if (numPalline > numStelle) {
    const differenza = numPalline - numStelle;    
    for (let i = 0; i < differenza; i++) {
      addobbiSuAlbero.push("stella");
    }
  }  
  else if (numStelle > numPalline) {
    const differenza = numStelle - numPalline;    
    for (let i = 0; i < differenza; i++) {
      addobbiSuAlbero.push("pallina");
    }
  }

  return addobbiSuAlbero;  
}
console.log(bilanciaAlbero(addobbiSuAlbero));

