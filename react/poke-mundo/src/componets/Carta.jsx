import React from "react";

function Carta({ imagenUrl, nombre, id, tipo1, tipo2, evolucion }) {
	return (
		<>
			<div className="card">
				<div className="caja_sup">
					<img src={imagenUrl} alt={nombre} />
					<div className="id">ID/{id}</div>
				</div>
				<div className="caja_inf">
					<h3 className="pokemon-nombre">{nombre}</h3>
					<ul>
						<li className="type1" id="type1">
							{tipo1}
						</li>
						<li className="type2" id="type2">
							{tipo2}
						</li>
					</ul>
					<div className="evolucion">
						Evoluciona de: <br />
						<span>{evolucion}</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default Carta;
