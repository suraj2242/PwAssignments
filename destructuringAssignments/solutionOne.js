// ================================
//              Problem
// ================================

// Problem : Count the occurrences
// You are building a word count generator that will take a large string of text as input and output the words and the number of times they are present in the string. Your task is to write a function that can count the occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can assume that the string only contains alphabetic characters and spaces.

// ========================
//         Solution
// ========================

function wordCounter(stringOfWords) {
  const listOfWords = stringOfWords.split(" ");
  const wordCounts = new Map();
  listOfWords.map((element) => {
    if (wordCounts.has(element)) {
      wordCounts.set(element, wordCounts.get(element) + 1);
    } else {
      wordCounts.set(element, 1);
    }
  });
  return wordCounts;
}

let aString = "The quick brown fox jumps over the lazy dog. The dog barks at the fox and the fox runs away. The quick brown dog jumps over the lazy fox";
console.log(wordCounter(aString));
