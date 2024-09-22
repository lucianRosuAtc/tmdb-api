"use client";
import Image from "next/image";
import footerLinks from "./(link-data)/footer-data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Socials from "./Socials";

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-4 border-t-2 border-goldTxt pt-6  md:pt-0">
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
        {/* MARK: Navigation Links
         */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 col-span-2 px-8 md:px-0 justify-center mx-auto gap-x-7 gap-y-4 md:gap-y-0 items-center pt-5 pb-10">
          {footerLinks.map((link) => (
            <Link
              className="relative text-center hover:text-orange-500 transition-all text-orange-100 text-sm lg:text-base"
              key={link.footerLink}
              href={link.footerLink}
            >
              {link.footerLink === pathname && (
                <motion.span
                  initial={{ y: "-100%" }}
                  animate={{ y: 0 }}
                  transition={{ type: "tween" }}
                  layoutId="underline"
                  className="absolute left-0 top-full h-[2px] bg-orange-500 w-full mt-1"
                />
              )}
              {link.footerLinkName}
            </Link>
          ))}
        </div>

        {/* MARK: Social Media Links
         */}

        <div className="flex flex-col justify-start items-center mb-4 md:py-10 px-4">
          <div className="text-xl text-orange-500 mb-4 md:mb-6">CONTACT US</div>

          <Socials MyClassName="text-4xl text-orange-500 hover:text-orange-100 transition-all" />
        </div>
      </div>

      {/* Date  */}
      <div className="flex justify-center px-8 text-white pt-3 pb-12">
        <p className="text-sm text-center">
        <span className="pr-1">&copy;</span>
        {`${year}`}<Link href="https://www.lucianrosu.com/" target="_blank" className='hover:text-orange-500 font-bold'> Lucian Dev</Link>, All rights reserved.
        </p>
      </div>
    </div>
  );
}
