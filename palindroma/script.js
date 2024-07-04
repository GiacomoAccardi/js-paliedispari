/* 
1. creare una funzione che stabilisca se una parola è palindroma o meno
2. creare un prompt che permetta l'inserimento di una parola
3. separare la parola in singoli caratteri e invertirla
4. utilizzare la funzione per stabilire il risultato
*/

// creo la funzione
function palindroma(a, b){
    if (a === b){
        console.log('La parola inserita è palindroma')
    } else {
        console.log('La parola inserita non è palindroma')
    }
}

//creo un prompt per permettere all'utente di inserire una parola da verificare

let word = prompt('Inserisci qui la parola da verificare');
console.log(word)


//separo il valore di word in caratteri unici
let chars = word.split('');
console.log(chars)

//inverto i caratteri per poi confrontarli
let revChars = chars.reverse()
console.log(revChars)


