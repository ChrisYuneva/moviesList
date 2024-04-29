import { useQuery } from '@tanstack/react-query';
import { MovieById, MoviesResponse } from './types';

export function useGetMovies(page: number) {
    async function getList(): Promise<MoviesResponse> {
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?language=ru-Ru&page=${page}`, {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
            }
        })
        return response.json();
    }
    return useQuery({ queryKey: ['movies', page], queryFn: getList, retry: 2, });
}


export function useGetMovieById(id: string) {
    async function getMovieById(): Promise<MovieById> {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=ru-Ru`, {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
            }
        })
        return response.json();
    }
    return useQuery({ queryKey: ['movie'], queryFn: getMovieById, retry: 2, });
}
