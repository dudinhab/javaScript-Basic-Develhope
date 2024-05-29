/*
**ITA**

Scrivi una funzione che prende come parametro un array di oggetti, ognuno dei quali rappresenta un film con le seguenti proprietà: titolo, regista, anno e genere. La funzione dovrebbe restituire un oggetto che contiene le seguenti proprietà:
- `numMovies`: il numero totale di film nell'array
- `numYears`: il numero di anni unici rappresentati nell'array
- `genreCounts`: un oggetto che contiene un conteggio di quanti film ci sono in ciascun genere rappresentato nell'array.
Stampa l'oggetto.

## Suggestion ##
Utilizzare un ciclo for per iterare attraverso l'array e un'istruzione if per verificare se ogni anno o genere è già stato contato. Se non è stato contato, incrementare la proprietà di conteggio corrispondente nell'oggetto restituito.
*/
let films = [
    {
        title: 'John Wick',
        director: 'Chad Stahelski',
        year: 2015,
        genre: 'Thriller'
    },
    {
        title: '8 Mile',
        director: 'Curtis Hanson',
        year: 2002,
        genre: 'Music'
    },
    {
        title: 'Avatar',
        director: 'James Cameron',
        year: 2010,
        genre: 'Fantasy'
    },
    {
        title: 'Spider-Man',
        director: 'Sam Raimi',
        year: 2002,
        genre: 'Fantasy'
    },
    {
        title: 'Bohemian Rhapsody',
        director: 'Bryan Singer, Dexter Fletcher',
        year: 2018,
        genre: 'Music'
    },
]

function Cont(arr) {
    let years = [0];
    const statsObjt = {
        numMovies: arr.length,
        numYears: {},
        genreCounts: {}
    };
    for (let i = 0; i < arr.length; i++) {
        if (statsObjt.genreCounts[arr[i].genre]) {
            statsObjt.genreCounts[arr[i].genre]++;
        } else {
            statsObjt.genreCounts[arr[i].genre] = 1;
        }

        for (let a = 0; a < years.length; a++) {
            console.log(years.length);
            console.log(arr[i].year);
            if (years[a] === arr[i].year){
                years.push(arr[i].year);
                break;
            }
        }
    }
    console.log(years);
    years.shift();

    console.log(years);
    statsObjt.numYears = years.length;
    console.log(statsObjt);
}

Cont(films);
