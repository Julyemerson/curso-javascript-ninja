 (function challenge28(win,doc){
    'use strict';
   /*
    No HTML:
    - Crie um formulário com um input de texto que receberá um CEP e um botão
    de submit;
    - Crie uma estrutura HTML para receber informações de endereço:
    "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
    preenchidas com os dados da requisição feita no JS.
    - Crie uma área que receberá mensagens com o status da requisição:
    "Carregando, sucesso ou erro."

    No JS:
    - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
    deve ser limpo e enviado somente os números para a requisição abaixo;
    - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
    "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
    no input criado no HTML;
    - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
    com os dados recebidos.
    - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
    a mensagem: "Buscando informações para o CEP [CEP]..."
    - Se não houver dados para o CEP entrado, mostrar a mensagem:
    "Não encontramos o endereço para o CEP [CEP]."
    - Se houver endereço para o CEP digitado, mostre a mensagem:
    "Endereço referente ao CEP [CEP]:"
    - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
    adicionar as informações em tela.
    */

   var $rua = doc.querySelector('[data-js="logradouroField"]');
   var $bairro = doc.querySelector('[data-js="bairroField"]');
   var $cidade = doc.querySelector('[data-js="cidadeField"]');
   var $estado = doc.querySelector('[data-js="estadoField"]');
   var $cep = doc.querySelector('[data-js="cepField"]');
   var $btnSubmit = doc.querySelector('[data-js="btnSubmit"]');
   var $status = doc.querySelector('[data-js="status"]');
   var ajax = new XMLHttpRequest();

  $btnSubmit.addEventListener('click', getCep, false)

 function getCep(event){
   event.preventDefault()
   ajax.open('GET', 'http://apps.widenet.com.br/busca-cep/api/cep/'+ cleanCep() +'.json');
   ajax.send()
   ajaxEvent()
   insertMessagesOnDivs('loading');
 }

 function isValidCep(){
   return /\d+[-]?\d+/.test($cep.value)
 }

 function cleanCep(){
   return isValidCep() ? $cep.value : alert('Digite um CPF valido')
 }

 function ajaxEvent(){
   ajax.addEventListener('readystatechange', function(){
   insertDataOnForm()
   },false);
 }

 function insertDataOnForm(){
   if(isRequestOk()){
     var data = JSON.parse(ajax.responseText);
     isCepOk(data)
   }
 }

 function isCepOk(cep){
   if(cep.status != 1){
     insertMessagesOnDivs('error');
   }else{
     $rua.value = cep.address;
     $bairro.value = cep.district;
     $cidade.value = cep.city;
     $estado.value = cep.state;
   }
 }

 function insertMessagesOnDivs(type){
   var message = {
     loading: loadingMessage,
     error : errorMessage,
     ok: okMessage,
   };
   return message[type]();
 }

function loadingMessage(){
  var $contentDiv = doc.createTextNode('Carregando');
  $status.setAttribute("class", "alert alert-primary");

  $status.appendChild($contentDiv);
}

function errorMessage(){
  var $contentDiv = doc.createTextNode('Error, não foi possivel encontrar o cep inserido');
  $status.setAttribute("class", "alert alert-danger");

  $status.appendChild($contentDiv);
}

function okMessage(){

}

 function isRequestOk(){
   return ajax.readyState === 4 && ajax.status === 200;
 }


})(window, document);

