import React from "react";

function Perfil({ imagenURL, nombre, children }) {
	return (
		<>
			<div className="perfil">
				<img src={imagenURL} alt={nombre} />
				<p>
					<h4>Nombre:</h4>
					{nombre}
				</p>
				<p>Descripción: {children}</p>
			</div>
		</>
	);
}
export default Perfil;
