import Tarjeta from "./components/Tarjeta";
import ListaDeTarjetas from "./components/ListaDeTarjetas";
import "./App.css";

function App() {
	const personas = [
		{
			nombre: "elotro",
			apellidos: "sfsdfsgvggg",
			ocupacion: "algo",
			imagenURL: "sfsjkldfjskld",
		},
		{
			nombre: "elotro2",
			apellidos: "sfsdfsgvggg",
			ocupacion: "algo",
			imagenURL: "sfsjkldfjskld",
		},
		{
			nombre: "elotro3",
			apellidos: "sfsdfsgvggg",
			ocupacion: "algo",
			imagenURL: "sfsjkldfjskld",
		},
	];
	const persona = {
		nombre: "elotro3",
		apellidos: "sfsdfsgvggg",
		ocupacion: "algo",
		imagenURL: "sfsjkldfjskld",
	};
	return (
		<>
			<Tarjeta {...persona} />
			<ListaDeTarjetas listaDePersonas={personas} />
		</>
	);
}

export default App;
