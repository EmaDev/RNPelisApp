import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDb';
import { Movie, MovieDBResponse } from '../interfaces/movieDbInterface';

interface MoviesState {
    enCines: Movie[];
    populares: Movie[];
    proximosEstrenos: Movie[];
    mejorCalificadas: Movie[];
}
export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [moviesState, setMoviesState] = useState<MoviesState>({
        enCines: [],
        populares: [],
        proximosEstrenos: [],
        mejorCalificadas: []
    });

    const getMovies = async () => {
        const enCinesPromise = movieDB.get<MovieDBResponse>('/now_playing');
        const popularesPromise = movieDB.get<MovieDBResponse>('/popular');
        const proximosPromise = movieDB.get<MovieDBResponse>('/upcoming');
        const mejorCalifPromise = movieDB.get<MovieDBResponse>('/top_rated');

        const resp = await Promise.all([enCinesPromise, popularesPromise, proximosPromise, mejorCalifPromise]);

        
        setMoviesState({
            enCines: resp[0].data.results,
            populares: resp[1].data.results,
            proximosEstrenos: resp[2].data.results,
            mejorCalificadas: resp[3].data.results,
        });

        
        setIsLoading(false);
        
    }
    useEffect(() => {
        getMovies();
    }, []);

    return { isLoading, ...moviesState };
}
