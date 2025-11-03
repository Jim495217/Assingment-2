// src/textAnalyzer.js
const fs = require('fs');

// Function to count total words
function countWords(text) {
  const words = text.trim().split(/\s+/);
  return words.length;
}

// Function to find the longest word
function findLongestWord(text) {
  const words = text.trim().split(/\s+/);
  return words.reduce((longest, word) =>
    word.length > longest.length ? word : longest
  , '');
}

// Function to count total lines
function countLines(text) {
  const lines = text.split(/\r\n|\r|\n/);
  return lines.length;
}

// Example verification (optional)
if (require.main === module) {
  const sampleText = fs.readFileSync('./data/sample-text.txt', 'utf-8');
  console.log('Word Count:', countWords(sampleText));
  console.log('Longest Word:', findLongestWord(sampleText));
  console.log('Line Count:', countLines(sampleText));
}

module.exports = { countWords, findLongestWord, countLines };
