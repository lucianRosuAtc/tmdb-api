import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 h-60 border-t-2 border-orange-500">
      <div className="flex justify-center items-center">
        <Image
          src="/img/logo/blue_square_1.svg"
          width={150}
          height={150}
          alt="footer logo"
          className="border-b-2 border-orange-500 placeholder pb-2 "
        />
      </div>

      <div className="">


      </div>

          <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold">Contact Us</p>
      
          </div>
        </div>
    </div>
  );
}
