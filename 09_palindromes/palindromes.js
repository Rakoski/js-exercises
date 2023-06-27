const palindromes = function (word) {
  const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  const reversedWord = cleanedWord.split('').reverse().join('');

  return cleanedWord === reversedWord;
};

console.log(palindromes('Hannah'))

// Do not edit below this line
module.exports = palindromes;
