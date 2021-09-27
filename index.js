
// ------------------------------------------------------
// Splitting the argument
// ------------------------------------------------------

function isPalindrome(word) {
  const reversedString = word.split('').reverse('').join('');
  // console.log(`Is ${word} a palindrome?:`);
  return reversedString === word ? true : false;
}

// ------------------------------------------------------
// Using a for loop to split and rebuild the string!
// ------------------------------------------------------
function palindromeLoop(word) {
  let reversedString = "";
  for (let i = word.length-1; i >= 0; i --){
    reversedString += word[i];
  }
  return reversedString === word ? true : false;
}

// ------------------------------------------------------
// BEST PRACTICE BELOW!
// ------------------------------------------------------

// without reversing the word!
function palindrome(word){
  let start = 0;
  let finish = word.length-1;
  while (start < finish) {
    if (word[start++] != word[finish--]){
      return false;
    } 
  }
  return true;
}
console.log(palindrome('testing'));
// console.log(palindromeLoop('testing'));
// console.log(isPalindrome('testing'));
// console.log(isPalindrome('racecar'));
// console.log(isPalindrome('tattarrattat'));
// console.log(isPalindrome('Bencivengo'));



/* 
  Add your pseudocode here
  //conditional statement
  
*/

/*
  Add written explanation of your solution here
  Declaring an empty result.
  Declaring a reversedString variable, this takes the argument, splits it, reverses it, and rejoins
  back into a single word.
  Then we use a simple conditional, asking if the reversedString is strictly
  equal to the argument. If it is, return true, else return false.
*/

// // // You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
