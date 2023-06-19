import React from "react";

function Movieform({ onSubmit, invalidFormat, onChange, name, rating, duration }) {
	return (
		<section>
			<div className="card pa-30">
				<form onSubmit={onSubmit}>
					<div className="layout-column mb-15">
						<label htmlFor="name" className="mb-3">
							Movie Name
						</label>
						<input type="text" id="name" name="name" placeholder="Enter Movie Name" data-testid="nameInput" onChange={onChange} value={name} required />
					</div>
					<div className="layout-column mb-15">
						<label htmlFor="ratings" className="mb-3">
							Ratings
						</label>
						<input type="number" id="ratings" name="rating" placeholder="Enter Rating on a scale of 1 to 100" data-testid="ratingsInput" onChange={onChange} value={rating} required />
					</div>
					<div className="layout-column mb-30">
						<label htmlFor="duration" className="mb-3">
							Duration
						</label>
						<input type="text" id="duration" name="duration" placeholder="Enter duration in hours or minutes" data-testid="durationInput" onChange={onChange} value={duration} required />
					</div>
					{/* Use this div when time format is invalid */}
					{invalidFormat && (
						<div className="alert error mb-30" data-testid="alert">
							Please specify time in hours or minutes (e.g. 2.5h or 150m)
						</div>
					)}
					<div className="layout-row justify-content-end">
						<button type="submit" className="mx-0" data-testid="addButton">
							Add Movie
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}

export default Movieform;
