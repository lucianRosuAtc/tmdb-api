// 'use client'
// import Image from "next/image";
// import Link from "next/link";
// import { FaXTwitter, FaLinkedin  } from "react-icons/fa6";
// import { TfiEmail } from "react-icons/tfi";
// import footerLinks from "./footer-data";
// import { usePathname } from "next/navigation";
// import { motion } from "framer-motion" 

// const date = new Date();
// const year = date.getFullYear();


// export default function Footer() {
//   const pathname = usePathname();
//   return (
//     <div className="flex flex-col">

//     <div className="grid grid-cols-1 md:grid-cols-3  border-t-2 border-goldTxt pt-6  md:pt-0">
//       <div className="flex justify-center items-center">
//         <Link
//           className="flex justify-center items-center rounded-md py-2 px-2 focus:shadow-lg hover:bg-gray-700 hover:text-goldTxt border-b border-b-transparent hover:border-b-goldTxt"
//           href="/"
//         >
//           <Image
//             src="/img/logo/blue_square_1.svg"
//             width={100}
//             height={100}
//             alt="footer logo"
//             className="cursor-pointer"
//           />
//         </Link>
//       </div>
    
//     {/* MARK:Pages Links  
//      */}

//      <div className="flex flex-col justify-center items-center py-4 ">
//         <div className="flex justify-center items-center text-white">
//           <div className="grid gap-4 p-4 grid-cols-2 lg:grid-cols-3">
//             {footerLinks.map((link)=> (
//               <Link
//                 key={link.footerLink}
//                 className="flex justify-start py-2 px-2  hover:text-goldTxt"
//                 href={link.footerLink}
//                 >
//                      {link.footerLink === pathname && (
//                   <motion.span
//                     initial={{ y: "-100%" }}
//                     animate={{ y: 0 }}
//                     transition={{ type: "tween" }}
//                     layoutId="underline"
//                     className="absolute left-0 top-full h-[2px] bg-primary w-full mt-1"
//                   />
//                 )}
//                   {link.footerLinkName}
//                 {/* <p className="text-sm font-medium">  </p> */}
//               </Link>
//               ))}
          
//           </div>
//         </div>
//       </div>

//       {/* *********** Contact ******** */}
      
//       <div className="flex flex-col justify-start items-center gap-x-8 mb-4 md:py-10">
//         <div className="text-goldTxt mb-2 md:mb-6">CONTACT US</div>
//         <div className="flex justify-center items-center text-goldTxt">
//           <Link
//             href="https://twitter.com/LucianRosuATC"
//             target="_blank"
//             className="hover:text-orange-500"
//           >
//             <FaXTwitter className="h-8 w-8" />
//           </Link>
//           <a
//             href="mailto:lucian.rosu.atc@gmail.com"
//             target="_blank"
//             className="px-3 hover:text-orange-500"
//           >
//             <TfiEmail className="h-8 w-8" />
//           </a>
//           <Link
//             href="https://www.linkedin.com/in/lucian-rosu-atc/"
//             target="_blank"
//             className="hover:text-orange-500"
//           >
//             <FaLinkedin className="h-8 w-8" />
//           </Link>
//         </div>
//       </div>
//     </div>

//       {/* Date  */}
//       <div className="flex justify-center px-4 text-white pt-3 pb-6">
//         <p className="text-sm md:text-sm"><span className="pr-1">&copy;</span> {`${year} Lucian Dev, All rights reserved.`} </p>
//       </div>
//     </div>
//   );
// }






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

    <div className="grid grid-cols-1 md:grid-cols-3 border-t-2 border-goldTxt pt-6  md:pt-0">
      <div className="flex justify-center items-center border">
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
          {/* MARK: navigation links
           */}
          <div className="grid md:grid-cols-3 justify-center gap-x-8 gap-y-3 items-center border">
            {footerLinks.map((link) => (
              <Link
                className="relative hover:text-orange-500 transition-all text-orange-100"
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

          {/* MARK: social media links 
          */}
       
              <div className="flex flex-col justify-start items-center border mb-4 md:py-10">
            <div className="md:text-xl text-orange-500 mb-2 md:mb-6">CONTACT US</div>

            <Socials MyClassName="text-4xl text-orange-500 hover:text-orange-100 transition-all"/>
          </div>
    </div>

      {/* Date  */}
      <div className="flex justify-center px-4 text-white pt-3 pb-6">
        <p className="text-sm md:text-sm"><span className="pr-1">&copy;</span> {`${year} TMDB-API-Learning, All rights reserved. Developed by Lucian Dev`} </p>
      </div>
    </div>
  );
}