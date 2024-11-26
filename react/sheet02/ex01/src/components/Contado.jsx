import React, { useState } from "react";

function Contador() {
	let [count, setCount] = useState(0);
	return (
		<>
			<div>
				<button onClick={() => setCount(count + 1)}>Incrementar</button>
			</div>
			<div>{count}</div>
			<div>
				<button onClick={() => setCount(count - 1)}>Decrementar</button>
			</div>
			<button key="reset" onClick={() => setCount(0)}>
				Reset
			</button>
		</>
	);
}
export default Contador;
