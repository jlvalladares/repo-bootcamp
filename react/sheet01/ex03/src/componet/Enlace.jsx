function Enlace({ url, texto }) {
	return (
		<div className="enlace">
			<a href={url} target="_blank" rel="noopener noreferrer">
				{texto}
			</a>
		</div>
	);
}

export default Enlace;
