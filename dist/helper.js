function fizzBuzz(argument) {
    switch (true) {
        case argument % 15 === 0:
            return "fizzBuzz";
        case argument % 3 === 0:
            return "fizz";
        case argument % 5 === 0:
            return "buzz";
        default:
            return argument;
    }
}

module.exports = fizzBuzz;