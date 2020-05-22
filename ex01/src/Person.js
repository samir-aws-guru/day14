const persons = [];

class Person {

  // truncate
  truncate(str) {
    if (str.length < 3) {
      return str;
    } else {
      var newStr = str.slice(0, 3) + ".";
      return newStr;
    }
  }


  // Add person
  addPerson(...res) {
    persons.push(res);
  }


  // Show all persons
  showPersons() {
    console.log("\nShow all persons: ")
    console.log("########################################\n")
    console.log("| id | firstName | lastName |")
    
    for (var i in persons) {
      for (var j in persons[i]) {
        var obj = (persons[i][j]);

        var firstName = this.truncate(Object.values(obj)[1]);
        var lastName = this.truncate(Object.values(obj)[2]);
        
        console.log("|" + i, "| " + firstName + " | " + lastName + " |");
      }
    }
    console.log("########################################\n");
  }


  //Show by id
  showOnePerson(index) {
    console.log("\n\nShow by id: ")
    console.log("########################################")
    var i = index - 1;

    for (var j in persons[i]) {
      var obj = (persons[i][j]);
  
      var items = Object.keys(obj);
      items.forEach(function (item) {
        console.log(item + ': ' + (obj[item]));
      });
    }
    console.log("########################################\n")
  }
}

module.exports = Person;
module.exports.persons = persons;