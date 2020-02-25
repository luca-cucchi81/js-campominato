/*SCOPO DEL GIOCO:
Il computer deve generare 16 numeri casuali tra 1 e 100.
In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
Con difficoltà 0=> tra 1 e 100, con difficoltà 1 =>  tra 1 e 80, con difficoltà 2=> tra 1 e 50*/

var numeroPc =[];                       //array vuoto per numeri generati dal pc
for (var i = 0; i < 20; i++) {          //ciclo per inserire 16 numeri (presi da 1 a 100)
    var randomPc = generaRandom(1, 100);
    if (!numeroPc.includes(randomPc) && numeroPc.length < 16){
    numeroPc.push(randomPc);
    }
}
console.log(numeroPc.sort());

var difficolta = 0;
var selezioneDifficolta;
var tentativi;

while (difficolta == 0) {   // a seconda del prompt dell'utente la difficoltà varia e quindi, di conseguenza, anche il numero max di tentativi per la vittoria
  if (selezioneDifficolta = parseInt(prompt('Scegli il livello di difficoltà: \nFacile: inserisci ' + 1 + '\nMedio: inserisci ' + 2 + '\nDifficile: inserisci ' + 3))) {
    switch (selezioneDifficolta) {
      case 1:
        difficolta = 100;
        tentativi = 84;
        break;
      case 2:
      difficolta = 80;
      tentativi = 64;
        break;
      case 3:
      difficolta = 50;
      tentativi = 34;
        break;
    }
  } else {
    alert('Non hai inserito la difficoltà corretta: ricarica la pagina!!');
  }
}

var numeroArray =[]      // array per numeri inseriti dall'utente (il cui unico scopo è definire il punteggio finale!)
var punti = 0;           // punteggio calcolato sulla base della lunghezza dell'array.

while (numeroArray.length < tentativi){               //fintanto che la lunghezza dell'array utente è nel range dei tentativi.....
    var numUser = parseInt(prompt('Inserisci un numero da 1 a 100'))
    if (checkNum(numeroPc, numUser) == true) {                          // SFIGATO!!: numero pc e numero utente sono uguali --> BOOOOOM!!
      alert('BOOM!!! Hai perso! Ricarica la pagina e ritenta.');
      punti = numeroArray.length + 1;
      alert('Hai ottenuto un punteggio di: ' + punti);
    }
    else if (numUser > 100 || numUser < 1 || isNaN(numUser)) {      // ATTENZIONE ANCHE A --> errore inserimento numeri nel prompt
      alert('Devi inserire un numero da 1 a 100');
    }
    else if (checkNum(numeroArray, numUser) == false) {        //   pusha nell'array (il punteggio aumenta!)
    }
    else {
      alert('Hai già inserito questo numero!')
    }
}

if (checkNum(numeroPc, numUser) == false) {              // BACIATO DALLA DEA BENDATA?? Numero PC e numero utente non sono mai stati uguali: BRAVO!!!
  alert('COMPLIMENTI!!! HAI VINTO!!! Ricarica e prova a vincere di nuovo!!');
  punti = numeroArray.length;
  alert('Hai ottenuto un punteggio di: ' + punti);
}

/* == Funzione generatore numeri casuali computer ==*/
function generaRandom(min, max) {
    numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}

/*Funzione trova numero nell'array*/
function checkNum(array, num){
  var i = 0;
  var result = false;
  while (i < array.length && result == false) {
    if (array[i] == num) {
      result = true;
    }
    i++;
  }
  return result;
}
