var btnCopiar = document.getElementById('btn-copiar').addEventListener("click", copiar);

function copiar(){
    var copyText = document.getElementById('textarea');
    if(copyText.value != ""){
        copyText.select();
        document.execCommand("copy");
        alertCopy();
    } else {
        label.textContent =("No puedes copiar aquello que aún no existe...")
    }
    //document.getElementById('textarea').value = " ";
}