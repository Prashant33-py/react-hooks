import "./App.css";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

function Star() {
	return <FaStar />;
}

function App() {
	// const [status, setStatus] = useState("Not delivered");
	// return (
	// 	<>
	// 		<h1>The package is: {status}</h1>
	// 		<button onClick={() => setStatus("Delivered")}>Deliver</button>
	// 	</>
	// );
	// const [checked, setChecked] = useState(false);
	// return (
	// 	<>
	// 		<input
	// 			type="checkbox"
	// 			value={checked}
	// 			onChange={() => setChecked(!checked)}
	// 		/>
	// 		<p>{checked ? "Checked" : "Not Checked"}</p>
	// 	</>
	// );

	return <StarRating />;
}

export default App;
