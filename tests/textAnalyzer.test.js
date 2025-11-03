// tests/textAnalyzer.test.js
const { countWords, findLongestWord, countLines } = require('../src/textAnalyzer');

describe('Text Analyzer Functions', () => {
  const text = "Hello world!\nThis is a test file.\nChatGPT rocks.";

  test('counts total words correctly', () => {
    expect(countWords(text)).toBe(8);
  });

  test('finds the longest word correctly', () => {
    expect(findLongestWord(text)).toBe('ChatGPT');
  });

  test('counts total lines correctly', () => {
    expect(countLines(text)).toBe(3);
  });
});
