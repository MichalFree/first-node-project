const fs = require('fs');
const { convertArrayToCSV } = require('convert-array-to-csv');
const converter = require('convert-array-to-csv');
const { argv } = require('process');

const genders = ['male', 'female'];
const maleNames = ['Adrian', 'Rafał', 'Michał', 'Sebastian', 'Marek', 'Bartosz'];
const femaleNames = ['Aleksandra', 'Magdalena', 'Klaudia', 'Oliwia', 'Julia', 'Sara'];
const lastNames = ['Nowak', 'Kowalski', 'Szymański', 'Lewandowski'];

const randChoice = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
};

const header = ['gender', 'firstName', 'lastName', 'age', 'eMail']

const people = [];
const peopleCSV = [];

for (let i = 0; i < 20; i++) {
  const gender = randChoice(genders);
  const firstName = gender === 'male' ? randChoice(maleNames) : randChoice(femaleNames);
  const lastName = randChoice(lastNames);
  const age = Math.floor(Math.random() * 60) + 18;
  const now = new Date();
  const vintagePerson = now.getFullYear() - age;
  const eMail = firstName + "." + lastName + vintagePerson + "@gmail.com";
  const person = {
    gender: gender,
    firstName: firstName,
    lastName: lastName,
    age: age,
    eMail: eMail,
  }
  people.push(person);

  const personCSV = [gender, firstName, lastName, age, eMail]
  peopleCSV.push(personCSV);
}

const arrayToJSON = JSON.stringify(people);

const arrayToCSV = convertArrayToCSV(peopleCSV, {
  header,
  separator: ';'
});

const command = process.argv[2];

if(command === 'csv'){
  fs.writeFile('people.csv', arrayToCSV, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}else{
  fs.writeFile('people.json', arrayToJSON, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}