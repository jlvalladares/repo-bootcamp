import "./App.css";
import React from "react";
import Menu from "./componet/Menu";
const enlaces = [
	{
		texto: "Inicio",
		url: "/",
	},
	{
		texto: "Productos",
		url: "/productos",
	},
	{
		texto: "Contacto",
		url: "/contato",
	},
];

function App() {
	return (
		<>
			Que esta pasando?
			<Menu enlaces={enlaces} />
		</>
	);
}

export default App;
