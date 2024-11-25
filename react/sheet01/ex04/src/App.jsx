import ListaDePerfiles from "./components/ListaDePerfiles";
import "./App.css";
import React from "react";

function App() {
	const perfiles = [
		{
			nombre: "Pikachu",
			descripcion: "pokemon tipo rayo, soooo cute",
			imagenURL:
				"https://th.bing.com/th/id/OIP.irYdn9CAcFUWw7vCSP0CGwHaEK?w=290&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
		},
		{
			nombre: "Persona 2",
			descripcion: "Descripción 2",
			imagenURL: "https://example.com/imagen2.jpg",
		},
		{
			nombre: "Persona 3",
			descripcion: "Descripción 3",
			imagenURL: "https://example.com/imagen3.jpg",
		},
	];
	return (
		<>
			<ListaDePerfiles perfiles={perfiles} />
		</>
	);
}

export default App;
