function isPalindrome(word) {
  word = word.toLowerCase();
    let reverseWord =
    word.split('').reverse().join('')
      return word === reverseWord;
}

console.log('abba')
console.log('racecar')
console.log('a')
console.log('robot')
console.log('ab')


/*
  Add written explanation of your solution here

  So to begin we create the function "isPalindrome(word)".
  We want to make sure every letter in that word is lower case so we pass
  the word and use the ".toLowerCase" expression. Once we have done that
  we want to get the word in reverse to make sure it still spells the same
  word in reverse. So then we say let reverseWord and now we want
  to make sure each word is seperated properly which is
  why we use the .split function. It splits a phrase for example
  "Hello how are you?" into ["Hello", "how", "are", "you?"].
  After that we use the .reverse function. What this does is
  it reverses the order of our array from the .split function.
  So for example, ["Hello", "how", "are", "you?"] becomes,
  ["you?", "are", "how", "Hello"]. Finally our .join function,
  it is used to take the words out of the array created previously
  and turns it into a string. So we have ["you?", "are", "how", "Hello"]
  turning into "you?", "are", "how", "Hello". So in summary 
  we call the function pass it through the code where
  it first gets turned into all lower case, then it gets
  turned into an array with the .split function, next we
  reverse the array with the .reverse function, and then finally
  we have the .join function to take it out of the array 
  and make it a string.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
