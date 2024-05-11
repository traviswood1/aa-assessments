const { expect } = require("chai");

const twoSum = require("../problems/06-two-sum");

describe("twoSum()", function() {
    it("should return a boolean if two numbers add to target", function() {
        const arr1 = [1, 7, 3, 0, 2];
        const arr2 = [4, 6, 2, 3];

        expect(twoSum(arr1, 5)).to.equal(true);
        expect(twoSum(arr1, 6)).to.equal(false);
        expect(twoSum(arr2, 8)).to.equal(true);
        expect(twoSum(arr2, 11)).to.equal(false);
    });
});