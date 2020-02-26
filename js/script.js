/*
    Il computer deve generare 16 numeri casuali tra 1 e 100.
    In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
    Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
    La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
    Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
    BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
    Con difficoltà 0=> tra 1 e 100, con difficoltà 1 =>  tra 1 e 80, con difficoltà 2=> tra 1 e 50

    1. Genero 16 numeri random diversi da 1...100
        1.1 Creo un array vuoto
        1.2 Inserisco i numeri delle bombe nell'array
    2. Selectione utente
        2.1 Creo un array vuoto per i tentativi
        2.2 Chiediamo un numero da 1...100
    3. Logica del gioco
        - Ripetizione del numero
            -Il numero inserito è incluso nell'array dei numeri inseriti
        - Prendo una bomba
            -Il numero inserito è incluso nell'array delle bombe
        - Inserire il numero nell'array dei numeri inseriti
        - Se lunghezza numeri inseriti è uguale alla lunghezza massima hai vinto
    ULTIMO. Gestione errori
        1. Numero >= 1 e numero <= 100
        2. Numero deve essere un NUMERO

        val1    val2    &&
        true    true    true
        false   true    false
        true    false   false
        false   false   false

        val1    val2    &&
        1       1       1
        1       0       0
        0       1       0
        0       0       0
*/

var dimensioneCampo = selezioneLivello();
var totMine = 16;
var tentativiMax = dimensioneCampo - totMine;

var mine = piazzaBombe(dimensioneCampo, totMine);
console.log(mine);

var bandiereGiocatore = [];
console.log(bandiereGiocatore);

while (bandiereGiocatore.length < tentativiMax){
    var bandiereDaPiazzare = parseInt(prompt('Inserisci un numero da 1 a: ' + dimensioneCampo))
    if (bandiereDaPiazzare > 0 && bandiereDaPiazzare <= 100 && !isNaN(bandiereDaPiazzare)){
        if (!bandiereGiocatore.includes(bandiereDaPiazzare)) {
            if (!mine.includes(bandiereDaPiazzare)){
            bandiereGiocatore.push(bandiereDaPiazzare);
            } else {
                alert('BOOOOOMMM')
                alert("Mi spiace hai beccato una mina! Punteggio finale: " + bandiereGiocatore.length);
            }

            if (bandiereGiocatore.length == tentativiMax){
                alert('HAI VINTOOOOOO!!!!!! Ricarica e ritenta la fortuna!!')
                alert('Punteggio finale: ' + bandiereGiocatore.length);
            }

        } else{
            alert('ATTENZIONE: numero già inserito')
        }
    }

}

function selezioneLivello() {
    var difficolta = parseInt(prompt('Inserisci il livello di difficoltà: 1, 2 o 3'));
    switch (difficolta) {
        case 1:
            var dimCampo = 100;
            break;
        case 2:
            var dimCampo = 80;
            break;
        case 3:
            var dimCampo = 50;
            break;
        default: dimCampo = 100;
    }
    return dimCampo;
}

function piazzaBombe(dimCampo , totaleMine){
    var bombe = [];
    while (bombe.length < totMine){
        var mineDaPiazzare = generaRandomMinMax(1, dimCampo);
        if (!bombe.includes(mineDaPiazzare)){
            bombe.push(mineDaPiazzare);
        }
    }
    return bombe
}

function generaRandomMinMax(min, max) { // funzione che genera un numero random tra due valori dati in ingresso MIN e MAX, estremi inclusi
    var numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}
