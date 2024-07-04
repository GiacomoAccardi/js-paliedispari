/* 
1. chiedo all'utente se vuole inserire un numero pari o dispari 
2. chiedo all'utente di inserire un numero tra 1 e 5
3. genero un numero causale per conto del computer utilizzando una funzione.
4. sommo il numero dell'utente + numero randomico 
5. stabilisco se il risultato è pari o dispari e decreto il vincitore
*/
//definiamo una funzione in grado di stabilire se un numero è pari o dispari 

function evenOdd(a){
    if (a % 2 == 0){
        sumRole.push('pari') 
    } else {
        sumRole.push('dispari')
    }  
};


//chiedo all'utente di inserire pari o dispari
let role = prompt('inserisci "pari" o "dispari" per decidere che ruolo giocare');
console.log(role);
//chiedo all'utente di inserire un numero 
let userNum = prompt('inserisci un numero da 1 a 5');
console.log(userNum);
//genero un numero casuale per il computer
let pcNum = Math.floor(Math.random()*5)+1;
console.log(pcNum);
//sommo i due numeri
let sum = (+ pcNum) + (+ userNum);
console.log(sum)

//utilizzo la funzione
sumRole = []
evenOdd(sum);
console.log(sumRole)

// decreto vincitore
let result;
if (sumRole == role){
    result = "Complimenti, hai vinto"
} else {
    result = "Mi spiace, hai perso."
}

console.log(result)




