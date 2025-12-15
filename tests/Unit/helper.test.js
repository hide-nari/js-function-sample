const fizzBuzz = require('../../dist/helper');

test('adds 1 + 2 to equal 3', () => {
    expect(fizzBuzz(1)).toBe(1);
    expect(fizzBuzz(3)).toBe('fizz');
    expect(fizzBuzz(5)).toBe('buzz');
    expect(fizzBuzz(15)).toBe('fizzBuzz');
});