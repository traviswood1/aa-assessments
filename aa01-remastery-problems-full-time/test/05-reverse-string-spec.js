const { expect } = require("chai");

const reverseString = require("../problems/05-reverse-string");

describe("reverseString()", function() {
    it("returns a reversed string", function() {
        const str1 = 'fish';
        const str2 = 'marathon';
        const str3 = 'banana';

        expect(reverseString(str1)).to.equal('hsif');
        expect(reverseString(str2)).to.equal('nohtaram');
        expect(reverseString(str3)).to.equal('ananab');
    });
});