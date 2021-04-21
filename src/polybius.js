// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // our object that we can navigate through
  const coordinates = {
    11: "a",
    12: "f",
    13: "l",
    14: "q",
    15: "v",
    21: "b",
    22: "g",
    23: "m",
    24: "r",
    25: "w",
    31: "c",
    32: "h",
    33: "n",
    34: "s",
    35: "x",
    41: "d",
    42: "(i/j)",
    43: "o",
    44: "t",
    45: "y",
    51: "e",
    52: "k",
    53: "p",
    54: "u",
    55: "z",
  };
  function polybius(input, encode = true) {
    //DECODING:
    if(!encode){      
      // decode function (if the encode parameter is false)
      // input is a string of number 
      //spliting the string so we can re-assign the characters
      const splitArray = input.split(' ');
      const numberArray = [];
      const decodedMessage = [];
      // early exit of the if statement if the input doesnt have a space
      if(splitArray.join("").length % 2 !== 0) return false;
      // splitting the input into two words then looping through each
      for(i=0; i<splitArray.length; i++){
        // setting a variable to each word in the split array 
        const string = splitArray[i];
        //looping through each word in the array
        for(let j=0;j < splitArray[i].length; j+=2){
          //pushing every pair of numbers into an array we can work with
          numberArray.push(string.substring(j, j + 2));
        }
        // after each word has been looped we push the first word with the second word pushing with a " "
        numberArray.push(" ")
      }
      //remove last item of number array which will always be a space
      numberArray.pop()
      // looping through the new array to decode
      for(let pair of numberArray){
        //if the item the in array is a space then
        if(pair === " "){
          //push the index to the message
          decodedMessage.push(pair)
          //else we will find the letter 
        } else {
          //set a new var and get the index of our coordinates
          const foundLetter = coordinates[pair];
          // we push this found letter from our coordinates to our decoded message
          decodedMessage.push(foundLetter)
        }
      }
      // finally return the decoded message and join it 
      return decodedMessage.join("")
    //ENCODING:
    }else  {
      // encode function(if true:default)
      let encodedMessage = [];
      // spliting the input and convert to lowercase
      let letterArray = input.toLowerCase().split("");
      // going through each character of the input array      
     for(let character of letterArray) {
       //setting an edgecase for i/j
       if(character === "i" || character === "j"){
         //if the value from the input is i or j we'll always push 42 to our message
         encodedMessage.push(42);
         //for rest of cases we can find our coordinates
       }else {
         // we can find our coordinates with the key value from our object
        let foundNumber = Object.keys(coordinates).find(
          //using the higher method find we can match our character from our 
          //input and compare it to the coordinates
          (key) => coordinates[key] === character
        );
        // we can check if there is no found number ie not found in the coordinates then replace with a ' '
        if (!foundNumber){
          foundNumber = " ";
        }
        // pushing each of our found numbers to an encoded message array
        encodedMessage.push(foundNumber)
       };
     } // we join our message here so we can return our encyrpted message
      return encodedMessage.join('')
    }   
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
