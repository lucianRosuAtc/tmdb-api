// "use client";

// import * as React from "react";
// import Link from "next/link";

// import { cn } from "@/lib/utils";

// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import Image from "next/image";

// export default function NavBar() {
//   return (
//     <div className="flex justify-between lg:justify-center items-center gap-10 h-20 bg-primaryBg sticky top-0 z-50 px-4 lg:px-10 ">
//       <div className="">
//         <Image
//           src="/img/navbar/blue_square_1.svg"
//           alt="TMDB"
//           width={100}
//           height={100}
//           className="md:ml-10 absolute top-4 left-4"
//         />
//       </div>

//       <NavigationMenu className="hidden lg:flex">
//         <NavigationMenuList className=" gap-10">
//           <NavigationMenuItem>
//             <NavigationMenuTrigger>The Movie Data Base</NavigationMenuTrigger>
//             <NavigationMenuContent>
//               <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//                 <li className="row-span-3">
//                   <NavigationMenuLink asChild>
//                     <Link
//                       className="flex h-full w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/80 to-muted p-6 no-underline outline-none focus:shadow-lg
//                       border border-white hover:border-orange-500"
//                       href="/"
//                     >
//                       <div className="mb-2 mt-4 text-lg font-medium">Home</div>
//                       <p className="text-sm leading-tight text-muted-foreground">
//                         My API App: Call API&apos;s from TMDB.
//                       </p>
//                       <p className="text-sm leading-tight text-muted-foreground mt-2">
//                         Install shadcn ui components using CLI
//                       </p>
//                     </Link>
//                   </NavigationMenuLink>
//                 </li>
//                 <ListItem
//                   href="/Movie"
//                   className="border border-white hover:border-orange-500"
//                   title="Movie"
//                 >
//                   Discover new Movies
//                 </ListItem>
//                 <ListItem
//                   href="/MovieOfTheDay"
//                   className="border border-white hover:border-orange-500"
//                   title="Movie Of The Day"
//                 >
//                   Most popular Movies today
//                 </ListItem>
//                 <ListItem
//                   href="/MovieOfTheWeek"
//                   className="border border-white hover:border-orange-500"
//                   title="Movie Of The Week"
//                 >
//                   Most popular this Week
//                 </ListItem>
//               </ul>
//             </NavigationMenuContent>
//           </NavigationMenuItem>

//           <NavigationMenuItem>
//             <NavigationMenuTrigger>The Movie Data Base</NavigationMenuTrigger>
//             <NavigationMenuContent>
//               <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//                 <li className="row-span-3">
//                   <NavigationMenuLink asChild>
//                     <Link
//                       className="flex h-full w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/80 to-muted p-6 no-underline outline-none focus:shadow-lg border border-white hover:border-orange-500"
//                       href="/TV"
//                     >
//                       <div className=" text-lg font-medium"> Tv shows</div>
//                       <p className="text-sm leading-tight text-muted-foreground">
//                         My API App: Call API&apos;s from TMDB.
//                       </p>
//                     </Link>
//                   </NavigationMenuLink>
//                 </li>

//                 <ListItem
//                   href="/TvShowOfTheDay"
//                   className="border border-white hover:border-orange-500"
//                   title="Tv Show Of The Day"
//                 >
//                   Most popular Tv Show today
//                 </ListItem>
//                 <ListItem
//                   href="/TvShowOfTheWeek"
//                   className="border border-white hover:border-orange-500"
//                   title="Tv Show Of The Week"
//                 >
//                   Most popular Tv Show of the week
//                 </ListItem>
//               </ul>
//             </NavigationMenuContent>
//           </NavigationMenuItem>

//           <NavigationMenuItem>
//             <a
//               href="https://developer.themoviedb.org/docs/image-basics"
//               target="_blank"
//               className="bg-white text-black text-sm font-medium p-3 rounded-md"
//             >
//               TMBD Doc
//             </a>
//           </NavigationMenuItem>
//         </NavigationMenuList>
//       </NavigationMenu>

//       {/* Mobile Menu */}

//       <NavigationMenu className="lg:hidden">
//         <NavigationMenuList className="">
//           <NavigationMenuItem>
//             <NavigationMenuTrigger className="ml-40">
//               Menu
//             </NavigationMenuTrigger>

//             <NavigationMenuContent className="min-w-60">
//               <ul className="grid gap-3 p-6">
//                 <ListItem
//                   href="/"
//                   title="Home"
//                   className="border border-white hover:border-orange-500"
//                 ></ListItem>
//                 <ListItem
//                   href="/Movie"
//                   title="Movie"
//                   className="border border-white hover:border-orange-500"
//                 ></ListItem>
//                 <ListItem
//                   href="/MovieOfTheDay"
//                   title="Movie Of The Day"
//                   className="border border-white hover:border-orange-500"
//                 ></ListItem>
//                 <ListItem
//                   href="/MovieOfTheWeek"
//                   title="Movie Of The Week"
//                   className="border border-white hover:border-orange-500"
//                 ></ListItem>
//                 <ListItem
//                   href="/TV"
//                   title="Tv Shows"
//                   className="border border-white hover:border-orange-500"
//                 ></ListItem>
//                 <ListItem
//                   href="/TvShowOfTheDay"
//                   title="Tv Show Of The Day"
//                   className="border border-white hover:border-orange-500"
//                 ></ListItem>
//                 <ListItem
//                   href="/TvShowOfTheWeek"
//                   title="Tv Show Of The Week"
//                   className="border border-white hover:border-orange-500"
//                 ></ListItem>
//               </ul>
//             </NavigationMenuContent>
//           </NavigationMenuItem>
//         </NavigationMenuList>
//       </NavigationMenu>
//     </div>
//   );
// }

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   );
// });
// ListItem.displayName = "ListItem";



"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="flex justify-between lg:justify-center items-center gap-10 h-20 bg-primaryBg sticky top-0 z-50 px-4 lg:px-10 ">
      <div className="">
        <Image
          src="/img/navbar/blue_square_1.svg"
          alt="TMDB"
          width={100}
          height={100}
          className="md:ml-10 absolute top-4 left-4"
        />
      </div>

      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList className=" gap-10">
          <NavigationMenuItem>
            <Link
              href="/"
              className="bg-white text-black text-sm font-medium p-3 rounded-md"
            >
              Movies & Tv
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Movies</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/80 to-muted p-6 no-underline outline-none focus:shadow-lg
                      border border-white hover:border-orange-500"
                      href="/Movie"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Movies
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Discover new Movies
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>

                <ListItem
                  href="/MovieOfTheDay"
                  className="border border-white hover:border-orange-500"
                  title="Movie Of The Day"
                >
                  Most popular Movies today
                </ListItem>
                <ListItem
                  href="/MovieOfTheWeek"
                  className="border border-white hover:border-orange-500"
                  title="Movie Of The Week"
                >
                  Most popular this Week
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>The Movie Data Base</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/80 to-muted p-6 no-underline outline-none focus:shadow-lg border border-white hover:border-orange-500"
                      href="/TV"
                    >
                      <div className=" text-lg font-medium"> Tv shows</div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        My API App: Call API&apos;s from TMDB.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>

                <ListItem
                  href="/TvShowOfTheDay"
                  className="border border-white hover:border-orange-500"
                  title="Tv Show Of The Day"
                >
                  Most popular Tv Show today
                </ListItem>
                <ListItem
                  href="/TvShowOfTheWeek"
                  className="border border-white hover:border-orange-500"
                  title="Tv Show Of The Week"
                >
                  Most popular Tv Show of the week
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <a
              href="https://developer.themoviedb.org/docs/image-basics"
              target="_blank"
              className="bg-white text-black text-sm font-medium p-3 rounded-md"
            >
              TMBD Doc
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Menu */}

      <NavigationMenu className="lg:hidden">
        <NavigationMenuList className="">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="ml-40">
              Menu
            </NavigationMenuTrigger>

            <NavigationMenuContent className="min-w-60">
              <ul className="grid gap-3 p-6">
                <ListItem
                  href="/"
                  title="Home"
                  className="border border-white hover:border-orange-500"
                ></ListItem>
                <ListItem
                  href="/Movie"
                  title="Movie"
                  className="border border-white hover:border-orange-500"
                ></ListItem>
                <ListItem
                  href="/MovieOfTheDay"
                  title="Movie Of The Day"
                  className="border border-white hover:border-orange-500"
                ></ListItem>
                <ListItem
                  href="/MovieOfTheWeek"
                  title="Movie Of The Week"
                  className="border border-white hover:border-orange-500"
                ></ListItem>
                <ListItem
                  href="/TV"
                  title="Tv Shows"
                  className="border border-white hover:border-orange-500"
                ></ListItem>
                <ListItem
                  href="/TvShowOfTheDay"
                  title="Tv Show Of The Day"
                  className="border border-white hover:border-orange-500"
                ></ListItem>
                <ListItem
                  href="/TvShowOfTheWeek"
                  title="Tv Show Of The Week"
                  className="border border-white hover:border-orange-500"
                ></ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
