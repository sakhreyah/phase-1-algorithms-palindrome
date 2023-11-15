function isPalindrome(word) {
  // Write your algorithm here
  if (revWord(word) === word) { return true } else return false
}
function revWord(word) {

  const arr = []
  for (i = word.length - 1; i >= 0; i--) {
    arr.push(word[i])
  }
  return arr.join("")
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
