const voltar =document.getElementById("voltar");
const avancar = document.getElementById("avancar");
const imagem = document.getElementById("pokemon");

let numeroDoPokemon = 1;

function carregarPokemon(numero){
    fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`)
    .then(resposta => resposta.json())
    .then(dados =>{
        imagem.src = dados.sprites.front_default;
    });
}

//botao avançar
avancar.addEventListener("click",()=>{
    numeroDoPokemon ++;
    carregarPokemon(numeroDoPokemon)
})

//Chamando a função carregarPokemon
carregarPokemon(numeroDoPokemon)