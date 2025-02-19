/*
  Hai un array con città che Babbo Natale deve visitare. 
  Scrivi una funzione "aggiungiCitta" che aggiunga una città all’array solo se non è già presente.

  Input:
  const citta = [
    "Panettoneville",
    "Cioccopoli",
    "Marzapane City",
    "Zucchettolandia",
    "Biscottopoli",
    "Caramellonia",
    "Neveburg",
    "Fioccodistella",
    "Candynia",
    "Luciaville"
  ];

  Output:
    - se provo ad aggiungere "Cicibubulandia", me la aggiunge all'array
    - se provo ad aggiungere "Panettoneville", NON me la aggiunge all'array, perchè è già presente nell'array
*/

const citta = [
  "Panettoneville",
  "Cioccopoli",
  "Marzapane City",
  "Zucchettolandia",
  "Biscottopoli",
  "Caramellonia",
  "Neveburg",
  "Fioccodistella",
  "Candynia",
  "Luciaville"
];

const cittaVisitata = [];

function visiteCitta(cittaVisitata, nuovaCitta){  
  if(!cittaVisitata.includes(nuovaCitta)) { 
    cittaVisitata.push(nuovaCitta); 
  } else {
    console.log(`${nuovaCitta} è già visitata!`); 
  }  
}

visiteCitta(cittaVisitata, "Cicibubulandia");
visiteCitta(cittaVisitata, "Panettoneville");

console.log(cittaVisitata);
