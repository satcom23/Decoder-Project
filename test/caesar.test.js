// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar()", () => {
    it("should return false if the shift is undefined",()=>{
        const message = "zebra magazine";
        const shift = 0;
        const actual = caesar(message, shift);
        expect(actual).to.be.false
    })
    it("should return false if the shift amount is 0", () => {
        const message = "zebra magazine";
        const shift = 0;
        const actual = caesar(message, shift);  
        expect(actual).to.be.false;
      });
  
      it("should return false if the shift amount is above 25", () => {
        const message = "zebra magazine";
        const shift = 26;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
      });
  
      it("should return false if the shift amount is less than -25", () => {
        const message = "zebra magazine";
        const shift = -26;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
      });

      it("should encode a message by shifting the letters", () => {
        const message = "caesar";
        const shift = 4;
        const actual = caesar(message, shift);
        const expected = "geiwev";
        expect(actual).to.be.equal(expected);
      });
  
      it("should ignore capital letters", () => {
        const message = "FULL SEND";
        const shift = 4;
        const actual = caesar(message, shift);
        const expected = "jypp wirh"; 
        expect(actual).to.be.equal(expected);
      });
  
      it("should properly handle letters at the end of the alphabet", () => {
        const message = "boiz night";
        const shift = 4;
        const actual = caesar(message, shift);
        const expected = "fsmd rmklx"; 
        expect(actual).to.be.equal(expected);
      });

      it("should leaves spaces and other symbols as is", () => {
        const message = "a m e s s a g e";
        const shift = 4;
        const actual = caesar(message, shift);
        expect(actual).to.include(" ");
      });

      it("should allow for a negative shifts that will move to the left", () => {
        const message = "shift left";
        const shift = -4;
        const actual = caesar(message, shift);
        const expected = "odebp habp"; 
        expect(actual).to.be.equal(expected);
      });

      it("should decode a message by shifting the letters in the opposite direction", () => {
        const message = "csy ampp riziv orsa";
        const shift = 4;
        const actual = caesar(message, shift, false);
        const expected = "you will never know";
        expect(actual).to.be.equal(expected);
      });
});