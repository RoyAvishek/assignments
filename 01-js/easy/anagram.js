/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for (let char of str1) {
    if (str2.indexOf(char) === -1) {
      return false;
    }
  }

  return true;
}

/*

function isAnagram(str1, str2) {
  // Remove spaces and convert to lowercase for case-insensitivity
  const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();

  //\s: This is a regular expression pattern that matches any whitespace character. Whitespace characters include spaces, tabs, and line breaks. g: This is a flag that stands for "global." When used with the regular expression, it ensures that the replacement is applied globally throughout the entire string. Without the g flag, only the first occurrence would be replaced. So, /\s/g as a whole matches all whitespace characters in a string.

  // Sort the characters and compare the sorted strings
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

// Example usage:
console.log(isAnagram('Listen', 'Silent')); // Output: true


*/

module.exports = isAnagram;
