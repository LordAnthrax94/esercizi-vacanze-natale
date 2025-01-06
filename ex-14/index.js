/*
  Scrivi una funzione "generaListaDesideri" che prenda un array con desideri duplicati e 
  restituisca una lista con i desideri unici.

  Input:
    const desideri = ["bicicletta", "pupazzo", "bicicletta", "cane"];
  
  Output: 
    ["bicicletta", "pupazzo", "cane"]
*/

const desideri = ["bicicletta", "pupazzo", "bicicletta", "cane"];

function generaListaDesideri(desideri){
  return desideri.filter((value,index, desiderio) => desiderio.indexOf(value) === index);
}

console.log(generaListaDesideri(desideri));
