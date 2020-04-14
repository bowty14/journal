
export function Entry(title, text) {
  this.title = title;
  this.text = text;
}

Entry.prototype.numWords = function () {
  let sentence = this.text;
  return sentence.split(' ').length;
};

Entry.prototype.numVowels = function () {
  var vowels = this.text.match(/[aeiou]/gi);
  return vowels === null ? 0 : vowels.length;
};

Entry.prototype.numConsonants = function () {
  var consonants = this.text.match(/[bcdfghjklmnpqrstvxzwy]/gi);
  return consonants === null ? 0 : consonants.length;
};

Entry.prototype.getTeaser = function () {
  var sentenceSplit = this.text.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|")[0];
  var words = this.numWords(sentenceSplit);
  var firstEightWords = sentenceSplit.split(' ');
  if (words > 8) {
    return firstEightWords.slice(0, 8).join(" ");
  } else {
    return sentenceSplit;
  }
};

//var firstLine = theString.split('\n')[0];



// Create a journaling website where a user can write entries including at least a title and body. Create Entry objects that include a method to return the number of words in the entry. Then, add a separate method (or methods) to return the number of vowels and consonants in each entry. Call each of these methods from your front-end file to display their return values. Finally, add a method called getTeaser to return the first sentence of the entry. If the sentence is over 8 words

// Create a journaling website where a user can write 