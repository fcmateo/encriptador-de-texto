var btnDesencriptar = document.getElementById('btn-desencriptar').addEventListener("click", desencriptador);
function desencriptador(e){
    e.preventDefault()
    var inputTexto = document.getElementById('input-texto').value;
    textarea.value = inputTexto.replaceAll('enter','e')
    .replaceAll('imes','i')
    .replaceAll('ober','o')
    .replaceAll('ai','a')
    .replaceAll('ufat','u')
}