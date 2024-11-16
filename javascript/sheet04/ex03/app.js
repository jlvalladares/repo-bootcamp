const anadir = document.getElementById("botonAnadir");
const eliminar = document.getElementById("botonEliminar");
const lista = document.getElementById("lista");
function agregar() {
	const nuevoElemento = document.createElement("li");
	nuevoElemento.textContent = "Nuevo elemento";
	lista.appendChild(nuevoElemento);
}
function quitar() {
	if (lista.hasChildNodes) {
		lista.removeChild(lista.lastChild);
	} else alert("Nada que eliminar!");
}
anadir.addEventListener("click", agregar);
eliminar.addEventListener("click", quitar);
