import React, { useState } from "react";
import "./App.css";
import "h8k-components";

import { Movieform, Movieslist, Search } from "./components";

const title = "Favorite Movie Directory";

function App() {
	const [movies, setMovies] = useState([]);
	const [filteredMovies, setFilteredMovies] = useState(null);
	const [form, setForm] = useState({ name: "", rating: "", duration: "" });
	const [invalidFormat, setInvalidFormat] = useState(false);

	const handleSumbit = (e) => {
		e.preventDefault();

		if (checkFormat(form.duration)) {
			const newMovie = { ...form, duration: form.duration.slice(0, form.duration.length - 1) };
			setMovies([...movies, newMovie]);
			setForm({ name: "", rating: "", duration: "" });
			setInvalidFormat(false);
		} else {
			setInvalidFormat(true);
		}
	};

	const handleChange = (e) => {
		e.preventDefault();
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleFilter = (e) => {
		const movieToSearch = e.target.value.toLowerCase();
		const allMovies = [...movies];
		const moviesFiltered = allMovies.filter((movie) => movie.name.toLowerCase().includes(movieToSearch));
		setFilteredMovies(moviesFiltered);
	};

	function checkFormat(str) {
		return str.endsWith("m") || str.endsWith("h");
	}

	return (
		<div>
			<h8k-navbar header={title} />
			<div className="layout-row justify-content-center mt-100">
				<div className="w-30 mr-75">
					<Movieform onSubmit={handleSumbit} onChange={handleChange} invalidFormat={invalidFormat} name={form.name} rating={form.rating} duration={form.duration} />
				</div>
				<div className="layout-column w-30">
					<Search onChange={handleFilter} />
					<Movieslist movies={filteredMovies ? filteredMovies : movies} />
					<div data-testid="noResult">
						<h3 className="text-center">No Results Found</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
