function fizzBuzz(argument) {
    let num = parseInt(argument);
    switch (true) {
        case num % 3 === 0 && num % 5 === 0:
            return "fizzBuzz";
        case num % 3 === 0:
            return "fizz";
        case num % 5 === 0:
            return "buzz";
        default:
            return num;
    }
}

module.exports = fizzBuzz;