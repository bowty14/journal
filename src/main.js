import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Entry } from './journal.js';

$(document).ready(function () {
  $("#journalEntry").submit(function (event) {
    event.preventDefault();

    var title = $("#titleInput").val();
    var text = $("#journalTextInput").val();
    var newEntry = new Entry(title, text);
    var wordCount = newEntry.numWords();
    var vowelCount = newEntry.numVowels();
    var consonantCount = newEntry.numConsonants();
    console.log(newEntry.getTeaser());
    $(".ttlWords").text(wordCount);
    $(".ttlVowels").text(vowelCount);
    $(".ttlConsonants").text(consonantCount);
    $(".output").show();
  });
});