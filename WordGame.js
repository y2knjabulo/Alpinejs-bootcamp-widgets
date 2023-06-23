
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

  document.addEventListener('alpine:init', () => {
    Alpine.data('wordGame', () => ({
      sentence: '',
      longestWord: '',
      shortestWord: '',
      wordLengthsSum: 0,
      calculateWords() {
        this.longestWord = longestWord(this.sentence);
        this.shortestWord = shortestWord(this.sentence);
        this.wordLengthsSum = wordLengths(this.sentence);
      }
    }));
  });