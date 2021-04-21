// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
    it("should return false if the given alphabet isnt 26 characters", ()=>{
        const message = "test";
        const alphabet = "notenough";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
    });

    it("should correctly translate the given phase, based on alphabet given", () => {
        const message = "roscoe";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(message, alphabet);
        const expected = "xcrmck"
        expect(actual).to.be.equal(expected)
    })

    it("should return false if there are any duplicate character in alphabet", ()=> {
        const message = "duplicate";
        const alphabet = "abcabcabcabcabcabcabcabcab";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
    })

    it("should maintain spaces when encoding/decoding a message",()=>{
        const message = "to be fair";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet);
        expect(actual).to.include(" ");
    })
    it("should ignore capital letters", ()=>{
        const message = "ROSCOE";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet);
        const expected = "bviavs";
        expect(actual).to.be.equal(expected);
    })
})