const fs = require('fs');

const genders = ['male', 'female'];
const maleNames = ['Adrian', 'Rafał', 'Michał', 'Sebastian', 'Marek', 'Bartosz'];
const femaleNames = ['Aleksandra', 'Magdalena', 'Klaudia', 'Oliwia', 'Julia', 'Sara'];
const lastNames = ['Nowak', 'Kowalski', 'Szymański', 'Lewandowski'];

const randChoice = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
};

const people = [];

for (let i=0; i<20; i++) {
  const gender = randChoice(genders);
  const firstName = gender === 'male' ? randChoice(maleNames) : randChoice(femaleNames);
  const lastName = randChoice(lastNames);
  const age = Math.floor(Math.random() * 60) + 18;
  const person = {
    gender: gender,
    firstName: firstName,
    lastName: lastName,
    age: age,
  }
  people.push(person);
}

const arrayToJSON = JSON.stringify(people);

  fs.writeFile('people.json', arrayToJSON, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
