import React from "react";

import Carta from "../componets/Carta";

function ListaDeCard({ pokemon }) {
	return (
		<>
			{pokemon.map((card) => (
				<Carta
					key={card.nombre}
					imagenUrl={card.imagenUrl}
					nombre={card.nombre}
					id={card.id}
					tipos={card.tipos}
					evolucion={card.evolucion}
				></Carta>
			))}
		</>
	);
}
export default ListaDeCard;
