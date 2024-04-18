import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa6";
import footerLinks from "./footer-data";
import { usePathname } from "next/navigation";

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col">

    <div className="grid grid-cols-1 md:grid-cols-3  border-t-2 border-goldTxt pt-6  md:pt-0">
      <div className="flex justify-center items-center">
        <Link
          className="flex justify-center items-center rounded-md py-2 px-2 focus:shadow-lg hover:bg-gray-700 hover:text-goldTxt border-b border-b-transparent hover:border-b-goldTxt"
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
    
    {/* Link  */}

     <div className="flex flex-col justify-center items-center py-4 ">
        <div className="flex justify-center items-center text-white">
          <ul className="grid gap-4 p-4 grid-cols-2 lg:grid-cols-3">
            {footerLinks.map((link)=> (

              <li key={link.footerLink}>
              <Link
                className="flex justify-start  py-2 px-2 focus:shadow-lg hover:text-goldTxt"
                href={link.footerLink}
                >
                <p className="text-sm font-medium">{link.footerLinkName}</p>
              </Link>
            </li>
              ))}
          
          </ul>
        </div>
      </div>

      {/* *********** Contact ******** */}
      
      <div className="flex flex-col justify-start items-center mb-4 md:py-10">
        <div className="text-goldTxt mb-2 md:mb-6">CONTACT US</div>
        <div className="flex justify-center items-center text-goldTxt">
          <Link
            href="https://twitter.com/LucianRosuATC"
            target="_blank"
            className="hover:text-orange-500"
          >
            <FaXTwitter className="h-8 w-8" />
          </Link>
          <a
            href="mailto:lucian.rosu.atc@gmail.com"
            target="_blank"
            className="px-3 hover:text-orange-500"
          >
            <TfiEmail className="h-8 w-8" />
          </a>
          <Link
            href="https://www.linkedin.com/in/lucian-rosu-atc/"
            target="_blank"
            className="hover:text-orange-500"
          >
            <FaLinkedin className="h-8 w-8" />
          </Link>
        </div>
      </div>
    </div>

      {/* Date  */}
      <div className="flex justify-center px-4 text-white pt-3 pb-6">
        <p className="text-sm md:text-sm"><span className="pr-1">&copy;</span> {`${year} TMBD-API-LEARNING, All rights reserved.`} </p>
      </div>
    </div>
  );
}

