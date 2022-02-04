/**
 * words contendrá a las palabras que se
 * estarán moviendo, unidas por la clase word
 */
let words = document.getElementsByClassName('word');
/**
 * Esta variable almacenará cada palabra, pero dividida
 * en un array con sus respectivas letras.
 * Ejemplo, si la primera palabra contiene 9 letras, y la segunda 6 letras,
 * wordArray en la posicion 0 contendrá un array de 9 indices, y en la
 * posicion 1 contendrá un array de 6 indices, y asi sucesivamente;
 * todo eso sucede en la funcion splitLetters
 */
let wordArray = [];
/**
 * Lo que permite currentWord es saber de qué
 * letra a qué letra pasará, por ejemplo, en primera
 * carga, pasara del indice 0 al 1
 */
let currentWord = 0;


//Separar letras
const splitLetters = (word) => {
  //Word contiene el span
  //word.innerHTML contiene la palabra
  let content = word.innerHTML;
  word.innerHTML = '';
  //Se quitó el contenido de ese Span

  let letters = [];
  for (let i = 0; i < content.length; i++) {
    let letter = document.createElement('span');
    letter.className = 'letter';
    //charAt() devuelve el caracter de un string ubicado en X posicion
    //Recordemos que la variable content contiene el contenido de la variable word
    letter.innerHTML = content.charAt(i);
    //Agrega a word el span de cada letra de la palabra
    word.appendChild(letter);
    //Letters contiene en cada indice la respectiva letra de la palabra
    letters.push(letter);
  }
  //wordArray contiene a cada palabra del array letters
  wordArray.push(letters);
}

words[currentWord].style.opacity = 1;
for (let i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

const changeWord = () => {
  //cw = current word (palabra actual, es la que se está mostrando en pantalla)
  let cw = wordArray[currentWord];
  //nw = new word (es la siguiente palabra que se mostrará)
  /**
   * Si la palabra actual es igual a la ultima palabra del array words entonces,
   * la nueva palabra será la primera, en caso contrario, la nueva palabra será
   * la siguiente a la actual
   */
  let nw = (currentWord == words.length-1) ? wordArray[0] : wordArray[currentWord+1];

  for (let i = 0; i < cw.length; i++) {
    //Anima cada letra de una palabra
    animateLetterOut(cw, i);
  }
  
  for (let i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    //Anima cada letra de una palabra
    animateLetterIn(nw, i);
  }
  
  //La misma idea de la condicion de nw
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

const animateLetterOut = (cw, i) => {
  //Lo ejecuta despues de cierto tiempo
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  //Lo ejecuta despues de cierto tiempo
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

changeWord();

/**
 * El window setInterval() llama a una
 * función en un intervalo especifico de milisegundos,
 * está se continua ejecutando hasta que se llame
 * al metodo ClearInterval(), pero como no se llama
 * no se detiene la ejecucion.
 */
setInterval(changeWord, 4000);

