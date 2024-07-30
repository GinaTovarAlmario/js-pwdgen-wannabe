// controllo per prima cosa se ho collegato bene il mio file
console.log('Js ok');

/*Traccia:
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine stampa in console nomecognomecolorepreferito21
ES: marcolanciverde21 */

// PROCEDIMENTO
/*
1- Recupero elementi della pagina di mio interesse
2- Chiedere all'utente il nome
3- Chiedere all'utente il cognome
4- Chiedere all'utente il colore preferito
5- Faccio la somma delle mie stringhe
6- Inserisco il risultato nell'elemento del DOM */


// Fase preparatoria
const resultElement = document.getElementById('result');
console.log(resultElement);

// Fase raccolta Dati
const firstName = prompt('Qual è il tuo nome?', 'Paola');
console.log(firstName);

const lastName = prompt('Qual è il tuo cognome?','Almario');
console.log(lastName);

const favouriteColor = prompt('Colore preferito?','Lilla');
console.log(favouriteColor);

// Fase lavorazione Dati
const fullInformation = `${firstName}${lastName}${favouriteColor}`;
console.log(fullInformation);

const message = `${fullInformation}21`;
console.log(message);
// Fase di produzione output
resultElement.innerText = message ;
