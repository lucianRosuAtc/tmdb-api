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

const getMovie = async (): Promise<Movie[]> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Error fetching data");
  }
  const data = await res.json();
  return data.results;
};

await new Promise((resolve) => setTimeout(resolve, 5000));
export default async function Home() {
  const movies = await getMovie();
  // console.log(movies)

  return (
    <main className="">
      <h1 className="flex justify-center my-10 text-xl md:text-5xl text-white">
        TMDB API
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 m-20 ">
        {(await getMovie()).map((movie) => (
          <div key={movie.id} className="text-white">
            <div className="aspect-square relative">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
                fill
                className="object-contain rounded-md border border-orange-500 "
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
