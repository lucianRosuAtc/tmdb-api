import FetchTvAPI from "../TV/_components/FetchTvAPI"
import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="flex justify-center my-10 text-xl md:text-5xl text-white">
        Tv Shows
      </h1>
      <FetchTvAPI />
    </div>
  );
}
