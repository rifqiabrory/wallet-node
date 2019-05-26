var converToCamelCase = require('../../lib/jasmines_test/UnderscoredToCamelCase');

describe("Any value will be converted to camelcase", function () {
    it("can be converted", function (done) {
        let value = "underscore_to_camel_case";
        console.log(`Before : ${value}`);
        expect(converToCamelCase(value)).toBe("underscoreToCamelCase");
        done();
        console.log(`Result : ${converToCamelCase(value)}`);
    });
});