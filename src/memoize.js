function memoize(inFunc) {
    if (typeof inFunc !== 'function') {
        return undefined;
    }
    const cache = {};
    return function outFunc(n) {
        const key = JSON.stringify(n);
        if (cache[key] === undefined) {
            const result = inFunc.call(this, n);
            cache[key] = result;
            return result;
        }
        return cache[key];
    };
}

module.exports = memoize;
