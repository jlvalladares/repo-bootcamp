import Producto from "./Producto";
import PropTypes from "prop-types";

function ListaDeProductos({ productos }) {
	return (
		<>
			<h2>Productos</h2>
			<ul>
				{productos.map((producto) => (
					<li>
						<Producto
							nombre={producto.nombre}
							precio={producto.precio}
							descripcion={producto.descripcion}
						/>
					</li>
				))}
			</ul>
			;
		</>
	);
}
ListaDeProductos.propTypes = {
	productos: PropTypes.arrayOf(
		PropTypes.shape({
			nombre: PropTypes.string.isRequired,
			precio: PropTypes.number.isRequired,
			descripcion: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default ListaDeProductos;
