// Write your tests here!
const { expect } = require('chai');
const { polybius } = require("../src/polybius")

describe("polybius()",()=>{
    it("when encoding should translate letters i and j into 42", () => {
        const message = "jimmy";
        const actual = polybius(message);
        const expected = "4242232345";
        expect(actual).to.be.equal(expected);
    });

    it("when decoding should translate 42 to (i/j)", ()=>{
        const message = "4242232345";
        const actual = polybius(message, false);
        expect(actual).to.include("i");
        expect(actual).to.include("j");
    });

    it("should ignore capitol letters", ()=>{
        const message = "FULL SEND";
        const actual = polybius(message);
        const expected = "12541313 34513341";
        expect(actual).to.be.equal(expected);
    });

    it("should maintain spaces in messages", ()=>{
        const message = "h e l l o";
        const actual = polybius(message);
        expect(actual).to.include(" ");
    });
})