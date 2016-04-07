var chai = require('chai');
var expect = chai.expect;
var Fizzbuzz = require('../src/fizzbuzz');

describe('Fizzbuzz', function() {
  it('getNumbers() should return a number', function() {
    var app = new Fizzbuzz();
    expect(app.getSubtotal()).to.equal(0);
  });
});
