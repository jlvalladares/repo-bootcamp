async function fetchData(url) {
	const response = await fetch(url);
	const json = await response.json();
	return json;
}

export async function obtenerDatos() {
	const pokemonData = await fetchData(
		"https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
	);
	return Promise.all(
		pokemonData.results.map(async (pokemon) => {
			const bicho = await fetchData(pokemon.url);
			const nombre = await fetchData(bicho.species.url);
			pokemon.evolucion = nombre.evolves_from_species?.name;
			pokemon.id = bicho.id;
			pokemon.tipos = bicho.types;
			pokemon.img = bicho.sprites.front_default;
			console.log(pokemon);
			return pokemon;
		})
	);
}
