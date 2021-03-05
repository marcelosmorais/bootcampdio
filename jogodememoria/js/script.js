let ordem = [];
let ordemClick = [];
let pontos = 0;

// 0 - azul
// 1 - amarelo
// 2 - verde
// 3 - vermelho

const azul = document.querySelector('.azul');
const amarelo = document.querySelector('.amarelo');
const verde = document;querySelector('.verde');
const vermelho = document.querySelector('.vermelho');

let ordenar = () =>{
    let ordemCor = Math.floor(Math.random() * 4);
    ordem[ordem.length] = ordemCor;
    ordemClick = [];

    for(let in ordenar){
        let corElemento = criaElemento(ordem[i]);
        ligthColor(corElemento, Number(i) + 1);
    }
}

let ligthColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selecionado');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selecionado')
    });
}

let verificaOrdem = () => {
    for(let i in ordemClick){
        if(ordemClick[i] != ordem[i]){
            gameOver();
            break;
        }
    }
    if(ordemClick.length == ordem.length){
        alert(`Pontuação: ${pontos}\nVocê acertou! Iniciando Proximo nível!`);
        proxNivel();
    }
}

let click = (cor) => {
    ordemClick[ordemClick.length] = cor;
    criaElemento(cor).classList.add('selecionado');

    setTimeout((cor) => {
        criaElemento(cor).classList.remove('selecionado');
        verificaOrdem();
    },250);

    
}

let criaElemento = (cor) => {
    if(cor == 0){return azul;}
    else if(cor == 1){return amarelo;}
    else if(cor == 2){return verde;}
    else if(cor == 3){return vermelho;}
}

let proxNivel = () =>{
    pontos++;
    ordenar();
}

let gameOver = () =>{
    alert(`GAME OVER \nPontuação: ${pontos}\nClick em OK para iniciar um novo jogo`);
    ordem = [];
    ordemClick = [];

    playGame();
}

let playGame = () =>{
    alert("Bem Vindo ao Genius - Iniciando novo Jogo");
    pontos = 0;
    proxNivel();
}

azul.onclick = () =>click(0);
amarelo.onclick = () => click(1);
verde.onclick = () => click(2);
vermelho.onclick = () => click(3);

playGame();


/*
azul.addEventListener('click', click(0));
amarelo.addEventListener('click', click(1));
verde.addEventListener('click', click(2));
vermelho.addEventListener('click', click(3));
*/

