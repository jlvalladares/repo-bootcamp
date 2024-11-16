const boton = document.getElementById("boton");
const cajas = document.querySelectorAll(".caja");
const colorOriginal = "green";
boton.addEventListener("click", () => {
	const nuevoColor = cajas[0].style.backgroundColor === "yellow" ? colorOriginal : "yellow";
	cajas.forEach((caja) => {
		caja.style.backgroundColor = nuevoColor;
	});
});
