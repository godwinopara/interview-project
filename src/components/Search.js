import React from "react";

function Search({ onChange, searchMovie }) {
	return (
		<section className="layout-row justify-content-center mb-40">
			<input type="text" placeholder="Search for movie by name" className="w-75 py-2" data-testid="search" onChange={onChange} value={searchMovie} />
		</section>
	);
}

export default Search;
