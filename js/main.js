/*
INTRODUÇÃO AO JAVASCRIPT:

var nome = "Sabrina";
var idade = 25;
alert(nome + " tem " + idade + " anos");


var nome = "Sabrina";
var idade = 25;
var idade2 = 10;
console.log(nome);
console.log(idade + idade2);

var frase = "Arábica é o melhor café do mundo";
console.log(frase);
console.log(frase.replace("Arábica", "Robusta"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
*/


/*
ARRAY E DICIONÁRIO:

var lista = ["maçã", "pêra", "laranja"];
console.log(lista[1]);
alert(lista[1]);


var lista = ["maçã", "pêra", "laranja"];
lista.push("uva");
console.log(lista.length);


var lista = ["maçã", "pêra", "laranja"];
lista.push("uva");
console.log(lista);
console.log(lista[0]);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));


var fruta = {nome: "maçã", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor);


var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/


/*
CONDICIONAIS, LAÇOS DE REPETIÇÃO E DATA:

var idade = prompt("Qual a sua idade?");
if (idade => 18){
    alert ("Maior de idade");
}else{
    alert("Menor de idade");
}


var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count++;
}


var count;
for(count = 0; count <= 5; count++){
    alert(count);
}


var d = new Date();
alert(d);


var d = new Date();
alert(d.getMonth()+1);


var d = new Date();
alert(d.getMinutes());


var d = new Date();
alert(d.getDay());


var d = new Date();
alert(d.getHours());
*/


/*
DESENVOLVA PÁGINAS WEB COM JAVASCRIPT


function soma(n1, n2) {
    return n1 + n2;
}
function setReplace(frase, nome, nome_nome){
    return frase.replace(nome, nome_nome)
}
alert(soma(5, 10));
alert(setReplace("Café arábica", "arábica", "robusta"));


function soma(n1, n2){
    return n1 + n2;
}
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
}
var idade = prompt ("Qual sua idade?");
console.log(validaIdade(idade));
alert(soma(5, 10));


var validar = 0;
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt ("Qual sua idade?");
validaIdade(idade)
console.log(validar);


function clicou(){
    alert("Obrigado por clicar");
}

function clicou(){
    document.getElementById("agradecimento");
    console.log(document.getElementById("agradecimento"));
}


function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
}


function clicou(){
    document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar</b>";
}
function redirecionar(){
    window.open("https://github.com/Sabrina-Gross/")
}


function clicou(){
    document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar</b>";
}
function redirecionar(){
    window.location.href = "https://github.com/Sabrina-Gross/";
}
function trocar(){
    alert("Trocar texto")
}


function clicou(){
    document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar</b>";
}
function redirecionar(){
    window.location.href = "https://github.com/Sabrina-Gross/";
}
function trocar(){
    document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse";
}
function voltar(){
    document.getElementById("mousemove").innerHTML="Passe o mouse aqui";
}
*/

//colocando dois mousemove, caixa de mensagem ao abrir a página e caixa seletora de opções:
function clicou(){
    document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar</b>";
}
function redirecionar(){
    window.location.href = "https://github.com/Sabrina-Gross/";
}
function trocar(elemento){
    elemento.innerHTML="Obrigado por passar o mouse";
}
function voltar(elemento){
    elemento.innerHTML="Passe o mouse aqui";
}
function load(){
    alert("Página carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value);    
}

