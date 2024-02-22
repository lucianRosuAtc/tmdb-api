import { Suspense } from "react";
import FetchAPI from "../components/FetchAPI";
import Loading from "./loading";
import Image from "next/image";

export default async function Home() {
  return (
    <main>
      <div className="flex items-center justify-center">
        <Image src="/img/hero/herobach.png" alt="hero" width={520} height={380} className="overflow-hidden focus"/>
        <Image src="/img/hero/herobach.png" alt="hero" width={520} height={380} className="overflow-hidden focus"/>
        <Image src="/img/hero/herobach.png" alt="hero" width={520} height={380} className="overflow-hidden focus"/>
      </div>
      <h1 className="flex justify-center my-10 text-xl md:text-5xl text-white">
        Trends of the day
      </h1>
      <Suspense fallback={<Loading />}>
        <FetchAPI
          apiUrl={`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}&append_to_response=movie,tv&time`}
        />
      </Suspense>
    </main>
  );
}
