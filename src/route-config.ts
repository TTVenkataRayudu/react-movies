import CreateActor from "./actors/CreateActor";
import EditActor from "./actors/EditActor";
import IndexActors from "./actors/IndexActors";
import CreateGenre from "./genres/CreateGenre";
import EditGenre from "./genres/EditGenre";
import IndexGenres from "./genres/IndexGenres";
import CreateMovie from "./movies/CreateMovie";
import EditMovie from "./movies/EditMovie";
import FilterMovies from "./movies/FilterMovies";
import LandingPage from "./movies/LandingPage";
import CreateMovieTheatre from "./movietheatres/CreateMovieTheatre";
import EditMovieTheatre from "./movietheatres/EditMovieTheatre";
import IndexMovieTheatres from "./movietheatres/indexMovieTheatres";
import RedirectToLandingPage from "./utils/RedirectToLandingPage";

const routes = [
    { path: '/genres', component: IndexGenres,exact:true },
    { path: '/genres/create', component: CreateGenre },
    { path: '/genres/edit/:id(\\d+)', component: EditGenre },

    { path: '/actors', component: IndexActors, exact: true },
    { path: '/actors/create', component: CreateActor },
    { path: '/actors/edit/:id(\\d+)', component: EditActor },

    { path: '/movietheaters', component: IndexMovieTheatres, exact: true },
    { path: '/movietheaters/create', component: CreateMovieTheatre },
    { path: '/movietheaters/edit/:id(\\d+)', component: EditMovieTheatre },

    { path: '/movies/create', component: CreateMovie, exact: true },
    { path: '/movies/edit/:id(\\d+)', component: EditMovie },
    { path: '/movies/filter', component: FilterMovies },


    { path: '/', component: LandingPage, exact: true },
    { path: '*', component: RedirectToLandingPage }
];
export default routes;