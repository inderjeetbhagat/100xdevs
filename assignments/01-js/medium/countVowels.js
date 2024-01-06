/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const vowels = [ 'a', 'e', 'i', 'o', 'u'];
    let lowerStr = str.toLowerCase();
    let array = lowerStr.split("");

    return array.reduce((count, char) => {vowels.includes(char) ? count ++ : count}, 0);


}

module.exports = countVowels;