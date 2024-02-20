 

// import Image from "next/image";

// type Movie = {
//   id: number;
//   original_title: string;
//   overview: string;
//   genre_ids: string;
//   backdrop_path: string;
//   poster_path: string;
//   vote_average: number;
//   vote_count: number;
// };

// const getMovie = async (): Promise<Movie[]> => {
//   const res = await fetch(
//     // `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`
//     // `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&append_to_response=videos,images`
//     // `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}&media_type=movie`
//     // `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.API_KEY}&media_type=tv&time_window=day`
//     // `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}&media_type=movie`
//     // `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.API_KEY}&media_type=movie`
//     // `https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=${process.env.API_KEY}&media_type=movie`
//     // `https://api.themoviedb.org/3/search/tv?query=Halo&api_key=${process.env.API_KEY}&media_type=movie`
    

//     // all calls on top are working (to be used later)

//     `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}&media_type=movie`
//     );
//     console.log(res)

//   if (!res.ok) {
//     throw new Error("Error fetching data");
//   }
//   const data = await res.json();
//   return data.results;
// };

// await new Promise((resolve) => setTimeout(resolve, 1000));
// export default async function Home() {
//   const movies = await getMovie();
//   console.log(movies)

//   return (
//     <main className="">
 
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 m-20 ">
//         {(await getMovie()).map((movie) => (
//           <div key={movie.id} className="text-white">
//             <div className="aspect-square relative">
//               <Image
//                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                 alt={movie.original_title}
//                 width={400}
//                 height={500}
//                 className="object-cover rounded-md border border-orange-500 "
//               />
//             </div>
//             <div className="flex flex-col justify-center mt-3 mb-10">
//               <h2>Title: {movie.original_title}</h2>
//               <h3>Overview:</h3>
//               <p className="text-sm">{movie.overview}</p>
//               <h3 className="mt-2">Genre: {movie.genre_ids}</h3>
//               <h3>Average vote: {movie.vote_average}</h3>
//               <h3>Vote count: {movie.vote_count}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }



  










// import Image from "next/image";

// type Movie = {
//   id: number;
//   original_title: string;
//   overview: string;
//   genre_ids: string;
//   backdrop_path: string;
//   poster_path: string;
//   vote_average: number;
//   vote_count: number;
// };

// const getMovie = async (): Promise<Movie[]> => {
//   const res = await fetch(
//     // `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`
//     // `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&append_to_response=videos,images`
//     // `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}&media_type=movie`
//     // `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.API_KEY}&media_type=tv&time_window=day`
//     // `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}&media_type=movie`
//     // `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.API_KEY}&media_type=movie`
//     // `https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=${process.env.API_KEY}&media_type=movie`
//     // `https://api.themoviedb.org/3/search/tv?query=Halo&api_key=${process.env.API_KEY}&media_type=movie`
    

//     // all calls on top are working (to be used later)

//     `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}&media_type=movie`
//     );
//     console.log(res)

//   if (!res.ok) {
//     throw new Error("Error fetching data");
//   }
//   const data = await res.json();
//   return data.results;
// };

// await new Promise((resolve) => setTimeout(resolve, 1000));
// export default async function Home() {
//   const movies = await getMovie();
//   console.log(movies)

//   return (
//     <main className="">
 
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 m-20 ">
//         {(await getMovie()).map((movie) => (
//           <div key={movie.id} className="text-white">
//             <div className="aspect-square relative">
//               <Image
//                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                 alt={movie.original_title}
//                 width={400}
//                 height={500}
//                 className="object-cover rounded-md border border-orange-500 "
//               />
//             </div>
//             <div className="flex flex-col justify-center mt-3 mb-10">
//               <h2>Title: {movie.original_title}</h2>
//               <h3>Overview:</h3>
//               <p className="text-sm">{movie.overview}</p>
//               <h3 className="mt-2">Genre: {movie.genre_ids}</h3>
//               <h3>Average vote: {movie.vote_average}</h3>
//               <h3>Vote count: {movie.vote_count}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }


'use client'
import React, { useEffect, useState } from 'react';
import Image from "next/image";

type Movie = {
  id: number;
  original_title: string;
  overview: string;
  genre_ids: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};


const getMovie = async (apiUrl: string): Promise<Movie[]> => {
  const res = await fetch(apiUrl);
  console.log(res)

  if (!res.ok) {
    throw new Error("Error fetching data");
  }
  const data = await res.json();
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
    <main className="">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 m-20 ">
        {movies.map((movie) => (
          <div key={movie.id} className="text-white">
            <div className="aspect-square relative">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
                width={400}
                height={500}
                className="object-cover rounded-md border border-orange-500 "
              />
            </div>
            <div className="flex flex-col justify-center mt-3 mb-10">
              <h2>Title: {movie.original_title}</h2>
              <h3>Overview:</h3>
              <p className="text-sm">{movie.overview}</p>
              <h3 className="mt-2">Genre: {movie.genre_ids}</h3>
              <h3>Average vote: {movie.vote_average}</h3>
              <h3>Vote count: {movie.vote_count}</h3>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}