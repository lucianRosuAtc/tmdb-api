import FetchAPI from "@/components/FetchAPI";
import Loading from "@/app/loading";
import { Suspense } from "react";
import Hero from "@/components/Hero";
import Wording from "@/components/Wording";
import wordingHome from "@/components/wordind-data";

export default async function page() {
  return (
    <main>
      <Hero heroImage="/img/hero/marvelsLogo.jpg" heroTitle="New Movies" heroAlt="Marvel Logo" />
      <Suspense fallback={<Loading />}>
      <Wording wordingData={wordingHome[1]} />
        <FetchAPI
          apiUrl={`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`}
        />
      </Suspense>
    </main>
  );
}
