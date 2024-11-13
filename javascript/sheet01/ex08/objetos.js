let persona = {
	Nombre: "Ana",
	Edad: 30,
	Ciudad: "Madrid",
};

function describirPersona(persona) {
	const propied = Object.entries(persona);
	const cadena = propied
		.map(([propiedad, valor]) => {
			return `${propiedad}: ${valor}`;
		})
		.join(`, `);
	return cadena;
}

console.log(describirPersona(persona));
