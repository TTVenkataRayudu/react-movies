import MovieTheaterForm from "./MovieTheaterForm";

export default function EditMovieTheatre() {
	return (
		<>
			<h3>EditMovieTheatre</h3>
			<MovieTheaterForm
				model={{
					name: 'Sravani',
					latitude: 17.4123487,
					longitude: 78.4080455
				}}
				onSubmit={values=>console.log(values) }
			/>
		</>
	)
}