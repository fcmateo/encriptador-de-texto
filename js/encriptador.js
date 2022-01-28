var btnEncriptar = document.getElementById('btn-encriptar').addEventListener("click", validar);


function encriptador(){
    var inputTexto = document.getElementById('input-texto').value;

    textarea = document.getElementById("textarea");
    textarea.value = inputTexto.replaceAll('e','enter')
    .replaceAll('i','imes')
    .replaceAll('o','ober')
    .replaceAll('a','ai')
    .replaceAll('u','ufat')
}