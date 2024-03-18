var textImput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

function criptografar(){
    var texto = textImput.value; 

    var resultCripto = texto.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");

    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultCripto + '</textarea>'
    + '<button class="btn-copiar" id="copiar" onclick="copiar()">copiar</button>'

}
function descriptografar(){
    var texto = textImput.value;

    var resultDescripto = texto.replace(/entre/g, "e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g, "u");
    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultDescripto + '</textarea>'
    + '<button class="btn-copiar" id="copiar" onclick="copiar()">copiar</button>'

}

function copiar(){
    var textoCop = document.getElementById('input-texto');

    textoCop.select(); 
    document.execCommand('copy');
    alert("Textoc Copiado");
}