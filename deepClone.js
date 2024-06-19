function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }

    if (obj instanceof RegExp) {
        return new RegExp(obj);
    }

    if (Array.isArray(obj)) {
        clone = [];
        for(const item of obj) {
            clone.push(deepClone(item));
        }
        return clone;
    }

    const clone = {};
    for (const item in obj) {
        if (obj.hasOwnProperty(item)) {
            clone[item] = deepClone(obj[item]);
        }
    }

    return clone;
}
