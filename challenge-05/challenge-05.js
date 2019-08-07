/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = ["julyemerson", 24, true, "14/03/1995", 1];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var retornaArray = function(arr) {
    return arr
}; 

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(retornaArray(myArray)[1]);


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

var doisParams = function( arr, index ){
    return arr[index]
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var arr = ["julyemerson",2,[1,2],null, {a: 2}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log('------------------------')

console.log(doisParams(arr,[0]))

console.log(doisParams(arr,[1]))

console.log(doisParams(arr,[2]))

console.log(doisParams(arr,[3]))

console.log(doisParams(arr,[4]))

console.log('------------------------')
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book( bookName ){
    var describeBooks = {
        'Breve Historia do Tempo' : {
            quantidadePaginas: 256,
            autor: 'Stephen Hawking',
            editora: 'Bantam Book',
            assunto: 'cosmologia'
        },
        'Ponto de Inflexao' : {
            quantidadePaginas: 208,
            autor: 'Flavio Augusto',
            editora:'Buzz Editora',
            assunto:'empreendedorismo'  
        },
        'Do Mil ao Milhao' : {
            quantidadePaginas: 192,
            autor: 'Thiago Nigro',
            editora: 'Harpercollins',
            assunto: 'empreendedorismo'
        }
    };
    
    return !bookName ? describeBooks : describeBooks[ bookName ]

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log('------------------------')
console.log(book()); 
console.log('------------------------')

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'Breve Historia do Tempo'
var quantidadePaginasLivro = book( bookName ).quantidadePaginas; 
var nomeAutor = book( bookName ).autor;
var nomeEditora = book( bookName ).editora;

console.log("O Livro "+ bookName +" tem "+ quantidadePaginasLivro +" páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log("O autor do livro "+ bookName +" é "+ nomeAutor+".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log("O livro "+ bookName +" foi publicado pela editora "+ nomeEditora +".");

