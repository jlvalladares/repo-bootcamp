let cad = prompt("Introduce una pabra/frase para invertir el orden de las letras:");
//cad = "Hola"
function invertirCadena(cad) {
	//let separaCadena = cad.split("");
	//let invertirArreglo = separaCadena.reverse();
	//let unirArreglo = invertirArreglo.join("");
	//return unirArreglo;
	return cad.split("").reverse().join("");
}
invertirCadena(cad);
//aloH

let vocales = ["a", "e", "i", "o", "u"];
function contarVocales(arr) {
	let cont = 0;
	for (let i of arr.toLowerCase()) {
		if (vocales.includes(i)) {
			cont++;
		}
	}
	return cont;
}
contarVocales(arr);
