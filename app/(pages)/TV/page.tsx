import FetchAPI from "@/components/FetchAPI";
import { Suspense } from "react";
import Loading from "@/app/loading";
import Hero from "@/components/Hero";
import Wording from "@/components/Wording";
import wordingHome from "@/components/wordind-data";

export default async function page() {
  return (
    <main>
      <Hero heroImage="/img/hero/halo-logo.jpg" heroTitle="All Tv Shows" heroAlt="halo logo" />
      <Suspense fallback={<Loading />}>
      <Wording wordingData={wordingHome[4]} />
        <FetchAPI
          apiUrl={`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&append_to_response=videos,images`}
        />
      </Suspense>
    </main>
  );
}
