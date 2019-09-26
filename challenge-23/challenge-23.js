(function challenge23(win, doc){
  'use strict';
  /*
  Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
  As regras são:

  - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
  diretamente;
  - O input deve iniciar com valor zero;
  - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
  - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
  multiplicação(x) e divisão(÷);
  - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
  que irá limpar o input, deixando-o com valor 0;

  - A cada número pressionado, o input deve atualizar concatenando cada valor
  digitado, como em uma calculadora real;
  - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
  operação no input. Se o último caractere no input já for um símbolo de alguma
  operação, esse caractere deve ser substituído pelo último pressionado.
  Exemplo:
  - Se o input tem os valores: "1+2+", e for pressionado o botão de
  multiplicação (x), então no input deve aparecer "1+2x".
  - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
  input;
  - Ao pressionar o botão "CE", o input deve ficar zerado.
  */
  var $input = doc.querySelector('[data-js="input"]')
  
  var $equal = doc.querySelector('[data-js="equal"]');
  var $reset = doc.querySelector('[data-js="reset"]')
  var $plus = doc.querySelector('[data-js="plus"]');
  var $minus = doc.querySelector('[data-js="minus"]');
  var $mult = doc.querySelector('[data-js="mult"]'); 
  var $division = doc.querySelector('[data-js="division"]'); 

  var $btn1 = doc.querySelector('[data-js="btn1"]');
  var $btn2 = doc.querySelector('[data-js="btn2"]');
  var $btn3 = doc.querySelector('[data-js="btn3"]');
  var $btn4 = doc.querySelector('[data-js="btn4"]');
  var $btn5 = doc.querySelector('[data-js="btn5"]');
  var $btn6 = doc.querySelector('[data-js="btn6"]');
  var $btn7 = doc.querySelector('[data-js="btn7"]');
  var $btn8 = doc.querySelector('[data-js="btn8"]');
  var $btn9 = doc.querySelector('[data-js="btn9"]');
  var $btn0 = doc.querySelector('[data-js="btn0"]');


  $btn1.addEventListener('click', function(){
    $input.value += 1; 
  });
  



  // var btns = [$btn0, $btn1, $btn2, $btn3, $btn4, $btn5, $btn6, $btn7, $btn8, $btn9]

  // btns.forEach(function(item, index){
  //   console.log(item[index])
  // })


  



})(window, document)
