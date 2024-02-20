import FetchAPI from "@/components/FetchAPI";

export default async function page() {
  return (
    <div>
      <h1 className="flex justify-center my-10 text-xl md:text-5xl text-white">
        Movie Of The Week
      </h1>

      <FetchAPI
        apiUrl={`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.API_KEY}&media_type=movie`}
      />
    </div>
  );
}
