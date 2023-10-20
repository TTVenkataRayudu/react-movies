import { useEffect, useState } from "react";
import { landingPageDTO } from "./movies.model";
import MoviesList from "./MoviesList"

export default function LandingPage() {
    const [movies, setMovies] = useState<landingPageDTO>({});

    useEffect(() => {
        const timerId = setTimeout(() => {
            setMovies({
                inTheatres: [
                    {
                        id: 1,
                        title: 'Spider-Man:Far From Home',
                        poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
                    },
                    {
                        id: 2,
                        title: 'Lucas',
                        poster: 'https://m.media-amazon.com/images/M/MV5BZTQyNTU0MDktYTFkYi00ZjNhLWE2ODctMzBkM2U1ZTk3YTMzXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg'
                    }],

                upcomingReleases: [{
                    id: 3,
                    title: 'soul',
                    poster: 'https://i0.wp.com/calamur.org/gargi/wp-content/uploads/2021/01/soul_ver7.jpg?fit=510%2C755&ssl=1'
                }]


            })


        }, 1000);
        return () => clearTimeout(timerId);
    });

    return (
        <>
            <h3>In Theatres
            </h3>
            <MoviesList movies={movies.inTheatres} />
            <h3>Upcoming Releases</h3>
            <MoviesList movies={movies.upcomingReleases} />

</>
)

}