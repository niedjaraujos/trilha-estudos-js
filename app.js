/*loop for 

let cores = ['rosa', 'azul', 'preto', 'verde', 'roxo']

for (i = 0; i < cores.length; i++){
}  // i index, inicio.
  length tamanho do array
  i++ adiciona proximo valor ou + 1 valor

for ( i in cores){
    console.log (cores [i])
}

for (cor of cores){
    console.log (cor)
}// cor =variavel pra chamar cada valor 


let roupas = [
    {nome: 'camisa', quant:8 },
    {nome: 'bermuda', quant: 8},
    {nome: 'cueca', quant: 12},
    {nome:'conjunto', quant: 4}
]

for ( let roupa of roupas){
    console.log( `peça:${roupa.nome}, quantidade ${roupa.quant}`) // template string
}

let frutas = ['maça', 'uva', 'banana'];

for (let x in frutas) {
    console.log (frutas[x]);
}


// loop while - enquanto
while (frutas){
    console.log (`sao 3 frutas sendo elas ${frutas}`);
    frutas++;
};

let count = 1;
while (count <=100){
    console.log(count);
    count++;
};


//manipulacao array


let frutas = ['maça', 'uva', 'banana', 'morango', 'laranja'];
frutas[frutas.length -1] = 'mamao'

console.log(frutas)
console.log(frutas.join(', '))


let barra = frutas.join('/ ');
console.log(barra)


// ordem alfabetica
frutas.sort();
console.log(frutas)


// organiza em ordem crescente e depois decrescente

let frutas = [7, 5, 3, 9, 4, 1, 2, 8, 0];
frutas.sort();
frutas.reverse();

console.log(frutas)
 



let carros = [
    { marca: 'fiat', ano: 2022 },
    { marca: 'ferrari', ano: 2024 },
    { marca: 'chevrolet', ano: 2009 },
    { marca: 'bmw', ano: 2025}
];


carros.sort((a, b)=> {
    if (a.ano > b.ano){
        return 1;
    } else if (a.ano < b.ano){
        return -1
    } else {
        return 0 }
});


// simplificando

carros.sort((a,b) => {
    return a.ano - b.ano;
})
console.log(carros)


// simplificando ainda mais

carros.sort((y, z) => z.ano - y.ano);
console.log(carros)

carros.sort((y, z) => z.marca - y.marca);
console.log(carros)

   
let carros = ['fiat', 'ferrari', 'chevrolet', 'bmw', 'centroen']

let newcar = carros.filter((marca) => {
    // if(item.length > 4){
    //return true; }

    return marca.length > 4;
}
);

// normalmente quando o código é so uma linha podemos simplificar 
let newcar2 = carros.filter((marca) => marca.length > 4);
console.log(newcar2)

if (carros.includes('fiat')){
    console.log ("achei")
}

*/
