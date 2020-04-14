import { Entry } from './../src/journal.js';

describe('Entry', () => {
  test('arguments are equal to themselves', () => {
    var entry = new Entry("", "");
    expect(entry.title).toEqual("");
    expect(entry.text).toEqual("");
  })
});

describe('Entry', () => {
  test('take a sentence and split it into individual words', () => {
    let sentence = "";
    var entry = new Entry("", sentence);
    expect(entry.numWords()).toEqual(sentence.split(' ').length)
  })
});

describe('Entry', () => {
  test('count how many vowels are in this.text', () => {
    let vowels = "";
    var entry = new Entry("", vowels);
    expect(entry.numVowels()).toEqual(vowels === null ? 0 : vowels.length)
  })
})   