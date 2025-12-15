export default function fizzBuzz(number) {
    switch (true) {
        case number % 15 === 0:
            return "fizzBuzz";
        case number % 3 === 0:
            return "fizz";
        case number % 5 === 0:
            return "buzz";
        default:
            return number;
    }
}