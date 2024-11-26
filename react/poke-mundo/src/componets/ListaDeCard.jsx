import React from "react";
import Card from "./Carta";

function ListaDeCard({ pokemon }) {
	return (
		<>
			{pokemon.map((card) => (
				<Card
					key={card.nombre}
					imagenUrl={card.imagenUrl}
					nombre={card.nombre}
					id={card.id}
					tipo1={card.tipo1}
					tipo2={card.tipo2}
					evolucion={card.evolucion}
				></Card>
			))}
		</>
	);
}
export default ListaDeCard;
