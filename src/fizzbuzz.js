function Fizzbuzz() {}

Fizzbuzz.prototype.getNumber = function(number) {
    if (number % 3 === 0){
        return 'Fizz';
    } else{
        return 'Buzz'
    }
};

module.exports = Fizzbuzz;
