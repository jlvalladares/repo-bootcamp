import React from "react";
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

	return (
		<>
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
		</>
	);
}
