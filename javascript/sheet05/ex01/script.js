const listaPokemon = document.querySelector("#listaPokemon");
let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++) {
  fetch(URL + i)
    .then((response) => response.json())
    .then((data) => mostrarPokemon(data));
}

function mostrarPokemon(poke) {
  let tipos = poke.types.map((type) => `<li class="${type.type.name}">${type.type.name}</li>`);
  tipos = tipos.join("");

  let evolucion = poke.name.id - 1;

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
          <div class="evolucion">
            Evoluciona de:
            <span>${evolucion}</span>
          </div>
        </div>
  
    `;
  listaPokemon.append(div);
}

/*

        <div class="pokemon">
          <div class="caja_sup">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" alt="Ivisaur" />
            <div class="id">ID/2</div>
          </div>
          <div class="caja_inf">
            <h3 class="pokemon-nombre">Ivisaur</h3>
            <ul style="list-style-type: none">
              <li>Poisson</li>
              <li>Grass</li>
            </ul>
            <div>
              Evoluciona de:
              <span>Bulvasur</span>
            </div>
          </div>
        </div>
*/
