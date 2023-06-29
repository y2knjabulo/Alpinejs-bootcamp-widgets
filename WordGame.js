
  function longestWord(sentence) {
    const words = sentence.split(' ');
    let longest = '';
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longest.length) {
        longest = words[i];
      }
    }
    return longest;
  }
  
  function shortestWord(sentence) {
    const words = sentence.split(' ');
    let shortest = words[0];
    for (let i = 1; i < words.length; i++) {
      if (words[i].length < shortest.length) {
        shortest = words[i];
      }
    }
    return shortest;
  }
  
  function longestWord(sentence) {
    const words = sentence.split(' ');
    let longest = '';
    for (let i = 0; i < words.length; i++) {
      if (words[i].length >= longest.length) {
        longest = words[i];
      }
    }
    return longest;
  }
  
  function shortestWord(sentence) {
    const words = sentence.split(' ');
    let shortest = words[0];
    for (let i = 1; i < words.length; i++) {
      if (words[i].length < shortest.length) {
        shortest = words[i];
      }
    }
    return shortest;
  }
  
  function wordLengths(sentence) {
    const words = sentence.split(' ');
    let sum = 0;
    for (let i = 0; i < words.length; i++) {
      sum += words[i].length;
    }
    return sum;
  }


  document.addEventListener('DOMContentLoaded', () => {
    Alpine.data('widget', () => ({
      resultsVisible: false,
      longestWord: '',
      shortestWord: '',
      wordLengths: 0,

      analyzeSentence() {
        const sentence = document.getElementById('sentenceInput').value;
        this.longestWord = longestWord(sentence);
        this.shortestWord = shortestWord(sentence);
        this.wordLengths = wordLengths(sentence);
        this.resultsVisible = true;
      },
    }));
  });