import FetchAPI from "@/components/FetchAPI";
import React from "react";

export default async function page() {
  return (
    <div>
      <h1 className="flex justify-center my-10 text-xl md:text-5xl text-white">
       New Movies
      </h1>

      <FetchAPI
        apiUrl={`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`}
        />
    </div>
  );
}
