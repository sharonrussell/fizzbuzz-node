var chai = require('chai');
var expect = chai.expect;
var Fizzbuzz = require('../src/fizzbuzz');

describe('Fizzbuzz', function() {
  it('getNumber(3) should return fizz', function() {
    var app = new Fizzbuzz();
    expect(app.getNumber(3)).to.equal('fizz');
  });
});
