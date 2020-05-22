const readline = require('readline-sync');
const Person = require('./Person');


// const persons = [];

//MENU
console.log("\n##################");
console.log("ADD")
console.log("SEARCH")
console.log("EXIT")
console.log("##################### \n");

//ADD
var person = new Person();

var index = 1;
while (index < 3) {
  person.id = index
  person.firstName = "Aki" + index;
  person.lastName = "Preda" + index;

  // console.log(person);
  person.addPerson({ id: person.id, firstName: person.firstName, lastName: person.lastName });
  // person.addPerson( person.id, person.firstName,  person.lastName );
  index++;
}

//SEARCH
const show = new Person();

// if (show.persons == '') {
if (show.persons != '') {
  show.showPersons();
} else {
  console.log("\n##########################################");
  console.log("You dont have any parson for search!")
  console.log("########################################## \n");
}

// SEARCH by INDEX
show.showOnePerson(1);


//EXIT
console.log("\n##########################################");
console.log("EXIT");
console.log("########################################## \n");
