/* 
1. chiedo all'utente se vuole inserire un numero pari o dispari 
2. chiedo all'utente di inserire un numero tra 1 e 5
3. genero un numero causale per conto del computer utilizzando una funzione.
4. sommo il numero dell'utente + numero randomico 
5. stabilisco se il risultato è pari o dispari e decreto il vincitore
*/

//chiedo all'utente di inserire pari o dispari
let role = prompt('inserisci "pari" o "dispari" per decidere che ruolo giocare');
console.log(role);
//chiedo all'utente di inserire un numero 
let userNum = prompt('inserisci un numero da 1 a 5');
console.log(userNum);
//genero un numero casuale per il computer
let pcNum = Math.floor(Math.random()*6);
console.log(pcNum);




