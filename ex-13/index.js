/*
  Hai un array con letterine inviate a Babbo Natale. 

  Input:
    const letterine = [
      "Caro Babbo Natale, quest'anno vorrei un trenino.",
      "Caro Babbo Natale, grazie per i regali dello scorso anno!",
      "Vorrei un cucciolo da accudire.",
      "Mi piacerebbe avere un set di colori.",
      "Caro Babbo Natale, puoi portarmi una bici rossa?",
      "Spero in un Natale pieno di cioccolata.",
      "So che non esisti. Gne."
    ];

  1.
  Scrivi una funzione "getLettereBambiniEducati" che 
  restituisca solo le letterine che iniziano iniziano con "Caro Babbo Natale".

  Output:
    [
      "Caro Babbo Natale, quest'anno vorrei un trenino.",
      "Caro Babbo Natale, grazie per i regali dello scorso anno!",
      "Caro Babbo Natale, puoi portarmi una bici rossa?",
    ];

  2.
  Scrivi una funzione "smistaLettereBambini" che restituisca un oggetto con le lettere dei bambini educati e maleducati.
  Un bambino è educato se inizia la letterina con "Caro Babbo Natale", altrimenti è considerato maleducato.

  Output
    {
      educati: [
        "Caro Babbo Natale, quest'anno vorrei un trenino.",
        "Caro Babbo Natale, grazie per i regali dello scorso anno!",
        "Caro Babbo Natale, puoi portarmi una bici rossa?",
      ]
      maleducati: [
        "Vorrei un cucciolo da accudire.",
        "Mi piacerebbe avere un set di colori.",
        "Spero in un Natale pieno di cioccolata."
        "So che non esisti. Gne."
      ]
    }
*/

const letterine = [
  "Caro Babbo Natale, quest'anno vorrei un trenino.",
  "Caro Babbo Natale, grazie per i regali dello scorso anno!",
  "Vorrei un cucciolo da accudire.",
  "Mi piacerebbe avere un set di colori.",
  "Caro Babbo Natale, puoi portarmi una bici rossa?",
  "Spero in un Natale pieno di cioccolata.",
  "So che non esisti. Gne."
];
