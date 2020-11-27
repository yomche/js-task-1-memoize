function memoize(inFunc) {
    if (typeof inFunc !== 'function') {
        return undefined;
    }
    const cache = {};
    return function outFunc(...args) {
        const key = JSON.stringify(args);
        if (cache[key] !== undefined) {
            return cache[key];
        }
        const result = inFunc.apply(this, args);
        cache[key] = result;
        return result;
    };
}

module.exports = memoize;
