/*
let numero = prompt("Digite um numero");
if (numero % 2 === 0) { console.log("par");}
else { console.log("impar");}



let numero = prompt("Digite um numero");
let nvolar = (numero === 18) ? "acertou" : "escolha outro";
console.log( numero + ' ' + nvolar);



//switch case

let cores = prompt("escolha uma cor");
switch (cores.toLowerCase()) {
    case "azul": 
    alert( "time masculino")
    break;

    case "rosa": 
    alert( "time feminino")
    break;

    case "verde": 
    alert( "time vegeta")
    break;

    case "vermelho": 
    alert( "time sangrento")
    break;

    function calcular (x, y) {
return(y/x) * 100;
}

let x= 100
let y = 10
let cal = calcular ( x, y)
console.log (`${cal} % de ${x} "e" ${y} `)



function calcularImovel(metragem, quartos) {
    let metro2 = 3000;
    

    switch (quartos) {
        case 1:
        default:
            preco = metragem * metro2;
            break;
    
        case 2:
            preco = metragem * (metro2* 1.2);
            break;
    
        case 3:
            preco= metragem * (metro2 * 1.5);
            break;
    }
    
    return preco;
}


let quartos = 3;
let metragem = 15;
preco = calcularImovel(metragem, quartos);
console.log(`a casa custa ${preco}`);
}



function validar( usuario, senha){
    if ( usuario === "niedja" &&  senha === 12345678){
        return true;
    } else {
        return false;
    }
}

let usuario = "niedja";
let senha = 12345678;

let validacao = validar(usuario, senha);
if(validacao){
    alert ("pode entrar")
} else { 
    alert ( " tente novamente")
}



//calcular a raiz quadrada

function raiz ( a,b){
    const square = (p) => {  //p parametro 
        return p*p  // calcular p x p, parametro de square
    }
//ou     const square = (p) => p*p; 


    let raiza = square(a); 
    let raizb = square(b);

    return raiza + raizb;
}

console.log(raiz (2, 3));




// array

let colors = ['azul',['azul claro','azul marinho','azulao'], 'rosa', 'vermelho', 'preto', 'branco'];

// acessar um item dentro do array,dentro do array kkk
console.log(colors [1][2]) 

console.log(colors[2]) // acessa a variavel 'rosa'
//colors.push = 'verde' adicona verde
colors[5]='verde' // adciona verde posicao "5"
console.log(colors) 

//troca o azul pelo roxo
colors[0] = 'roxo' 
console.log(colors) 


//remove o ultimo
colors.pop()
console.log(colors) 

//remove o primeiro
colors.shift()
console.log(colors) 

// tamanho do array 
console.log(`total de cores: ${colors.length}` )




//objeto


let personagem ={
nome: 'Roberta',
idade: 16,
pais: 'mexico',
novela: 'rebelde',
caracteristicas: {
cabelo: 'vermelho',
olhos: 'castanhos',
voz: 'soprano'
}
}
// para acessar uma propriedade do objeto

personagem.nome   saída= Roberta
personagem.caracteristicas.cabelo     saída= vermelho

//trocar um valor

personagem.caracteristicas.cabelo= 'preto'

console.log(personagem.caracteristicas.cabelo)


//aumentar valor da idade

personagem.idade +=4
console.log(personagem.idade)   //saída = 20


let novela = {
    nome: 'Rebelde',
    ano: 2004,
    pais: 'mexico',
    personagens: [
        {nome: 'Anahi', personagem: 'Mia',
            caracteristicas: {
                cabelo: 'Castanho',
                olhos: 'azuis',
                idade: 16
            }
        },
        {nome: 'Dulce Maria', personagem: 'Roberta',
            caracteristicas: {
                cabelo: 'vermelho',
                olhos: 'castanhos',
                idade: 16
            }
        },
        {nome: 'Maite', personagem: 'Lupita',
            caracteristicas: {
                cabelo: 'preto',
                olhos: 'castanho-escuro',
                idade: 16
            }
        }
    ]
    
}

console.log(novela.personagens[0].caracteristicas.olhos)



let novela = {
    nome: 'Rebelde',
    ano: 2004,
    pais: 'mexico',
    personagens: [
        {nome: 'Anahi', personagem: 'Mia',
            caracteristicas: {
                cabelo: 'Castanho',
                olhos: 'azuis',
                idade: 16
            }
        },
        {nome: 'Dulce Maria', personagem: 'Roberta',
            caracteristicas: {
                cabelo: 'vermelho',
                olhos: 'castanhos',
                idade: 16
            }
        },
        {nome: 'Maite', personagem: 'Lupita',
            caracteristicas: {
                cabelo: 'preto',
                olhos: 'castanho-escuro',
                idade: 16
            }
        }
    ]
    
}

console.log(novela.personagens[0].caracteristicas.olhos)

*/
