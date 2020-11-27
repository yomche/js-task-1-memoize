const memoize = require('./memoize');

describe('it should', () => {
    test('be a function', () => {
        expect(typeof memoize).toBe('function');
    });

    test('return undefined if no function provided', () => {
        [undefined, null, 123, {}].forEach((n) => {
            expect(memoize(n)).toBe(undefined);
        });
    });

    test('return some function if any function was provided', () => {
        expect(typeof memoize(() => {})).toBe('function');
    });
});

describe('it should not', () => {
    let count = 0;
    // eslint-disable-next-line no-unused-vars
    function incrementCount(value) {
        // eslint-disable-next-line no-plusplus
        return ++count;
    }

    const memoizedIncrementCounter = memoize(incrementCount);

    test('be equal to the original function', () => {
        expect(memoize(incrementCount)).not.toEqual(incrementCount);
    });

    test('be called twice with the same arguments', () => {
        expect(memoizedIncrementCounter(15)).toEqual(1);
        expect(memoizedIncrementCounter(15)).toEqual(1);
        expect(memoizedIncrementCounter(5)).toEqual(2);
        expect(memoizedIncrementCounter(10)).toEqual(3);
        expect(memoizedIncrementCounter(5)).toEqual(2);
    });
});
