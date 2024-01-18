document.addEventListener("DOMContentLoaded", function() {
  var excerptElements = document.querySelectorAll('.excerpt');

  excerptElements.forEach(function(excerptElement) {
    var excerptText = excerptElement.textContent;

    // Limitar el texto a 300 caracteres y agregar puntos suspensivos
    var truncatedText = excerptText.length > 300 ? excerptText.substring(0, 300) + '...' : excerptText;

    // Asignar el texto truncado de nuevo al elemento
    excerptElement.textContent = truncatedText;
  });
});


let question = document.querySelectorAll('.question');

let btnDropDown = document.querySelectorAll('.question .more');

let answer = document.querySelectorAll('.answer');

let parrafo = document.querySelectorAll('.answer p');

for (let i = 0; i < btnDropDown.length; i ++){

  let altoParrafo = parrafo[i].clientHeight;

  let switchh = 0;

  btnDropDown[i].addEventListener('click', () => {

    if( switchh == 0 ){

      answer[i].style.height = `${altoParrafo}px`;
      question[i].style.marginBotton = '10px';
      btnDropDown[i].innerHTML = '<i>-</i>';
      switchh ++;

    }

    else if( switchh == 1 ){

      answer[i].style.height = `0`;
      question[i].style.marginBotton = '0';
      btnDropDown[i].innerHTML = '<i>+</i>';
      switchh --;

    }

  })

}