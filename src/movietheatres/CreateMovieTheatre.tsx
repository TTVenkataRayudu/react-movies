import MovieTheaterForm from "./MovieTheaterForm";

export default function CreateMovieTheatre() {
	return (
		<>
			<h3>Create Movie Theatre</h3>
			<MovieTheaterForm
				
				model={{
					name: 'Sravani',
					latitude: 17.4123487,
					longitude: 78.4080455
				}}
				onSubmit={values=>console.log(values)}
			/>
		</>
	)
}