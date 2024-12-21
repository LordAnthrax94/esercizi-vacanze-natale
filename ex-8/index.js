/*
  Ora vogliamo categorizzare ogni elfo come "pigro" o "operoso".
  Dato l'array di elfi e le rispettive ore lavorate, scrivi una funzione "categorizzaElfi" 
  che restituisce lo stesso array di oggetti, con la proprietà extra "carattere":
  - il suo valore sarà "pigro" se ha lavorato meno di 5 ore
  - il suo valore sarà "operoso" se ha lavorato 5 o più ore

  Input:
  const elfi = [
    { nome: "Dobby", oreLavorate: 4 },
    { nome: "Elfetto", oreLavorate: 6 },
    { nome: "Cicibubu", oreLavorate: 3 },
    { nome: "Buddy", oreLavorate: 8 },
    { nome: "SamBem", oreLavorate: 2 }
  ];

  Output:
  [
    { nome: "Dobby", oreLavorate: 4, carattere: "pigro" },
    { nome: "Elfetto", oreLavorate: 6, carattere: "operoso" },
    { nome: "Cicibubu", oreLavorate: 3, carattere: "pigro" },
    { nome: "Buddy", oreLavorate: 8, carattere: "operoso" },
    { nome: "SamBem", oreLavorate: 2, carattere: "pigro" }
  ];

*/

const elfi = [
  { nome: "Dobby", oreLavorate: 4 },
  { nome: "Elfetto", oreLavorate: 6 },
  { nome: "Cicibubu", oreLavorate: 3 },
  { nome: "Buddy", oreLavorate: 8 },
  { nome: "SamBem", oreLavorate: 2 }
];