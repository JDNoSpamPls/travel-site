// constructor
//  THIS IS JavaScript 5
// function Person(fullName, favColor) {
// 	this.name = fullName;
// 	this.favoriteColor = favColor;
// 	this.greet = function() {
// 		console.log("Hello0000 there, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
// 	}
// } 

/* BELOW IS THE ES6 VERSION */
class Person { // note: no () here since this is a class
	
	// class constructor
	constructor(fullName, favColor) {
		this.name = fullName;
		this.favoriteColor = favColor;
	}
	
	// accessors/mutators
	// methods here 
	greet() {
		console.log("Huy!, ako ay si " + this.name + " at ako ay isang kulay na " + this.favoriteColor + ".");
	}
}


// module.exports = Person; // the old node.js way
export default Person; // the new ES6 way










// 