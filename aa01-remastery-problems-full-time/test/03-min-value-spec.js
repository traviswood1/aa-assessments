const { expect } = require("chai");

const minValue = require("../problems/03-min-value");

describe("minValue()", function() {
    it("should return the smallest number in the array", function() {
        const numArr1 = [4, 6, 3, 5, 2, 4];
        const numArr2 = [-2, -3, -7, 3 ];

        expect(minValue(numArr1)).to.equal(2);
        expect(minValue(numArr2)).to.equal(-7);
    });

    it("should return null for an empty array", function() {
        const emptyArr = [];

        expect(minValue(emptyArr)).to.equal(null);
    });
});