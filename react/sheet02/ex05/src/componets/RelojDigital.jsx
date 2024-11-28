import React, { useEffect, useState } from "react";

function RelojDijital() {
	const [time, setTime] = useState(new Date().toLocaleTimeString());

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(() => new Date().toLocaleTimeString());
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<h2>{time}</h2>
		</>
	);
}
export default RelojDijital;
