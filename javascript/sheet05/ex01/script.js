document.addEventListener("DOMContentLoaded", () => {
	buscarPokemon();
});

let listaPokemon = document.querySelector("#listaPokemon");

async function fetchData(url) {
	const response = await fetch(url);
	const json = await response.json();
	return json;
}

async function obtenerDatos() {
	let URL = "https://pokeapi.co/api/v2/pokemon/";
	for (let i = 1; i <= 151; i++) {
		const pokemonData = await fetchData(`${URL}/${i}/`);
		const specieURL = pokemonData.species.url;
		const evolucion = await fetchData(specieURL);
		pokemonData.evolucion = evolucion.evolves_from_species?.name;
		mostrarPokemon(pokemonData);
	}
}

obtenerDatos();

function mostrarPokemon(poke) {
	let tipos = poke.types.map((type) => `<li class="${type.type.name}">${type.type.name}</li>`);
	tipos = tipos.join("");
	const div = document.createElement("div");
	div.classList.add("pokemon");
	div.innerHTML = `
        <div class="caja_sup">
          <img src="${poke.sprites.front_default}" alt="${poke.name}" />
          <div class="id">ID/${poke.id}</div>
        </div>
        <div class="caja_inf">
          <h3 class="pokemon-nombre">${poke.name}</h3>
          <ul style="list-style-type: none">
            ${tipos}
          </ul>
          ${
						poke.evolucion
							? `
          <div class="evolucion">
            Evoluciona de:
            <span>${poke.evolucion}</span>
          </div>`
							: `<div>
            <span></br><br></span>
          </div>`
					}
        </div>
    `;
	listaPokemon.append(div);
}

let search = document.getElementById("search");

async function buscarPokemon() {
	let URL = "https://pokeapi.co/api/v2/pokemon/";
	for (let i = 1; i <= 151; i++) {
		const pokemonData = await fetchData(`${URL}/${i}/`);
	}

	search.addEventListener("input", (e) => {
		const inputText = e.target.value.toLowerCase().trim();
		const filtrado = pokemonData.filter((poke) => poke.name == inputText);
	});
}
