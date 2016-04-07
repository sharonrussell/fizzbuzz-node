var Fizzbuzz = require('../src/fizzbuzz');

var fizzbuzz = new Fizzbuzz([]);

for(var i = 1; i<=100; i++){
	console.log(fizzbuzz.getNumber(i) + ", ");
}
