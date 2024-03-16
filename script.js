const entrada = document.getElementById('entradatxt');
const resultado = document.getElementById('resultado');
const encriptarbtn = document.getElementById('encriptar');
const desencriptarbtn = document.getElementById('desencriptar');
const encripcont = document.getElementById('encrip');
const mensajecont = document.getElementById('mensaje');
const copiarbtn= document.getElementById('copiar');
const copiadomensaje= document.getElementById('copiado')

function btnencriptar() {
    const txtfinal = encriptar(entrada.value);
    resultado.value = txtfinal;
    if(entrada.value){
        mensajecont.style.display="none";
        encripcont.style.display="block";
    } else{
        mensajecont.style.display="flex";
        encripcont.style.display="none";
    }
    entrada.value="";
}

encriptarbtn.addEventListener('click', btnencriptar);

function encriptar(txtencriptado) {
    var matrizregla = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"], ["u", "ufat"]];
    txtencriptado = txtencriptado.toLowerCase();

    for (let i = 0; i < matrizregla.length; i++) {
        if (txtencriptado.includes(matrizregla[i][0])) {
            txtencriptado = txtencriptado.replaceAll(
                matrizregla[i][0], matrizregla[i][1]
            );
        }
    }
    return txtencriptado;
}


function btndesencriptar() {
    const txtfinal = desencriptar(entrada.value);
    resultado.value = txtfinal;
    if(entrada.value){
        mensajecont.style.display="none";
        encripcont.style.display="block";
    } else{
        mensajecont.style.display="flex";
        encripcont.style.display="none";
    }
    entrada.value="";
}

desencriptarbtn.addEventListener('click', btndesencriptar);

function desencriptar(txtdesencriptado) {
    var matrizregla = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    txtdesencriptado = txtdesencriptado.toLowerCase();

    for (let i = 0; i < matrizregla.length; i++) {
        if (txtdesencriptado.includes(matrizregla[i][1])) {
            txtdesencriptado = txtdesencriptado.replaceAll(
                matrizregla[i][1], matrizregla[i][0]
            );
        }
    }
    return txtdesencriptado;
}

function copiar(){
    navigator.clipboard.writeText(resultado.value);
    copiarbtn.style.display="none"
    copiadomensaje.style.display="block";
    setTimeout(function(){
        copiarbtn.style.display="block"
        copiadomensaje.style.display="none";
    },1000)
}

copiarbtn.addEventListener('click',copiar)