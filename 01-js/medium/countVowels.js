/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const vowels = ['a','e','i','o','u']
    let count = 0

    str.replace(/\s/g,'').toLowerCase().split('').forEach(element => {
      if (vowels.includes(element)) count++
    });

    return count;


    // const vowelRegex = /[aeiou]/gi;  // Case-insensitive regular expression for vowels
    // const matches = str.match(vowelRegex);
    
    // return matches ? matches.length : 0;
}

module.exports = countVowels;