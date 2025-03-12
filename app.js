let nombres = [];

function agregarAmigo(){
    document.getElementById("resultado").textContent ="";
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
    let nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)]; 
            document.getElementById("resultado").textContent = "Nombre sorteado: " + nombreAleatorio;

            document.getElementById("listaAmigos").innerHTML = "";
            nombres = [];
}