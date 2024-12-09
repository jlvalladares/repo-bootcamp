export default function Carta({ poke }) {
	return (
		<>
			<div className="pokemon">
				<div className="caja_sup">
					<img src={poke.img} alt={poke.name} />
					<div className="id">ID/{poke.id}</div>
				</div>
				<div className="caja_inf">
					<h3 className="pokemon-nombre">{poke.name}</h3>
					<ul style={{ listStyle: "none" }}>
						{poke.tipos.map((type) => (
							<li key={type.type.name} className={type.type.name}>
								{type.type.name}
							</li>
						))}
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
