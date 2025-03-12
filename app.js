// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let lista = [];

function agregarAmigo(){
    let textoingresado = document.getElementById("amigo").value;

    if (textoingresado.trim() !== ""){
        let lista = document.getElementById("listaAmigos");
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = textoingresado;
        
        lista.appendChild(nuevoElemento);
    }
    document.getElementById("amigo").value = "";
}