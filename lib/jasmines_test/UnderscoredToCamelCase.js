function UnderscoredToCamelCase(value) {
    return value.replace(/^([A-Z])|[\s-_](\w)/g, function (match,first, next) {
        const result = (next) ? (next.toUpperCase()) : (first.toLowerCase());
        return result
    });
};

module.exports = UnderscoredToCamelCase;