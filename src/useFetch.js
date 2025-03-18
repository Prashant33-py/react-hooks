import { useState, useEffect } from "react";
export function useFetch(uri) {
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();

	useEffect(() => {
		const fetchData = async () => {
			if (!uri) return;
			await fetch(uri)
				.then((data) => data.json())
				.then(setData)
				.then(() => setLoading(false))
				.catch(setError);
		};
		fetchData();
	}, [uri]);

	return { data, loading, error };
}
