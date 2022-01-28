function validar(e){
    e.preventDefault();
    /* Declaración de expresión */
    const expresion = /^[a-z\s]+$/g
    /* Se toma el valor del mensaje a encriptar */
    var inputTexto = document.getElementById('input-texto').value;

    /* Validamos el texto */
    var label = document.getElementById('label');
    if(inputTexto == ""){
        label.style.color = ('orangered');
        label.textContent = ("Escribe un mensaje ¿O qué pretendes encriptar?")
    }
    else if(expresion.test(inputTexto)){
        label.textContent = ("")
        encriptador();
    }
    else{
        label.style.color = ('orangered');
        label.textContent = ("Ups... Incluye sólo letras minúsculas y sin acentos")
        textarea.value = "";
    }
}