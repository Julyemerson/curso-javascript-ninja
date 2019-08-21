(function challenge12(){
    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    person = {
        name: 'Julyemerson',
        lastname: 'Leonizio',
        age: 24
    }
    console.log( 'Propriedades de "person":' );

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    console.log( Object.keys(person) );

    /*
    Crie um array vazio chamado `books`.
    */
    books = [];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */

    books[0] = {
        name: 'As Cronicas de Narnia',
        pages: 527
    }; 

    books[1] = {
        name: 'Lean Startup',
        pages: 250
    }; 

    books[2] = {
        name: 'O Senhor dos Aneis',
        pages: 449
    };

    console.log( '\nLista de livros:' );

    /*
    Mostre no console todos os livros.
    */
    console.log(books)

    console.log( '\nLivro que está sendo removido:' );
    /*
    Remova o último livro, e mostre-o no console.
    */
    console.log( books.pop() )

    console.log( '\nAgora sobraram somente os livros:' );
    /*
    Mostre no console os livros restantes.
    */
    console.log(books)

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    var strBooks = JSON.stringify(books)

    console.log( '\nLivros em formato string:' );

    /*
    Mostre os livros nesse formato no console:
    */
    console.log(strBooks);

    /*
    Converta os livros novamente para objeto.
    */
    JSON.parse(strBooks)
    console.log( '\nAgora os livros são objetos novamente:' );

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    function getPropertyAndValueOnBooks() {
        for(i = 0; i < books.length; i++) {
            for(var prop in books[i] ) {
                console.log( prop + ' : ' + books[i][prop]); 
            }
        };
    }

    getPropertyAndValueOnBooks() 


    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    var name = 'julyemerson'
    var arr = name.split(''); 
    console.log(arr)


    console.log( '\nMeu nome é:' );

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    console.log(arr.join(''));

    console.log( '\nMeu nome invertido é:' );

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    console.log(arr.reverse().join(''))

    console.log( '\nAgora em ordem alfabética:' );
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    console.log(arr.sort())
})();