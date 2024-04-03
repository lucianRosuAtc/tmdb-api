import FetchAPI from "@/components/FetchAPI";
import { Suspense } from "react";
import Loading from "@/app/loading";
import Hero from "@/components/Hero";
import wordingHome from "@/components/wordind-data";
import Wording from "@/components/Wording";

export default async function page() {
  return (
    <main>
    <Hero heroImage="/img/hero/roadHouse.webp" heroTitle="Movie Of The Week" heroAlt="Road House movie logo" />
      <Suspense fallback={<Loading />}>
      <Wording wordingData={wordingHome[3]} />
        <FetchAPI
          apiUrl={`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.API_KEY}&media_type=movie`}
        />
      </Suspense>
    </main>
  );
}
