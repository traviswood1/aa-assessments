const { expect } = require("chai");

const aCounter = require("../problems/08-for-loop-translation");

describe("aCounter()", function() {
    it("should use a for loop", function() {
        const funcStr = aCounter.toString();
        expect(funcStr.includes("for(")).to.equal(true);
    });

    it("returns the number of a's in a word", function() {
        const str1 = 'apple';
        const str2 = 'appleapple';

        expect(aCounter(str1)).to.equal(1);
        expect(aCounter(str2)).to.equal(2);
    });

    it("should count both uppercase and lowecase a's", function() {
        const upperStr = 'ANIMAL';
        const mixedStr = 'bAnanA';

        expect(aCounter(upperStr)).to.equal(2);
        expect(aCounter(mixedStr)).to.equal(3);
    });
});