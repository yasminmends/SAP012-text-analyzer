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
    const totalLength = words.reduce((acc, word) => acc + word.length, 0);
    return totalLength / analyzer.getWordCount(text);
  },
  getNumberCount: (text) => {
    const numbers = text.match(/\d+/g);
    return numbers ? numbers.length : 0;
  },
  getNumberSum: (text) => {
    const numbers = text.match(/\d+/g);
    if (!numbers) return 0;
    return numbers.reduce((acc, num) => acc + parseInt(num), 0);
  },
};

export default analyzer;
