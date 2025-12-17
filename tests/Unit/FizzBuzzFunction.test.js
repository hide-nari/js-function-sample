const fizzBuzz = require('../../dist/helper');

test('fizzBuzz function test int pattern', () => {
    expect(fizzBuzz(1)).toBe(1);
    expect(fizzBuzz(3)).toBe('fizz');
    expect(fizzBuzz(5)).toBe('buzz');
    expect(fizzBuzz(15)).toBe('fizzbuzz');
});

test('fizzBuzz function test float pattern', () => {
    expect(fizzBuzz(1.0)).toBe(1);
    expect(fizzBuzz(1.1)).toBe(1);
    expect(fizzBuzz(3.0)).toBe('fizz');
    expect(fizzBuzz(3.1)).toBe('fizz');
    expect(fizzBuzz(5.0)).toBe('buzz');
    expect(fizzBuzz(5.1)).toBe('buzz');
    expect(fizzBuzz(15.0)).toBe('fizzbuzz');
    expect(fizzBuzz(15.1)).toBe('fizzbuzz');
});

test('fizzBuzz function test bool pattern', () => {
    expect(fizzBuzz(true)).toBe(NaN);
    expect(fizzBuzz(false)).toBe(NaN);
});