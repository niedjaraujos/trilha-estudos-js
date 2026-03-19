/* // Crie uma variável com o nome completo de uma pessoa e exiba apenas o primeiro nome.

let nome = 'Niedja Araujo da Silva'
console.log(nome.slice(0, 6))

// Verifique se uma string contém a palavra "Java" e exiba uma mensagem personalizada.

let linguagem = "JavaScript"
if (linguagem.includes('Java')){
    console.log( "tem a palavra java")
} else{
    console.log("não possui a palavra, tente novamente")
}


// Converta uma frase para letras maiúsculas e remova os espaços em branco nas extremidades.

let string = "Converta uma frase para letras maiúsculas e remova os espaços em branco nas extremidades."
let newString = string.toUpperCase().trim()
console.log(newString)


// Substitua a palavra "erro" por "correção" na string `"Houve um erro no sistema."`.
let erro ="Houve um erro no sistema."
let correcao = erro.replace('erro', 'correção')
console.log(correcao)

// Divida a frase `"Eu amo JavaScript"` em palavras separadas e exiba cada uma.
let frase = "Eu amo JavaScript"
console.log( frase.slice(0,2))
console.log( frase.slice(3,6))
console.log( frase.slice(7,17))


// Valide se um URL começa com `https://` e termina com `.com`.
let site= 'https://osescolhidos.tv/'

console.log( site.startsWith("https://"), site.endsWith('.com'))





Concatenar Strings:
Unir textos usando o operador + ou template literals:
let nome = "Ana";
let saudacao = "Olá, " + nome + "!";  // Usando +
let saudacao2 = `Olá, ${nome}!`;  // Usando template literals
console.log(saudacao);  // Saída: Olá, Ana!

Acessar Caracteres:
let palavra = "Programação";
console.log(palavra[0]);  // Saída: P
console.log(palavra[4]);  // Saída: r


Obter o Tamanho da String:
let texto = "JavaScript";
console.log(texto.length);  // Saída: 10

Métodos Úteis para Manipular Strings
toUpperCase() Transforma tudo em maiúsculas

toLowerCase() Transforma tudo em minúsculas

trim()  Remove espaços do início e do fim

includes()  Verifica se contém um texto específico, ex "JavaScript".includes("Script")
saida: true

startsWith()  Verifica se começa com um texto,  ex :"JavaScript".startsWith("Java")
saida: true

endsWith()
Verifica se termina com um texto, ex:"JavaScript".endsWith("Script")
saida: true

slice()
Extrai uma parte da string, ex:"JavaScript".slice(0, 4)
saida: "Java"

replace()
Substitui parte do texto, ex"Olá, João".replace("João", "Ana")
saida:"Olá, Ana"

*/
