/*
 Scrivi una funzione "trovaBabboNatale" che, dato un array di nomi, 
 restituisca "Babbo Natale trovato!" se il nome "Babbo Natale" è presente, 
 altrimenti "Babbo Natale non trovato".

 Input: ["Giovanni Gianni", "Bruno Barbieri", "Babbo Natale","Ermenegildo Buffetti"]
 Output: "Babbo Natale trovato!";
*/

const people = ["Giovanni Gianni", "Bruno Barbieri", "Babbo Natale","Ermenegildo Buffetti"];

let message = '';

function findBabbo(){
  for(i = 0; i < people.length; i++){
    if(people[i] === 'Babbo Natale'){
      message = 'Babbo Natale trovato';
      return;
    }   
  }
  message = 'Babbo Natale non trovato';
}

console.log(message);
