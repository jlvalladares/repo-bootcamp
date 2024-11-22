function Tarjeta({ nombre, apellidos, ocupación, imagenURL }) {
	return (
		<div className="Tarjeta">
			<h3>
				Nombre: {nombre} Apellidos: {apellidos}
			</h3>
			<img src={imagenURL} alt="imagen" />
			<p>Ocupación: {ocupación}</p>
		</div>
	);
}

export default Tarjeta;
