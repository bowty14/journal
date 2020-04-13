


export function Entry(title, text) {
  this.title = title;
  this.text = text;
}

Entry.prototype.numWords = function () {
  return this.text.split(' ').length;
}

Entry.prototype.numVowels = function () {
  var vowels = this.text.match(/[aeiou]/gi);
  return vowels === null ? 0 : vowels.length;
}

Entry.prototype.numConsonants = function () {
  var consonants = this.text.match(/[bcdfghjklmnpqrstvxzwy]/gi);
  return consonants === null ? 0 : consonants.length;
}

Entry.prototype.getTeaser = function () {
  /* var preview = this.text.substring(0, this.text.indexOf(" "));
  return preview; */
  var sentenceSplit = this.text.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
}
