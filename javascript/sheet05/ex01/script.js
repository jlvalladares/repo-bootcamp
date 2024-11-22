
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
	let tipos = poke.types.map((type) => `<li>${type.type.name}</li>`);
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
							? `<div class="evolucion">
            Evoluciona de:
            <span>${poke.evolucion}</span>
            </div>`
							: `<div>
            <span></br><br></span>
            </div>`
					}
        </div>
    `;
	listaPokemon.appendChild(div);

}
function buscarPokemon() {}

}

let listaPokemon = document.querySelector("#listaPokemon");
let search = document.getElementById("search");

function buscarPokemon() {
	search.addEventListener("keyup", (e) => {
		const inputText = e.target.value.toLowerCase().trim();
		const mostrarFiltrado = nombresPokemos.filter((nombre) => nombre.name.startsWith(inputText));
		mostrarPokemon(mostrarFiltrado);
	});
}

document.addEventListener("DOMContentLoaded", () => {
	mostrarPokemon();
	buscarPokemon();
});

