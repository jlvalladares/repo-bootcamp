import React from "react";
import Carta from "./Carta";

function ListaDeCard({ pokemon }) {
	return (
		<>
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
		</>
	);
}
export default ListaDeCard;
