const { expect } = require("chai");

const eCounter = require("../problems/07-while-loop-translation");

describe("eCounter()", function() {
    it("should use a while loop", function() {
        const funcStr = eCounter.toString();
        expect(funcStr.includes("while(")).to.equal(true);
    });

    it("returns the number of e's in a word", function() {
        const str1 = 'apple';
        const str2 = 'appleapple';

        expect(eCounter(str1)).to.equal(1);
        expect(eCounter(str2)).to.equal(2);
    });

    it("should count both uppercase and lowercase e's", function() {
        const upperStr = 'EVE';
        const mixedStr = 'AppleEe';

        expect(eCounter(upperStr)).to.equal(2);
        expect(eCounter(mixedStr)).to.equal(3);
    });
});