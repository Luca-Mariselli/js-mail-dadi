// Imposto array dadi
let dado1 = [
    1,
    2,
    3,
    4,
    5,
    6
]

let dado2 = [
    1,
    2,
    3,
    4,
    5,
    6
]

// Lancio 1
let lancio1 = Math.floor( Math.random()*6 );
console.log( "Lancio1", dado1[lancio1]);
document.getElementById(`player1`).innerHTML = 'Punteggio primo giocatore: ' + dado1[lancio1];

// Lancio2
let lancio2 = Math.floor( Math.random()*6 );
console.log( "Lancio2", dado2[lancio2]);
document.getElementById(`player2`).innerHTML = 'Punteggio secondo giocatore: ' + dado2[lancio2];

// Calcolo lanci
if(lancio1 > lancio2){
    document.getElementById(`player1`).style.color = `lightgreen`
    document.getElementById(`player2`).style.color = `crimson`
    document.getElementById(`vittoria`).innerHTML = `VINCE GIOCATORE 1`

} else if(lancio1<lancio2){
    document.getElementById(`player2`).style.color = `lightgreen`
    document.getElementById(`player1`).style.color = `crimson`
    document.getElementById(`vittoria`).innerHTML = `VINCE GIOCATORE 2`

} else {
    document.getElementById(`vittoria`).innerHTML = `PAREGGIO`
}

