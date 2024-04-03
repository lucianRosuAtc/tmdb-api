import FetchAPI from "@/components/FetchAPI";
import Loading from "@/app/loading";
import { Suspense } from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import Wording from "@/components/Wording";
import wordingHome from "@/components/wordind-data";

export default async function page() {
  return (
    <main>
      <Hero heroImage="/img/hero/theGentlemen.jpg" heroTitle="Tv Shows Of The Week" heroAlt="The Gentlemen logo" />
      <Suspense fallback={<Loading />}>
      <Wording wordingData={wordingHome[6]} />
        <FetchAPI
          apiUrl={`https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.API_KEY}&media_type=tv&time_window=day`}
        />
      </Suspense>
    </main>
  );
}
