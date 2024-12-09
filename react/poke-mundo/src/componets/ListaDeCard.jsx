import React from "react";
<<<<<<< Updated upstream:react/poke-mundo/src/componets/ListaDeCard.jsx
import Carta from "./Carta";
=======
import { useEffect, useState } from "react";
import Carta from "../componets/Carta";
import { obtenerDatos } from "../services/pokemonServices";

export default function ListadoPokemon() {
	const [pokemons, setPokemons] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		async function traerInfo() {
			const pokemonsRetrieved = await obtenerDatos();
			setPokemons(pokemonsRetrieved);
		}
		traerInfo();
	}, []);

	const filteredPokemons = pokemons.filter((pokemon) =>
		pokemon.name.includes(search)
	);
>>>>>>> Stashed changes:react/poke-mundo/src/pages/ListaDeCard.jsx

	return (
		<>
<<<<<<< Updated upstream:react/poke-mundo/src/componets/ListaDeCard.jsx
			{pokemon.map((card) => (
				<Carta
					key={card.nombre}
					imagenUrl={card.imagenUrl}
					nombre={card.nombre}
					id={card.id}
					tipo1={card.tipo1}
					tipo2={card.tipo2}
					evolucion={card.evolucion}
				></Carta>
			))}
=======
			<div className="buscador">
				<input
					type="text"
					id="search"
					placeholder="Filtra Pokemon"
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>
			<div className="pokemon-todos" id="listaPokemon">
				{filteredPokemons.map((pokemon) => (
					<Carta key={pokemon.id} poke={pokemon} />
				))}
			</div>
>>>>>>> Stashed changes:react/poke-mundo/src/pages/ListaDeCard.jsx
		</>
	);
}
