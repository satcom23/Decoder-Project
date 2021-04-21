// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function (input, shift, encode = true) {
  function caesar(input, shift, encode = true) {
  // check if shift value is within range or return false
  if (!shift || shift === 0 || shift < -25 || shift > 25 || shift === undefined) return false
  // checking weather to encode or decode, change shift value to negative
  if (!encode) shift *= -1
  // creating an alphabet to break up and create an idex to move through
  let alphabetArray = "abcdefghijklmnopqrstuvwxyz"
  //splitting input into an array we can loop through
  const inputArray = input.toLowerCase().split('')
  // make new array for return results to be pushed to
  const newArray = [];
  // looping through the split input array so we can compare with key
  for(let character of inputArray){
    // if the alphabet we created in line 16 includes all characters in input
    // then shift the index positive or negative to encode/decode
    if(alphabetArray.includes(character)){  
      // set the char index to the index that matches the character in the alphabet 
      const characterIndex = alphabetArray.indexOf(character);
      // with that new char index we can add our shift value and see our new position
      let newIndex = (characterIndex + shift)
      // if the new index is positive or 0 then we can
      // take the remainder of the new index divided by the alphabet length or %
      if(newIndex >= 0){
        // new index divided by 26 remainder of new index
        newIndex = newIndex%26
        // edge cases with negative
        // if the statement moves to else we can add the new index by the alpabet length
      } else newIndex = newIndex + 26
        // our shifted charactr is now extracted from the alphabet array with [newIndex]
      const shiftedCharacter = alphabetArray[newIndex];
        // we push this value into our array we created on line 20
      newArray.push(shiftedCharacter);
      // if the previous if statement doesnt pass i.e. " ","123","!@#" 
      // then it will just return the character back into the new array
    }else newArray.push(character)
  }
  // with the array of letters and additional characters we need to join them
  // we return the new array into the funtion to be used later
  return newArray.join('')
  }
  // we return the function into the ceasar module to be called 
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
