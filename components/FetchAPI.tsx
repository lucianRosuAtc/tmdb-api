"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type Movie = {
  id: number;
  original_title: string;
  overview: string;
  genre_ids: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  vote_count: number;
};

const getMovie = async (apiUrl: string): Promise<Movie[]> => {
  const res = await fetch(apiUrl);
  
  if (!res.ok) {
    throw new Error("Error fetching data");
  }
  const data = await res.json();
  console.log(data.results)
  return data.results;
};

export default function FetchAPI({ apiUrl }: { apiUrl: string }) {
  const [movies, setMovies] = useState<Movie[]>([]);
  
  useEffect(() => {
    const fetchMovies = async () => {
      const result = await getMovie(apiUrl);
      setMovies(result);
    };

    fetchMovies();
  }, [apiUrl]);

  return (
        <div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-4 md:px-8">
        {movies.map((movie) => (
          <div key={movie.id} className="text-white">
            <div className="aspect-square relative">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                // src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.original_title}
                width={1920}
                height={1080}
                className="object-cover rounded-md border border-orange-500 mx-auto md:mx-0"
              />
            </div>
            <div className="flex flex-col justify-center mt-3 mb-10 max-w-[400px] md:max-w-auto mx-auto md:mx-0">
              <h2>Title: {movie.original_title}</h2>
              <h3>Overview:</h3>
              <p className="text-sm">{movie.overview}</p>
              <h3 className="mt-2">Release date: {movie.release_date}</h3>
              <h3>Vote Average: {movie.vote_average}</h3>
              <h3>Vote count: {movie.vote_count}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
