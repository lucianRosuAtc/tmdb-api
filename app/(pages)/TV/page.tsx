import FetchAPI from "@/components/FetchAPI";
import React from "react";

export default async function page() {
  return (
    <div>
      
      <h1 className="flex justify-center my-10 text-xl md:text-5xl text-white">
        Tv Shows
      </h1>
      <h2 className="flex justify-center my-10 text-xl md:text-5xl text-white">Tv shows at the moment</h2>

  
      <h2 className="flex justify-center my-10 text-xl md:text-5xl text-white">2 This are the most appreciated Tv shows at the moment</h2>
      <FetchAPI  apiUrl={`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}&media_type=movie`} />
    </div>
  );
}
