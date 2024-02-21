import FetchAPI from "@/components/FetchAPI";
import Loading from "@/app/loading";
import { Suspense } from "react";

export default async function page() {
  return (
      <main>
        <h1 className="flex justify-center my-10 text-xl md:text-5xl text-white">
          Movie Of The Day
        </h1>
        <Suspense fallback={<Loading />}>
        <FetchAPI
          apiUrl={`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}&media_type=movie`}
          />
        </Suspense>
      </main>
  );
}
