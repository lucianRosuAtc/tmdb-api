import { Suspense } from "react";
import FetchAPI from "../components/FetchAPI";
import Loading from "./loading";
import Hero from "@/components/Hero";
import Wording from "@/components/Wording";
import wordingHome from "@/components/wordind-data"

export default async function Home() {
  return (
    <main>
      <Hero heroImage="/img/hero/badBatch.jpg" heroTitle="Trends of the day" heroAlt="Bad Batch movie logo"/>
      <Suspense fallback={<Loading />}>
      <Wording wordingData={wordingHome[0]} />
        <FetchAPI
          apiUrl={`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}&append_to_response=movie,tv&time`}
        />
      </Suspense>
    </main>
  );
}
