<<<<<<< Updated upstream
import React from "react";

function Carta({ imagenUrl, nombre, id, tipo1, tipo2, evolucion }) {
=======
export default function Carta({ poke }) {
>>>>>>> Stashed changes
	return (
		<>
			<div className="pokemon">
				<div className="caja_sup">
					<img src={poke.img} alt={poke.name} />
					<div className="id">ID/{poke.id}</div>
				</div>
				<div className="caja_inf">
<<<<<<< Updated upstream
					<h3 className="pokemon-nombre">{nombre}</h3>
					<ul>
						<li className="type1" id="type1">
							{tipo1}
						</li>
						<li className="type2" id="type2">
							{tipo2}
						</li>
=======
					<h3 className="pokemon-nombre">{poke.name}</h3>
					<ul style={{ listStyle: "none" }}>
						{poke.tipos.map((type) => (
							<li key={type.type.name} className={type.type.name}>
								{type.type.name}
							</li>
						))}
>>>>>>> Stashed changes
					</ul>
					{poke.evolucion && (
						<div className="evolucion">
							Evoluciona de:
							<span>{poke.evolucion}</span>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
