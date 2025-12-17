const fizzBuzz = require('../../dist/helper');

test('fizzBuzz function test int pattern', () => {
    expect(fizzBuzz(-15)).toBe('fizzbuzz');
    expect(fizzBuzz(-5)).toBe('buzz');
    expect(fizzBuzz(-3)).toBe('fizz');
    expect(fizzBuzz(-2)).toBe(-2);
    expect(fizzBuzz(-1)).toBe(-1);
    expect(fizzBuzz(0)).toBe('fizzbuzz');
    expect(fizzBuzz(1)).toBe(1);
    expect(fizzBuzz(2)).toBe(2);
    expect(fizzBuzz(3)).toBe('fizz');
    expect(fizzBuzz(4)).toBe(4);
    expect(fizzBuzz(5)).toBe('buzz');
    expect(fizzBuzz(6)).toBe('fizz');
    expect(fizzBuzz(7)).toBe(7);
    expect(fizzBuzz(8)).toBe(8);
    expect(fizzBuzz(9)).toBe('fizz');
    expect(fizzBuzz(10)).toBe('buzz');
    expect(fizzBuzz(11)).toBe(11);
    expect(fizzBuzz(12)).toBe('fizz');
    expect(fizzBuzz(13)).toBe(13);
    expect(fizzBuzz(14)).toBe(14);
    expect(fizzBuzz(15)).toBe('fizzbuzz');
});

test('fizzBuzz function test float pattern', () => {
    expect(fizzBuzz(-15.1)).toBe('fizzbuzz');
    expect(fizzBuzz(-5.1)).toBe('buzz');
    expect(fizzBuzz(-3.1)).toBe('fizz');
    expect(fizzBuzz(-2.1)).toBe(-2);
    expect(fizzBuzz(-1.1)).toBe(-1);
    expect(fizzBuzz(0.0)).toBe('fizzbuzz');
    expect(fizzBuzz(1.0)).toBe(1);
    expect(fizzBuzz(1.1)).toBe(1);
    expect(fizzBuzz(2.0)).toBe(2);
    expect(fizzBuzz(2.1)).toBe(2);
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