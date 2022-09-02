//Variables que alimentan al .js.
const userInput = document.querySelector("#user-input");
const resultado = document.querySelector("#resultado");
const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesencriptar = document.querySelector("#btn-desencriptar");
const btnCopiar = document.querySelector("#btn-copiar");
const validarInput = '^[a-z !ñ]+$'; //Regex que impide el uso de MAYUS, símbolos y números.


btnEncriptar.onclick = encriptar; //Trigger para encriptar.
btnDesencriptar.onclick = desencriptar; //Trigger para desencriptar.
btnCopiar.onclick = copyToClipBoard; //Trigger para copiar el resultado.


//Contiene la lógica y procesos de encriptado.
function encriptar(){

    resultado.value = "";
    let mensaje = userInput.value;
    //alert("Click, tu input: " + mensaje);

    if(mensaje.match(validarInput) != null){
        //alert("inicia la función encriptar, valor pasado: " + mensaje);
        let palabras = mensaje.split(' ');
        let palabrasNuevas = [];

        for (let palabra of palabras){ //EL ORDEN DEL CICLO NO DEBE CAMBIARSE.
            palabra = palabra.replaceAll('e', 'enter');
            palabra = palabra.replaceAll('i', 'imes');
            palabra = palabra.replaceAll('a', 'ai');
            palabra = palabra.replaceAll('o', 'ober');
            palabra = palabra.replaceAll('u', 'ufat');

            palabrasNuevas.push(palabra);
        };

        const mensajeFinal = palabrasNuevas.join(' ');
        resultado.value = mensajeFinal;
        userInput.value = "";
    } else {
        alert("ERROR: solo se admiten letras minúsculas.")
    };

    return false;
};

//Contiene la lógica y procesos de desencriptado.
function desencriptar(evento){

    resultado.value = "";
    let mensaje = userInput.value;
    //alert("Click, tu input: " + mensaje);

    if(mensaje.match(validarInput) != null){
        //alert("inicia la función encriptar, valor pasado: " + mensaje);
        let palabras = mensaje.split(' ');
        let palabrasNuevas = [];

        for (let palabra of palabras){ //EL ORDEN DEL CICLO NO DEBE CAMBIARSE.
            palabra = palabra.replaceAll('enter', 'e');
            palabra = palabra.replaceAll('imes', 'i');
            palabra = palabra.replaceAll('ai', 'a');
            palabra = palabra.replaceAll('ober', 'o');
            palabra = palabra.replaceAll('ufat', 'u');

            palabrasNuevas.push(palabra);
        };

        const mensajeFinal = palabrasNuevas.join(' ');
        //resultado.value = palabrasNuevas.join('');
        resultado.value = mensajeFinal;
        userInput.value = "";
    } else {
        alert("ERROR: solo se admiten letras minúsculas.")
    };

    return false;
};

//Copia el resultado en el portapapeles.
function copyToClipBoard() {

    let content = document.querySelector("#resultado");
    
    content.select();
    document.execCommand('copy');
    resultado.value = "";
    userInput.value = "";
    alert("Copiado en portapapeles!");
};