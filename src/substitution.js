// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
//VALUES FOR LATER USE
  input = input.toLowerCase()
  const splitArray = input.split('')
  const normalAlphabet = "abcdefghijklmnopqrstuvwxyz"
  const substitutionAlphabet = alphabet
  let messageArray = [];
//ERROR HANDLING:
  if(!alphabet || alphabet.length !== 26 || alphabet === undefined) return false
  let alphabetSplit = alphabet.split("")
  // no duplicate characters in string
  for(let letter of alphabetSplit){
    let letterCount = alphabetSplit.filter(
      (character) => character === letter
    ).length
    if (letterCount > 1) return false;
  }
//HELPER FUNCTION 
function encoder(array, checkAlphabet, foundAlphabet){
  for(let character of array){
    if(checkAlphabet.includes(character)){
      let foundIndex = checkAlphabet.indexOf(character)
      let foundCharacter = foundAlphabet[foundIndex]
      messageArray.push(foundCharacter)
    }else {messageArray.push(character)}
  }
};
//DECODING SECTION:
if(!encode){
encoder(splitArray, substitutionAlphabet, normalAlphabet)
return messageArray.join('')
//ENCODING SECTION
}else{
encoder(splitArray, normalAlphabet, substitutionAlphabet)
return messageArray.join('')
}
  } 
   return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
