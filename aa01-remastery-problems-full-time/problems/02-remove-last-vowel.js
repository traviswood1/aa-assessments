/*
Write a function `removeLastVowel(word)` that takes in a string and returns the
string with its last vowel removed.
*/

// Your code here 

function removeLastVowel(word) {
  let VOWELS = ['a', 'e', 'i', 'o', 'u'];
  lowerStr = word.toLowerCase();
  splitStr = lowerStr.split('');
  for (let i = word.length - 1; i >= 0; i--) {
    if (VOWELS.includes(splitStr[i])) {
      splitStr.splice(i, 1);
      splitStr = splitStr.join('');
      return splitStr;
    }
  } 
  return word;
}

console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = removeLastVowel;
  } catch (e) {
    module.exports = null;
  }