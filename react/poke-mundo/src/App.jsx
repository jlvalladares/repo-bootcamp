import React from "react";
import "./App.css";
import ListaDeCard from "./componets/ListaDeCard";

function App() {
	const pokemon = [
		{
			nombre: "bulbasaur",
			id: 1,
			imagenUrl:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
			tipo1: "grass",
			tipo2: "poison",
			evolucion: "parjarito",
		},
		{
			nombre: "pikachu",
			id: 1,
			imagenUrl:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
			tipo1: "grass",
			tipo2: "poison",
			evolucion: "parjarito",
		},
		{
			nombre: "ivasaur",
			id: 1,
			imagenUrl:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
			tipo1: "grass",
			tipo2: "poison",
			evolucion: "parjarito",
		},
		{
			nombre: "raychu",
			id: 1,
			imagenUrl:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
			tipo1: "grass",
			tipo2: "poison",
			evolucion: "parjarito",
		},
	];
	return (
		<>
			<ListaDeCard pokemon={pokemon} />
		</>
	);
}

export default App;
