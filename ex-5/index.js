/*
  Hai un array con i colori delle palline del tuo albero di natale.
  Scrivi una funzione "contaPallineRosse" che conti quante palline rosse ci sono.

  Input:
  const palline = ["rosso", "blu", "rosso", "verde", "rosso", "giallo", "blu"];

  Output: 3
*/

const palline = ["rosso", "blu", "rosso", "verde", "rosso", "giallo", "blu"];


function contaPallineRosse(palline){
  let contaPalline = 0;
  for(i = 0; i < palline.length; i++){
    if(palline[i] === "rosso"){
      contaPalline++;
    }
  }
  return contaPalline
}

console.log(contaPallineRosse(palline));

