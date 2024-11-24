import "./App.css";
import React from "react";
import ListaDeProductos from "./componet/ListaDeProductos";

function App() {
	const productos = [
		{
			nombre: "Camiseta de algodón",
			precio: 19.99,
			descripcion:
				"Camiseta básica de algodón orgánico, disponible en varios colores.",
		},
		{
			nombre: "Pantalón jeans",
			precio: 29.99,
			descripcion: "Pantalón jeans clásico de corte recto, con ajuste cómodo.",
		},
		{
			nombre: "Zapatillas deportivas",
			precio: 49.99,
			descripcion:
				"Zapatillas deportivas ligeras y transpirables, ideales para hacer ejercicio.",
		},
		{
			nombre: "Camiseta de algodón orgánico",
			precio: 19.99,
			descripcion: "Camiseta suave y cómoda, perfecta para el día a día.",
		},
		{
			nombre: "Jeans ajustados",
			precio: 39.99,
			descripcion:
				"Jeans de corte ajustado y tiro alto, con un estilo moderno.",
		},
		{
			nombre: "Zapatillas deportivas",
			precio: 59.99,
			descripcion:
				"Zapatillas ligeras y transpirables, ideales para hacer ejercicio.",
		},
		{
			nombre: "Sudadera con capucha",
			precio: 29.99,
			descripcion:
				"Sudadera cálida y cómoda, perfecta para los días más fríos.",
		},
		{
			nombre: "Vestido de verano",
			precio: 24.99,
			descripcion: "Vestido ligero y fresco, ideal para los días calurosos.",
		},
		{
			nombre: "Reloj inteligente",
			precio: 99.99,
			descripcion:
				"Reloj inteligente con múltiples funciones, como monitor de actividad y notificaciones.",
		},
		{
			nombre: "Auriculares inalámbricos",
			precio: 79.99,
			descripcion:
				"Auriculares con sonido de alta calidad y conexión Bluetooth.",
		},
		{
			nombre: "Botella de agua reutilizable",
			precio: 14.99,
			descripcion:
				"Botella de agua ecológica y duradera, perfecta para llevar a todas partes.",
		},
		{
			nombre: "Libro de cocina vegetariana",
			precio: 19.99,
			descripcion:
				"Libro de recetas deliciosas y saludables para cocinar en casa.",
		},
		{
			nombre: "Juego de mesa",
			precio: 29.99,
			descripcion: "Juego de mesa divertido y educativo para toda la familia.",
		},
	];
	return (
		<>
			<ListaDeProductos productos={productos} />
		</>
	);
}

export default App;
