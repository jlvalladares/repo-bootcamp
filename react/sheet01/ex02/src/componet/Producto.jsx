import React from "react";

function Producto({ nombre, precio, descripcion }) {
	return (
		<>
			<div className="producto">
				<p>
					<b>Nombre: </b>
					{nombre}
				</p>
				<p>
					<b>Precio: </b>
					{precio} €
				</p>
				<p>
					<b>Decripción: </b>
					{descripcion}
				</p>
			</div>
		</>
	);
}
export default Producto;
