import FetchAPI from "@/components/FetchAPI";
import Loading from "@/app/loading";
import { Suspense } from "react";
import Hero from "@/components/Hero";
import wordingHome from "@/components/(link-data)/wordind-data";
import Wording from "@/components/Wording";

export default async function page() {
  return (
    <main>
      <Hero heroImage="/img/hero/dune-Logo.webp" heroTitle="Movie Of The Day" heroAlt="dune logo" />
      <Suspense fallback={<Loading />}>
      <Wording wordingData={wordingHome[2]} />
        <FetchAPI
          apiUrl={`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}&media_type=movie`}
        />
      </Suspense>
    </main>
  );
}
