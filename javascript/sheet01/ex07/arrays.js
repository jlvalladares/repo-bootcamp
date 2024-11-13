const diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
for (i = 0; i < diasSemana.length; i++) {
	console.log(diasSemana[i]);
}

let arrNum = [1, 2, 3, 4, 5];
function sumarArreglo(arrNum) {
	let total = 0;
	for (i = 0; i < arrNum.length; i++) {
		total += arrNum[i];
	}
	return total;
}
console.log(sumarArreglo(arrNum));
