import "./App.css";
import { useEffect, useState, useReducer, useRef } from "react";
import useInput from "./useInput";
import { FaStar } from "react-icons/fa";

// const createArray = (length) => [...Array(length)];

// function Star({ selected = false, onSelected }) {
// 	return <FaStar color={selected ? "yellow" : "grey"} onClick={onSelected} />;
// }

// function StarRating({ totalStars = 5 }) {
// 	const [selectedStars, setSelectedStars] = useState(0);
// 	return (
// 		<>
// 			{createArray(totalStars).map((n, i) => (
// 				<Star
// 					key={i}
// 					selected={selectedStars > i}
// 					onSelected={() => setSelectedStars(i + 1)}
// 				/>
// 			))}
// 			<p>
// 				{selectedStars} of {totalStars}
// 			</p>
// 		</>
// 	);
// }
// const initialState = {
// 	message: "Hi",
// };

// function reducer(state, action) {
// 	switch (action.type) {
// 		case "yell":
// 			return {
// 				message: `HEYY! I just said ${state.message}`,
// 			};
// 		case "whisper":
// 			return {
// 				message: `excuse me, I just said ${state.message}`,
// 			};
// 	}
// }

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
	// return <StarRating />;
	// const [name, setName] = useState("Sam");
	// const [admin, setAdmin] = useState(false);
	// useEffect(() => {
	// 	console.log(`Celebrating ${name}`);
	// }, [name]);
	// useEffect(() => {
	// 	console.log(`The user is: ${admin ? "admin" : "not admin"}`);
	// }, [admin]);
	// return (
	// 	<section>
	// 		<p>Congratulations {name}!</p>
	// 		<button onClick={() => setName("Will")}>Change winner</button>
	// 		<p>{admin ? "Logged in" : "Not logged in"}</p>
	// 		<button onClick={() => setAdmin(true)}>Login</button>
	// 	</section>
	// );

	//Use effect hook
	// const [data, setData] = useState([]);
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		await fetch(`https://api.github.com/users`)
	// 			.then((response) => response.json())
	// 			.then((response) => setData(response));
	// 	};
	// 	fetchData();
	// }, []);
	// if (data) {
	// 	return (
	// 		<div>
	// 			<ul>
	// 				{data.map((user) => (
	// 					<li key={user.id}>{user.login}</li>
	// 				))}
	// 			</ul>
	// 			<button onClick={() => setData([])}>Remove Data</button>
	// 		</div>
	// 	);
	// }

	//use reducer hook
	// const [number, setNumber] = useReducer(
	// 	(number, newNumber) => number + newNumber,
	// 	0
	// );
	// return <h1 onClick={() => setNumber(5)}>{number}</h1>;

	// const [checked, setChecked] = useReducer((checked) => !checked, false);
	// return (
	// 	<>
	// 		<input type="checkbox" value={checked} onChange={setChecked} />
	// 		<p>{checked ? "Checked" : "Not Checked"}</p>
	// 	</>
	// );

	// const [state, dispatch] = useReducer(reducer, initialState);
	// return (
	// 	<>
	// 		<p>Message: {state.message}</p>
	// 		<button onClick={() => dispatch({ type: "yell" })}>YELL</button>
	// 		<button onClick={() => dispatch({ type: "whisper" })}>
	// 			whisper
	// 		</button>
	// 	</>
	// );
	// const [state, dispatch] = useReducer(reducer, initialState);

	//Use ref hook
	// const sound = useRef();
	// const color = useRef();
	const [titleProps, resetTitle] = useInput("");
	const [colorProps, resetColor] = useInput("#000000");
	console.log(titleProps);
	console.log(colorProps);

	function submit(e) {
		e.preventDefault();
		// const soundValue = sound.current.value;
		// const colorValue = color.current.value;
		alert(`${titleProps.value} sounds like ${colorProps.value}`);
		resetTitle("");
		resetColor("#000000");
	}
	return (
		<>
			<form onSubmit={submit}>
				<input {...titleProps} type="text" placeholder="Sound..." />
				<input {...colorProps} type="color" />
				<button>Add</button>
			</form>
		</>
	);
}

export default App;
