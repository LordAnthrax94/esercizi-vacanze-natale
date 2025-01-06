/*
  Base.
  Mostra in pagina un elenco di desideri presi da un array. 
  Output: (vedi esempio-base.png)
  
  Bonus.
  Aggiungi un pulsante accanto a ogni desiderio per eliminarlo dalla lista.
  Output: (vedi esempio-bonus.png)
*/

const desideri = ["Un trenino", "Un Cicibubu portatile", "Un bonifico", "Un cane"];

function stampaDesideri(){
  const lista = document.getElementById('desideri')

  lista.innerHTML= '';

  desideri.forEach((desiderio, index)=> {
    const li = document.createElement('li');
    li.textContent = desiderio;

    const btn = document.createElement('button');
    btn.textContent = "Elimina";
    btn.classList.add('elimina-btn');

    btn.addEventListener('click', ()=>{
      li.classList.toggle('none');
    });

  li.appendChild(btn);
  lista.appendChild(li);

  });
}

stampaDesideri();