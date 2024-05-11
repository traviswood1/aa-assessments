const { expect } = require("chai");

const twoDimensionalSum = require("../problems/04-two-dimensional-sum");

describe("twoDimensionalSum()", function() {
    it("returns the sum of all numbers", function() {
        const arr1 = [
            [1, 3],
            [-4, 7, 10],
            [2]
        ];
        const arr2 = [
            [],
            [3, 1, 2],
        ];
        const arr3 = [
            [],
            []
        ];

        expect(twoDimensionalSum(arr1)).to.equal(19);
        expect(twoDimensionalSum(arr2)).to.equal(6);
        expect(twoDimensionalSum(arr3)).to.equal(0);
    });
});