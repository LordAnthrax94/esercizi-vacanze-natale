/*
  Scrivi una funzione "calendarioCompleto" che controlli 
  se un array con i giorni del calendario dell’Avvento (1-24) è completo. 
  Restituisci true se i giorni vanno da 1 a 24 senza mancare.

  Input:
    const giorniDicembre = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  Output:
    true

  Input:
    const giorniDicembre = [1, 2, 6, 7, 8, 9, 10, 18, 19, 20, 21, 22];
  Output:
    false
*/

const giorniDicembre = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const giorniDicembreIncompleto = [1, 2, 6, 7, 8, 9, 10, 18, 19, 20, 21, 22];