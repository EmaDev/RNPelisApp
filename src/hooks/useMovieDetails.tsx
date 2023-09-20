import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import movieDB from '../api/movieDb';
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieDbInterface';


interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}
export const useMovieDetails = (movieId:number) => {
  
  const [movieDetails, setMovieDetails] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: []
  });
  
  const getMovieDetails = async() => {
   const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
   const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);
   
   const resp = await Promise.all([movieDetailsPromise, castPromise]);

   const [movieDetailsResp, castDetailsResp] = resp;
   setMovieDetails({
     isLoading: false,
     movieFull: movieDetailsResp.data,
     cast: castDetailsResp.data.cast
   });

  }

  useEffect( () => {
    getMovieDetails();
  }, []);

  return {...movieDetails};
}
