import Tarjeta from "./Tarjeta";

function ListaDeTarjetas({ listaDePersonas }) {
	return (
		<>
			<Tarjeta {...listaDePersonas[0]}></Tarjeta>
			<Tarjeta {...listaDePersonas[1]}></Tarjeta>
			<Tarjeta {...listaDePersonas[2]}></Tarjeta>
		</>
	);
}

export default ListaDeTarjetas;
