const { expect } = require("chai");

const lastVowel = require("../problems/01-last-vowel");

describe('lastVowel()', function() {
    it('returns the last vowel that appears sequentially in the string', function() {
        const lowerString1 = 'battery';
        const lowerString2 = 'conventional';
        expect(lastVowel(lowerString1)).to.equal('e');
        expect(lastVowel(lowerString2)).to.equal('a');
    });

    it('handles both lowercase and uppercase letters', function() {
        const upperString = 'TUNNEL';
        const mixedString = 'BaNaNA';
        expect(lastVowel(upperString)).to.equal('E');
        expect(lastVowel(mixedString)).to.equal('A');
    });

    it('returns null if the string contains no vowels', function() {
        const noVowelsString = 'rhythm';
        expect(lastVowel(noVowelsString)).to.equal(null);
    });
});