import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

console.log (document.querySelector("#reset-button"))
document.querySelector("#reset-button").addEventListener("click", clean);

function clean() {
  document.querySelector('[name=user-input]').value = '';
}

const textarea = document.querySelector('[name=user-input]');
textarea.addEventListener('input', function() {
  const texto = textarea.value;

  const palavras = texto.split(/\s+/).filter(Boolean).length;
  const numeros = texto.match(/\d+/g) ? texto.match(/\d+/g).length : 0;
  const caracteres = texto.length;

  console.log(`Palavras: ${palavras}, Números: ${numeros}, Caracteres: ${caracteres}`);
});