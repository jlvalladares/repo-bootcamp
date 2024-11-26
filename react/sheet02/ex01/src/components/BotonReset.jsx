import React, { useState } from "react";

function BontonReset() {
	const [count, setCount] = useState(0);
	return (
		<>
			<button key="reset" onClick={() => setCount()}>
				Reset
			</button>
		</>
	);
}
export default BontonReset;
