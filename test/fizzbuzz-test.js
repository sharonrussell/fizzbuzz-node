var chai = require('chai');
var expect = chai.expect;
var Fizzbuzz = require('../src/fizzbuzz');

describe('Fizzbuzz', function() {
  it('3 should return Fizz', function() {
    var app = new Fizzbuzz();
    expect(app.getNumber(3)).to.equal('Fizz');
  });

  it('5 should return Buzz', function() {
    var app = new Fizzbuzz();
    expect(app.getNumber(5)).to.equal('Buzz');
  });

  it('4 should return 4', function() {
    var app = new Fizzbuzz();
    expect(app.getNumber(4)).to.equal(4);
  });

  it('15 should return FizzBuzz', function() {
	var app = new Fizzbuzz();
	expect(app.getNumber(15)).to.equal("FizzBuzz");
  });
});
