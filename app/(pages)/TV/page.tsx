import FetchAPI from "@/components/FetchAPI";
import { Suspense } from "react";
import Loading from "@/app/loading";
import Image from "next/image";

export default async function page() {
  return (
    <main>
      <div className="flex items-center justify-center relative pb-10">
        <Image
          src="/img/hero/halo-logo.png"
          alt="hero image for tv show Halo"
          width={1920}
          height={680}
        />

        <h1 className="flex justify-center my-10 text-xl md:text-8xl text-white absolute">
          All Tv Shows
        </h1>
      </div>

      <Suspense fallback={<Loading />}>
        <FetchAPI
          apiUrl={`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&append_to_response=videos,images`}
        />
      </Suspense>
    </main>
  );
}
