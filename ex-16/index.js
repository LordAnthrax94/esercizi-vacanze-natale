/*
  Scrivi una funzione controllaScorte che, dato un array di regali e un numero minimo di pezzi richiesto,
  restituisca true se ci sono abbastanza regali.

  Input:
    const regali = [
      { nome: "Macchinona", quantita: 10 },
      { nome: "Puzzle", quantita: 8 },
      { nome: "Libretto", quantita: 12 },
      { nome: "Cicibubu Portatili", quantita: 7 }
    ];
  
  Output: 
    controllaScorte(regali, 5) -> true (ogni regalo ha almeno 5 pezzi disponibili)
    controllaScorte(regali, 9) -> false (alcuni regali, come "Puzzle" e "Cicibubu POrtatili", hanno meno di 9 pezzi)
*/

const regali = [
  { nome: "Macchinona", quantita: 10 },
  { nome: "Puzzle", quantita: 8 },
  { nome: "Libretto", quantita: 12 },
  { nome: "Cicibubu Portatili", quantita: 7 }
];