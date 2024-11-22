function Tarjeta({ nombre, apellidos, ocupacion, imagenURL }) {
	return (
		<>
			<div className="Tarjeta">
				<h3>
					Nombre: {nombre} Apellidos: {apellidos}
				</h3>
				<img src={imagenURL} alt="imagen" />
				<p>Ocupación: {ocupacion}</p>
			</div>
		</>
	);
}

export default Tarjeta;
