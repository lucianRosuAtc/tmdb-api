import FetchAPI from "@/components/FetchAPI";
import { Suspense } from "react";
import Loading from "@/app/loading";
import Hero from "@/components/Hero";
import Wording from "@/components/Wording";
import wordingHome from "@/components/wordind-data";

export default async function page() {
  return (
    <main>
      <Hero heroImage="/img/hero/shogun.jpg" heroTitle="Tv Shows Of The Day" heroAlt="Shogun hero"/>
      <Suspense fallback={<Loading />}>
      <Wording wordingData={wordingHome[5]} />
        <FetchAPI
          apiUrl={`https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.API_KEY}&media_type=tv&time_window=day`}
        />
      </Suspense>
    </main>
  );
}
