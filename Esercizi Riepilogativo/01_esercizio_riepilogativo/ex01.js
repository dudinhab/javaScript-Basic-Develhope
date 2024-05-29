let lastName = '0';
let youngAge = 0;
let youngPeople;

const students = [
    { id: 1, name: "Luca", surname: "Rossi", age: 20, hobby: 'gamer' },
    { id: 2, name: "Mario", surname: "Bianchi", age: 24, hobby: 'sportsman' },
    { id: 5, name: "Elena", surname: "Pappalardo", age: 23, hobby: 'photographer'},
    { id: 3, name: "Giovanna", surname: "Brambilla", age: 26, hobby: 'gamer' },
    { id: 4, name: "Carmelo", surname: "Verdi", age: 18, hobby: 'photographer' },
];

function Checking(lastNamePosition, agePosition, namePosition) {
    if (lastName.length < lastNamePosition.length) {
        lastName = lastNamePosition;
    }
    if (youngAge < agePosition) {
        youngPeople = namePosition;
    }
}

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
    switch (students[i].hobby) {
        case 'gamer':
            console.log("Life Is a Game, Play to Win!");
            break;

        case 'sportsman':
            console.log("Never give up!");
            break;

        case 'photographer':
            console.log("A picture is worth a thousand words!");
            break;
        default:
            console.log("Não possui hobby!")
    }
    Checking(students[i].surname, students[i].age, students[i].name);
}

console.log(`La persona piu giovane è ${youngPeople}`)
console.log(`Il cognome più lungo è ${lastName}`)
