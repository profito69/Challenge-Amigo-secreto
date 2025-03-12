let nombres = [];

function agregarAmigo(){
    let textoingresado = document.getElementById("amigo").value;

    if (textoingresado.trim() !== ""){
        nombres.push(textoingresado);
        let lista = document.getElementById("listaAmigos");
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = textoingresado;
        
        lista.appendChild(nuevoElemento);
    }
    document.getElementById("amigo").value = "";
}
function sortearAmigo(){
    if (nombres.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }
    let nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)]; // Selección aleatoria
            document.getElementById("resultado").textContent = "Nombre sorteado: " + nombreAleatorio;

            // Limpiar la lista visualmente y el array
            document.getElementById("listaAmigos").innerHTML = "";
            nombres = [];
}