import MovieForm from "../forms/MovieForm";
import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from '../movietheatres/movieTheater.model';

export default function CreateMovie() {
	const nonSelectedGenres: genreDTO[]=[{id:1,name:'comedy'},{id:2,name:'Drama'}]
	const nonSelectedMovieTheaters:movieTheaterDTO[]=[{id:1,name:'Sambil'},{id:2,name:'Agora'}]
	
	return (
		<>
			<h3>Create Movie </h3>
			<MovieForm 
				model={{ title: '', inTheatres: false, trailer: '' }}
				onSubmit={values => console.log(values)}
				nonSelectedGenres={nonSelectedGenres}
				selectedGenres={[]}
				nonSelectedMovieTheaters={nonSelectedMovieTheaters}
				selectedMovieTheaters={[]}
				selectedActors={[] }
				/>
				
		</>
	)
}