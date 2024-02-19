import  FetchAPI  from "@/components/FetchAPI";
import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="flex justify-center my-10 text-xl md:text-5xl text-white">
        Tv Shows
      </h1>
      <FetchAPI />
    </div>
  );
}
