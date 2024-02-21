import FetchAPI from "@/components/FetchAPI";
import { Suspense } from "react";
import Loading from "@/app/loading";

export default async function page() {
  return (
    <main>
      <h1 className="flex justify-center my-10 text-xl md:text-5xl text-white">
        All TV Shows
      </h1>
      <Suspense fallback={<Loading />}>
      <FetchAPI
        apiUrl={`https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.API_KEY}&media_type=tv&time_window=day`}   />
    </Suspense>
    </main>
  );
}
