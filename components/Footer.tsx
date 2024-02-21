import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 h-60 border-t-2 border-orange-500 py-10 md:pt-0">
      <div className="flex justify-center items-center">
        <Link
          className="flex justify-start rounded-md py-2 px-2 focus:shadow-lg hover:bg-gray-700 hover:text-orange-500
                      border-b border-b-transparent hover:border-b-orange-500"
          href="/"
        >
          <Image
            src="/img/logo/blue_square_1.svg"
            width={100}
            height={100}
            alt="footer logo"
            className="cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center py-10 ">


        <h2 className="text-goldTxt">USEFUL LINKS</h2>
      <div className="flex justify-center items-center text-white">
        <ul className="grid gap-3 p-6 grid-cols-2">
          <li>
            <Link
              className="flex justify-start rounded-md py-2 px-2 focus:shadow-lg hover:bg-gray-700 hover:text-orange-500
             border-b border-b-transparent hover:border-b-orange-500"
              href="/Movie"
            >
              <p className="text-sm font-medium">Movie</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex justify-start rounded-md py-2 px-2 focus:shadow-lg hover:bg-gray-700 hover:text-orange-500
          border-b border-b-transparent hover:border-b-orange-500"
              href="/MovieOfTheDay"
            >
              <p className="text-sm font-medium">Movie Of The Day</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex justify-start rounded-md py-2 px-2 focus:shadow-lg hover:bg-gray-700 hover:text-orange-500
              border-b border-b-transparent hover:border-b-orange-500"
              href="/MovieOfTheWeek"
            >
              <p className="text-sm font-medium">Movie Of The Week</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex justify-start rounded-md py-2 px-2 focus:shadow-lg hover:bg-gray-700 hover:text-orange-500
      border-b border-b-transparent hover:border-b-orange-500"
              href="/TV"
            >
              <p className="text-sm font-medium">Tv Shows</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex justify-start rounded-md py-2 px-2 focus:shadow-lg hover:bg-gray-700 hover:text-orange-500
          border-b border-b-transparent hover:border-b-orange-500"
              href="/TvShowOfTheDay"
            >
              <p className="text-sm font-medium">Tv Show Of The Day</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex justify-start rounded-md py-2 px-2 focus:shadow-lg hover:bg-gray-700 hover:text-orange-500
             border-b border-b-transparent hover:border-b-orange-500"
              href="/TvShowOfTheWeek"
            >
              <p className="text-sm font-medium">Tv Show Of The Day</p>
            </Link>
          </li>
        </ul>
      </div>
      </div>
      <div className="flex flex-col justify-center items-center py-10 ">
      <div className="text-goldTxt">CONTACT US</div>
        <div className="flex  items-center text-goldTxt"><FaXTwitter /> <FaFacebookSquare /> <TfiEmail />  <FaLinkedin /></div>
      </div>
    </div>
  );
}
