export interface movieDTO {
    id: number;
    title: string;
    poster: string;
}

export interface landingPageDTO {
    inTheatres?: movieDTO[];
    upcomingReleases?: movieDTO[];
}

export interface movieCreationDTO {
    title: string;
    inTheatres: boolean;
    trailer: string;
    releaseDate?: Date;
    poster?: File;
    posterURL?: string;
    genresIds?:number[];
    movieTheatersIds?: number[];
    actors?: actorMovieDTO[];
}