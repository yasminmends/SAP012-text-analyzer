const analyzer = {
  getWordCount: (text) => {
    const words = text.trim().split(/\s+/);
    return words.length;

  },
  getCharacterCount: (text) => {
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    const characters = text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");
    return characters.length;
  },
  getAverageWordLength: (text) => {
    const words = text.trim().split(/\s+/);
    let totalLength = 0;
    const wordCount = analyzer.getWordCount(text);

    for (let i = 0; i < words.length; i++) {
      totalLength += words[i].length;
    }

    const averageLength = totalLength / wordCount;
    return Math.round(averageLength * 100) / 100;
  },
  getNumberCount: (text) => {
    const matches = text.match(/\b\d+(?:\.\d+)?\b/g);
    if (matches) {
      return matches.length;
    } else {
      return 0;
    }
  },
  getNumberSum: (text) => {
    const numbers = text.match(/\b\d+(?:\.\d+)?\b/g) || [];
    const sum = numbers.reduce((acc, num) => {
      const parsedNum = parseFloat(num);
      return isNaN(parsedNum) ? acc : acc + parsedNum;
    }, 0);

    return Math.round(sum * 100) / 100;
  },
};

export default analyzer;
