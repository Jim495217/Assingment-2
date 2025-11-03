// src/numberProcessor.js
const fs = require('fs');

// Function to calculate sum
function sumNumbers(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Function to find highest number
function findHighest(numbers) {
  return Math.max(...numbers);
}

// Function to find lowest number
function findLowest(numbers) {
  return Math.min(...numbers);
}

// Function to calculate average
function calculateAverage(numbers) {
  return sumNumbers(numbers) / numbers.length;
}

// Example verification (optional)
if (require.main === module) {
  const file = fs.readFileSync('./data/sample-numbers.txt', 'utf-8');
  const nums = file.split(/\r?\n/).map(Number).filter(n => !isNaN(n));
  console.log('Sum:', sumNumbers(nums));
  console.log('Highest:', findHighest(nums));
  console.log('Lowest:', findLowest(nums));
  console.log('Average:', calculateAverage(nums));
}

module.exports = { sumNumbers, findHighest, findLowest, calculateAverage };
