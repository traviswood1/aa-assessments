const { expect } = require("chai");

const isPrime = require("../problems/09-is-prime");

describe("isPrime()", function() {
    it("returns a boolean indicating if the number is prime", function() {
        expect(isPrime(10)).to.equal(false);
        expect(isPrime(11)).to.equal(true);
        expect(isPrime(1)).to.equal(false);
    })
});