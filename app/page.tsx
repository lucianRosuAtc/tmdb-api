import { Suspense } from "react";
import FetchAPI from "../components/FetchAPI";
import Loading from "./loading";
import Image from "next/image";

export default async function Home() {
  return (
    <main>
      <div className="flex items-center justify-center relative pb-10">
        <Image src="/img/hero/badBatch.png" alt="hero" width={1920} height={680} className=""/>
        {/* <Image src="/img/hero/backdropbadbatch.webp" alt="hero" width={720} height={680} className="absolute"/> */}

      <h1 className="flex justify-center my-10 text-xl md:text-8xl text-goldTxt absolute">
        Trends of the day
      </h1>
      </div>
      <Suspense fallback={<Loading />}>
        <FetchAPI
          apiUrl={`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}&append_to_response=movie,tv&time`}
          />
      </Suspense>
    </main>
  );
}
