import FetchAPI from "@/components/FetchAPI";

export default async function page() {
  return (
    <div>
      <h1 className="flex justify-center my-10 text-xl md:text-5xl text-white">
       All Tv Shows
      </h1>
      <FetchAPI
        apiUrl={ `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&append_to_response=videos,images`}
      />
    </div>
  );
}
