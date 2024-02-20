import FetchAPI from "@/components/FetchAPI";
import Loading from "@/app/loading";
import { Suspense } from "react";

export default async function page() {
  return (
    <main>
      <h1 className="flex justify-center my-10 text-xl md:text-5xl text-white">
        New Movies
      </h1>
      <Suspense fallback={<Loading />}>
        <FetchAPI
          apiUrl={`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`}
        />
      </Suspense>
    </main>
  );
}
