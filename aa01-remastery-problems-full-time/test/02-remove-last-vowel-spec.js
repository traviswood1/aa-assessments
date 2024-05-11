const { expect } = require("chai");

const removeLastVowel = require("../problems/02-remove-last-vowel");

describe("removeLastVowel()", function() {
    it("returns the string with the last vowel removed", function() {
        const string1 = 'bootcamp';
        const string2 = 'thy';

        expect(removeLastVowel(string1)).to.equal('bootcmp');
        expect(removeLastVowel(string2)).to.equal('thy');
    });
});