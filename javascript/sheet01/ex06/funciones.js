let nombre = prompt("Introduce el nombre:");
function saludar(nombre) {
	console.log("Hola,", nombre, "!");
}
saludar(nombre);

let a = prompt("Introduce un numero:");
let b = prompt("Itroduce otro numero:");
function mayor(a, b) {
	if (a < b) {
		return b;
	}
	return a;
}
console.log("El mayor es:", mayor(a, b));
