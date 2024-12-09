import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaDeCard from "./pages/ListaDeCard";

function App() {
	return (
		<BrowserRouter>
			<div className="oreja_iz"></div>
			<div className="oreja_de"></div>
			<div className="mof_iz"></div>
			<div className="mof_de"></div>
			<Routes>
				<Route path="/" element={<ListaDeCard />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
