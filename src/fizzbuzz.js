function Fizzbuzz() {}

function isDivisibleBy3(number){
    if (number % 3 === 0){
        return true;
    }

    return false;
};

function isDivisibleBy5(number){
    if(number % 5 === 0){
        return true;
    }

    return false;
};

Fizzbuzz.prototype.getNumber = function(number) {

    if (isDivisibleBy3(number) && isDivisibleBy5(number)){
        return 'FizzBuzz';
    } else if (isDivisibleBy3(number)){
        return 'Fizz';
    } else if (isDivisibleBy5(number)){
        return 'Buzz'
    } else {
        return number;
    }
};

module.exports = Fizzbuzz;
