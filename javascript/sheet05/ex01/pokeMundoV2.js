document.addEventListener("DOMContentLoaded", () => {
	buscarPokemon(pokeTodos);
});
async function fetchData(url) {
	const response = await fetch(url);
	const json = await response.json();
	return json;
}
let pokeTodos = [];
let contador = 0;
async function obtenerDatos() {
	const pokemonData = await fetchData("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
	for (const pokemon of pokemonData.results) {
		const bicho = await fetchData(pokemon.url);
		const nombre = await fetchData(bicho.species.url);
		pokemon.evolucion = nombre.evolves_from_species?.name;
		pokemon.id = bicho.id;
		pokemon.tipos = bicho.types.map((type) => `<li class="${type.type.name}">${type.type.name}</li>`).join("");
		pokemon.img = bicho.sprites.front_default;
		pokeTodos.push(pokemon);
		mostrarPokemon(pokeTodos[contador]);
		contador++;
	}
	return pokeTodos;
}
obtenerDatos();

function mostrarPokemon(poke) {
	const div = document.createElement("div");
	div.classList.add("pokemon");
	div.innerHTML = `
	<div class="caja_sup">
		<img src="${poke.img}" alt="${poke.name}" />
		<div class="id">ID/${poke.id}</div>
	</div>
	<div class="caja_inf">
		<h3 class="pokemon-nombre">${poke.name}</h3>
        <ul style="list-style-type: none">${poke.tipos}</ul>
          ${
						poke.evolucion
							? `<div class="evolucion">
            Evoluciona de:
            <span>${poke.evolucion}</span>
        	</div>`
							: `<div>
        	<span></br><br></span>
        	</div>`
					}
    </div>`;

	listaPokemon.appendChild(div);
}

const listaPokemon = document.getElementById("listaPokemon");
const search = document.getElementById("search");
function buscarPokemon() {
	search.addEventListener("keyup", (e) => {
		const inputText = e.target.value.toLowerCase().trim();
		const filtrado = pokeTodos.filter((nombre) => nombre.name.startsWith(inputText));
		limpiarHtml();
		filtrado.forEach((pokemon) => {
			mostrarPokemon(pokemon);
		});
	});
}

function limpiarHtml() {
	while (listaPokemon.firstChild) {
		listaPokemon.removeChild(listaPokemon.firstChild);
	}
}
