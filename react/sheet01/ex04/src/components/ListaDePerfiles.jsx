import Perfil from "./Perfil";

function ListaDePerfiles({ perfiles }) {
	return (
		<>
			{perfiles.map((perfil) => (
				<Perfil
					key={perfil.nombre}
					nombre={perfil.nombre}
					imagenURL={perfil.imagenURL}
				>
					{perfil.descripcion}
				</Perfil>
			))}
		</>
	);
}
export default ListaDePerfiles;
