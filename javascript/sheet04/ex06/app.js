const decremento = document.getElementById("decremento");
const incremento = document.getElementById("incremento");
const contador = document.getElementById("contador");
let cont = 0;
function alctualizarContador() {
	contador.textContent = cont;
}
decremento.addEventListener("click", () => {
	cont--;
	alctualizarContador();
});
incremento.addEventListener("click", () => {
	cont++;
	alctualizarContador();
});
