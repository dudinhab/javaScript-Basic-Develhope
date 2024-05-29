/*
Scrivi una funzione che prende un array di oggetti come parametro, ognuno dei quali rappresenta un libro con le seguenti proprietà: titolo, autore, anno e genere. La funzione dovrebbe restituire un array di stringhe che contiene il titolo e l'autore di ogni libro nel formato "titolo di autore". Se l'anno del libro è successivo al 2000, aggiungi " - Moderno" alla fine della stringa. Se il genere del libro è "Science Fiction", aggiungi " - SciFi" alla fine della stringa.
Stampa il nuovo array.
*/

let Book = [{
    title: 'Dune', 
    author: 'Frank Herbert', 
    year: 1965,
    genre:'Science Fiction'
  },
  {
    title: 'The Martian', 
    author: 'Andy Weir', 
    year: 2014,
    genre:'Science Fiction'
  },
  {
    title: 'The Lord of the Rings', 
    author: 'Andy Weir', 
    year: 1954,
    genre:'Fantasy'
  },
  {
    title: 'The Ultimate Hitchhiker\'s Guide', 
    author: 'Douglas Adams', 
    year: 1979,
    genre:'Fantasy'
  },
  {
    title: '1Q84', 
    author: 'Haruki Murakami', 
    year: 2009,
    genre:'Novel'
  },
]
function verify(a) {
    let name;
    let newArray = [];
    for (let i in a) {
        name = a[i].title + " by " + a[i].author;
        if (a[i].year > 2000) {
            name += " - Modern"
        }
        if (a[i].genre == 'Science Fiction') {
            name += " - SciFi"
        }
        newArray.push(name);
    }
    return newArray;
}

console.log(verify(Book));