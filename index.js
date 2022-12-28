var nome = document.getElementById("nome");
var telefone = document.getElementById("telefone");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");
var produto = document.getElementById("produto");


function alerta() {
    console.log(msgCheckbox)
    if (nome.value != 0 && telefone.value != 0  && cidade.value != 0  && estado.value != 0  && produto.value != 0 ) {
        alert ("Obridado por enviar!")

    }
    
}