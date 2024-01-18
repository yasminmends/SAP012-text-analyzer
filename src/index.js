import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const textarea = document.querySelector('[name=user-input]');
const wordCount = document.querySelector('[data-testid="word-count"]');
const caracteres = document.querySelector('[data-testid="character-count"]');
const caracteresExSpace = document.querySelector('[data-testid="character-no-spaces-count"]')
const comprimento = document.querySelector('[data-testid="word-length-average"]')
const numbers = document.querySelector('[data-testid="number-count"]')
const numberSum = document.querySelector('[data-testid="number-sum"]')


textarea.addEventListener('input', function () {
  const texto = textarea.value;
  wordCount.textContent = `contagem de palavras:${analyzer.getWordCount(texto)}`
  caracteres.textContent = `contagem de caracteres:${analyzer.getCharacterCount(texto)}`
  caracteresExSpace.textContent = `contagem de caracteres excluindo espaços e sinais de pontuação:${analyzer.getCharacterCountExcludingSpaces(texto)}`
  comprimento.textContent = `comprimento médio das palavras:${analyzer.getAverageWordLength(texto)}`
  numbers.textContent = `contagem de números:${analyzer.getNumberCount(texto)}`
  numberSum.textContent = `soma total de números:${analyzer.getNumberSum(texto)}`

});

document.getElementById("reset-button").addEventListener("click", clean);

function clean() {
  textarea.value = '';
  wordCount.textContent = "contagem de palavras: 0";
  caracteres.textContent = "contagem de caracteres: 0";
  caracteresExSpace.textContent = "contagem de caracteres excluindo espaços e sinais de pontuação: 0";
  comprimento.textContent = "comprimento médio das palavras: 0";
  numbers.textContent = "contagem de números: 0";
  numberSum.textContent = "soma total de números: 0";
}