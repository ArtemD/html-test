const hello = require('./name');

test('Lets see if hello works', () => {
    expect(hello('Mikko')).toBe('Hello Mikko');
});

test('Lets see if it works with int', () => {
    expect(hello(4)).toBe('Hello 4');
});

test('Lets see if it works with float', () => {
    expect(hello(4.22)).toBe('Hello 4.22');
});