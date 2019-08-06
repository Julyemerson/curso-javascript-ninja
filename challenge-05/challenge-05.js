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
var doisParams = function(a,b){
    return [a][b]
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var arr = ["julyemerson",2,[1,2],null, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(doisParams(arr,[0]))

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
function books(nome){
    var describeBooks = {
        breveHistoriaDoTempo : {
            quantidadePaginas: 256,
            autor: 'Stephen Hawking',
            editora: 'Bantam Books',
            assunto: 'cosmologia'
        },
        pontoDeInflexao : {
            quantidadePaginas: 208,
            autor: 'Flavio Augusto',
            editora:'Buzz Editora',
            assunto:'empreendedorismo'  
        },
        doMilAoMilhao : {
            quantidadePaginas: 192,
            autor: 'Thiago Nigro',
            editora: 'Harpercollins',
            assunto: 'empreendedorismo'
        }
    };
    
    return describeBooks
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(books()); 

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

var quantidadePaginasLivro = books().pontoDeInflexao.quantidadePaginas; 
var nomeLivro = Object.keys(books())[1];

console.log("O Livro "+ nomeLivro +" tem "+ quantidadePaginasLivro +" páginas!");





/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

var nomeAutor = books().pontoDeInflexao.autor;
console.log("O autor do livro "+ nomeLivro +" é "+ nomeAutor+".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var nomeEditora = books().pontoDeInflexao.editora;
console.log("O livro "+ nomeLivro +" foi publicado pela editora "+ nomeEditora +".");

