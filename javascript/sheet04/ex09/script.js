const cuadro = document.getElementById("miCuadro");
const botonAgregar = document.getElementById("agregarClase");
const botonEliminar = document.getElementById("eliminarClase");

botonAgregar.addEventListener("click", () => {
	cuadro.classList.add("activo");
});

botonEliminar.addEventListener("click", () => {
	cuadro.classList.remove("activo");
});
