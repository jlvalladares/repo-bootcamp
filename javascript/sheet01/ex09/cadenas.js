let cad = prompt("Intoduce una palabra/frase;");
let vocales = ["a", "e", "i", "o", "u"];
function invertirCadena(cad) {
	return cad.split("").reverse().join("");
}
function contarVocales(cad) {
	let cont = 0;
	for (let i of cad.toLowerCase()) {
		if (vocales.includes(i)) {
			cont++;
		}
	}
	return cont;
}
console.log("La palabra invertida es", invertirCadena(cad), "y tiene", contarVocales(cad), "vocales");
