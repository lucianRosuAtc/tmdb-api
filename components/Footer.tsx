import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 h-60 border-t-2 border-goldTxt py-10 md:pt-0">
      <div className="flex justify-center items-center">
        <Link
          className="flex justify-start rounded-md py-2 px-2 focus:shadow-lg hover:bg-gray-700 hover:text-goldTxt border-b border-b-transparent hover:border-b-goldTxt"
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
      <div className="flex flex-col justify-center items-center pt-10  ">
        <h2 className="text-goldTxt">USEFUL LINKS</h2>
        <div className="flex justify-center items-center text-white">
          <ul className="grid gap-4 p-6 grid-cols-2">
            <li>
              <Link
                className="flex justify-start  py-2 px-2 focus:shadow-lg hover:text-goldTxt
             border-b border-b-transparent hover:border-b-goldTxt"
                href="/Movie"
              >
                <p className="text-sm font-medium">Movie</p>
              </Link>
            </li>
            <li>
              <Link
                className="flex justify-start  py-2 px-2 focus:shadow-lg hover:text-goldTxt
          border-b border-b-transparent hover:border-b-goldTxt"
                href="/MovieOfTheDay"
              >
                <p className="text-sm font-medium">Movie Of The Day</p>
              </Link>
            </li>
            <li>
              <Link
                className="flex justify-start  py-2 px-2 focus:shadow-lg hover:text-goldTxt
              border-b border-b-transparent hover:border-b-goldTxt"
                href="/MovieOfTheWeek"
              >
                <p className="text-sm font-medium">Movie Of The Week</p>
              </Link>
            </li>
            <li>
              <Link
                className="flex justify-start  py-2 px-2 focus:shadow-lg hover:text-goldTxt
      border-b border-b-transparent hover:border-b-goldTxt"
                href="/TV"
              >
                <p className="text-sm font-medium">Tv Shows</p>
              </Link>
            </li>
            <li>
              <Link
                className="flex justify-start  py-2 px-2 focus:shadow-lg  hover:text-goldTxt
          border-b border-b-transparent hover:border-b-goldTxt"
                href="/TvShowOfTheDay"
              >
                <p className="text-sm font-medium">Tv Show Of The Day</p>
              </Link>
            </li>
            <li>
              <Link
                className="flex justify-start  py-2 px-2 focus:shadow-lg  hover:text-goldTxt
             border-b border-b-transparent hover:border-b-goldTxt"
                href="/TvShowOfTheWeek"
              >
                <p className="text-sm font-medium">Tv Show Of The Day</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center py-10">
        <div className="text-goldTxt md:mb-6">CONTACT US</div>
        <div className="flex  justify-center items-center text-goldTxt">
          <Link
            href="https://twitter.com/home"
            target="_blank"
            className="p-2 h-8 hover:text-orange-500"
          >
            <FaXTwitter />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=100091859563019"
            target="_blank"
            className="p-2 h-8 hover:text-orange-500 "
          >
            <FaFacebookSquare />
          </Link>
          <a
            href="mailto:lucian.rosu@adopstar.com"
            target="_blank"
            className="p-2 h-8 hover:text-orange-500"
          >
            <TfiEmail />
          </a>
          <Link
            href="https://www.linkedin.com/feed/"
            target="_blank"
            className="p-2 h-8 hover:text-orange-500"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
}
