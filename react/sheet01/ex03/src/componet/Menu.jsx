import Enlace from "./Enlace";

function Menu({ enlaces }) {
	return (
		<>
			<nav>
				<ul>
					{enlaces.map((enlace) => (
						<li key={enlace.url}>
							<Enlace texto={enlace.texto} url={enlace.url} />
						</li>
					))}
				</ul>
			</nav>
		</>
	);
}
export default Menu;
