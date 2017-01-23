var $ = require('jquery');
// var Person = require('./modules/Person'); // this is via native NodeJS
import Person from './modules/Person'; // this is the new ES6 way of "requiring" modules

class Adult extends Person {
	payTaxes() {
		console.log(this.name + " no owes $0 in taxes.");
	}
}

// alert("We are the world. We are the children.");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Smith", "orange");
jane.greet();
jane.payTaxes();

$("h1").remove();