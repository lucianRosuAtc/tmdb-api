import FetchAPI from "../components/FetchAPI"; 
export default async function Home() {
  return (
    <main>
      <h1 className="flex justify-center my-10 text-xl md:text-5xl text-white">
        TMDB API
      </h1>
      <FetchAPI  />
    </main>
  );
}
