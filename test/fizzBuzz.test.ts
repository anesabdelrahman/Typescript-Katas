import { fizzBuzz, fizzBuzzTo } from '../src/fizzBuzz'

describe('Series of tests for FizzBuzz kata', () => {
    test('when 1 is passed in, return 1', () => {
        const expected = "1"
        const actual = fizzBuzz(1);
        expect(actual).toBe(expected);
    });
    
    test('when 3 is passed in, return Fizz', () => {
        const expected = "Fizz"
        const actual = fizzBuzz(3);
        expect(actual).toBe(expected);
    });
    
    test('when 37 is passed in, return Fizz', () => {
        const expected = "Fizz"
        const actual = fizzBuzz(37);
        expect(actual).toBe(expected);
    });
    
    test('when 5 is passed in, return Buzz', () => {
        const expected = "Buzz"
        const actual = fizzBuzz(5);
        expect(actual).toBe(expected);
    });
    
    test('when 5 is passed in, return Buzz', () => {
        const expected = "Buzz"
        const actual = fizzBuzz(58);
        expect(actual).toBe(expected);
    });
    
    test('when 15 is passed in, return FizzBuzz', () => {
        const expected = "FizzBuzz"
        const actual = fizzBuzz(15);
        expect(actual).toBe(expected);
    });
    
    test('when fizzBuzzTo100 is called, print out 1 to 100 with Fizz and Buzz', () => {
        const expected =     [
            '1',    '2',    'Fizz',     '4',    'Buzz', 'Fizz',
            '7',    '8',    'Fizz',     'Buzz', '11',   'Fizz',
            'Fizz', '14',   'FizzBuzz', '16',   '17',   'Fizz',
            '19',   'Buzz', 'Fizz',     '22',   'Fizz', 'Fizz',
            'Buzz', '26',   'Fizz',     '28',   '29',   'FizzBuzz',
            'Fizz', 'Fizz', 'Fizz',     'Fizz', 'Fizz', 'Fizz',
            'Fizz', 'Fizz', 'Fizz',     'Buzz', '41',   'Fizz',
            'Fizz', '44',   'FizzBuzz', '46',   '47',   'Fizz',
            '49',   'Buzz', 'Fizz',     'Buzz', 'Fizz', 'Fizz',
            'Buzz', 'Buzz', 'Fizz',     'Buzz', 'Buzz', 'FizzBuzz',
            '61',   '62',   'Fizz',     '64',   'Buzz', 'Fizz',
            '67',   '68',   'Fizz',     'Buzz', '71',   'Fizz',
            'Fizz', '74',   'FizzBuzz', '76',   '77',   'Fizz',
            '79',   'Buzz', 'Fizz',     '82',   'Fizz', 'Fizz',
            'Buzz', '86',   'Fizz',     '88',   '89',   'FizzBuzz',
            '91',   '92',   'Fizz',     '94',   'Buzz', 'Fizz',
            '97',   '98',   'Fizz',     'Buzz'
          ]
        const actual: string[] = fizzBuzzTo(100);
        expect(actual).toEqual(expected);
    });
})
