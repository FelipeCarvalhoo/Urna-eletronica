//Obs:estudar sempre a function comecarEtapa() e clicou()
let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let numeros = document.querySelector('.d-1-3');
let descricao = document.querySelector('.d-1-4');
let lateral = document.querySelector('.d-1-right');
let aviso = document.querySelector('.d-2');
let maoSoco = document.querySelector('.menu');
let maoSocoo = document.querySelector('.menuu');

let etapaAtual = 0;
let numero = '';
let votoBranco = false;

function comecarEtapa() {


let etapa = etapas[etapaAtual];
let numeroHTML = '';
numero = '';//vai ser zerado o numero...
votoBranco = false;




//O for logo abaixo vai ficar cumprir seu loop de acordo com a function clicou()
for(let i=0;i<etapa.numeros;i++) {//i menor que etapa.numeros que no caso são 5 quadradinhos!
    if(i === 0) {//Se o primeiro quadradinho não estiver selecionado, vai cumprir a função!
        numeroHTML += '<div class="numero pisca"></div>'
    }else{//caso contrario
    numeroHTML += '<div class="numero"></div>'
   
} }


seuVotoPara.style.display = 'none';
cargo.innerHTML = etapa.titulo;
numeros.innerHTML = numeroHTML;
descricao.innerHTML = '';
lateral.innerHTML = '';
aviso.style.display = 'none';
}
function updateSoco() {
    maoSocoo.style.display = 'none';
}


function atualizaInterface() {
    let etapa = etapas[etapaAtual];//criando novamente etapa, dentro de outra função
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero) {//se o numero dentro de etapas for igual ao numero rerna false ou true
            return true;
        }else{
            return false;
        }
    });
    if(candidato.length>0) {// se tiver algum item de candidato selecionado
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';
        descricao.innerHTML = `Nome: ${candidato.nome}<br>Partido: ${candidato.partido}`
        aviso.style.display = 'block';

        let fotosHTML = '';
        for(let i in candidato.fotos) {//criando o for para que ele se repita dependendo da dos numero do candidato
            fotosHTML += `<div class="d-1-image"><img src="images/${candidato.fotos[i].url}" alt="" />${candidato.fotos[i].legenda}</div>`
        }
        lateral.innerHTML = fotosHTML;
    }else{
        seuVotoPara.style.display = 'none';
        aviso.style.display = 'block';
        descricao.innerHTML = '<div class="aviso--grande pisca">Voto Nulo</div>';
    }

}

function clicou(n) {
  let elNumero = document.querySelector('.numero.pisca');
  if(elNumero !== null){
    elNumero.innerHTML = n;
   numero = `${numero}${n}`;//dessa forma declaramos e concatenamos, numero='vazio' ligando ela aos botoes

    elNumero.classList.remove('pisca');//entramos na classList do pisca e removemos
    if(elNumero.nextElementSibling !== null) {//Se o elNumero for diferente de pisca
    elNumero.nextElementSibling.classList.add('pisca');//add pisca
    }else{
        atualizaInterface();//Caso contrario, leveo para function atualizaInterface()
    }
}
console.log(elNumero)
}
function branco() {
    if( numero === '' ) { // se o numero for igual a numero = '';
        votoBranco = true;
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        numeros.innerHTML = '';
        descricao.innerHTML = '<div class="aviso--grande pisca">Voto em branco</div>';
    }
}
function corrige() {
    comecarEtapa();
}
function confirma() {
    alert('Clicou em confirma')
}
function menu() {
    maoSoco.style.display = 'flex';
    maoSocoo.style.display = 'flex';

}
function fechaMenuu() {
    updateSoco();
}

comecarEtapa();
