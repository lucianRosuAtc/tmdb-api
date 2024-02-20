import FetchAPI from "../components/FetchAPI";

export default async function Home() {
  return (
    <main>
      <h1 className="flex justify-center my-10 text-xl md:text-5xl text-white">
        Trends of the day
      </h1>

      <FetchAPI
        apiUrl={`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}&append_to_response=movie,tv&time`}
      />
    </main>
  );
}
