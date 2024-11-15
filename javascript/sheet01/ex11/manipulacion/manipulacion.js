const input = document.getElementById("tarea");
const boton = document.getElementById("boton");
const listaTareas = document.getElementById("listaTarea");

boton.addEventListener("click", function () {
	const texto = input.value.trim();
	if (texto.length <= 0) {
		alert("El texto no puede estar vacio");
	} else {
		const nuevoItem = document.createElement("li");
		nuevoItem.textContent = texto;
		listaTareas.appendChild(nuevoItem);
		input.value = "";
	}
});
