"use client";

import * as React from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

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
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebookSquare } from "react-icons/fa";

export default function NavBar() {
  return (
    <div className="flex justify-between lg:justify-center items-center gap-10 h-20 bg-primaryBg sticky top-0 z-50 px-4 lg:px-10 ">
      <div className="">
        <Image
          src="/img/logo/blue_square_1.svg"
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
                      className="flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b from-muted/80 to-muted p-10 no-underline outline-none focus:shadow-lg
                      border border-white hover:border-orange-500"
                      href="/Movie"
                    >
                      <div className="text-lg font-medium">Movies</div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Discover new Movies
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>

                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex py-2 pl-6 select-none flex-col justify-center mx-a rounded-md hover:bg-gradient-to-b hover:from-muted/80 hover:to-muted  no-underline outline-none focus:shadow-lg
                      border border-white hover:border-orange-500"
                      href="/MovieOfTheDay"
                    >
                      <div className="text-lg font-medium">
                        Movie Of The Day
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Most popular Movies today
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>

                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex py-2 pl-6 select-none flex-col justify-center mx-a rounded-md hover:bg-gradient-to-b hover:from-muted/80 hover:to-muted  no-underline outline-none focus:shadow-lg
                      border border-white hover:border-orange-500"
                      href="/MovieOfTheWeek"
                    >
                      <div className="text-lg font-medium">
                        Movie Of The Week
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Most popular this Week
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* //////////  TV SHOWS  ////////// */}

          <NavigationMenuItem>
            <NavigationMenuTrigger>Tv Shows</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b from-muted/80 to-muted p-10 no-underline outline-none focus:shadow-lg
                      border border-white hover:border-orange-500"
                      href="/TV"
                    >
                      <div className=" text-lg font-medium"> Tv shows</div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Discover new Tv Shows.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>

                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex py-2 pl-6 select-none flex-col justify-center mx-a rounded-md hover:bg-gradient-to-b hover:from-muted/80 hover:to-muted  no-underline outline-none focus:shadow-lg
                      border border-white hover:border-orange-500"
                      href="/TvShowOfTheDay"
                    >
                      <div className="text-lg font-medium">
                        Tv Show Of The Day
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Most popular Tv Show today
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>

                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex py-2 pl-6 select-none flex-col justify-center mx-a rounded-md hover:bg-gradient-to-b hover:from-muted/80 hover:to-muted  no-underline outline-none focus:shadow-lg
                      border border-white hover:border-orange-500"
                      href="/TvShowOfTheWeek"
                    >
                      <div className="text-lg font-medium">
                        Tv Show Of The Week
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Most popular Tv Show of the week
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Contact  */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Contact Us</NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <ul className="grid gap-3 p-6 md:w-[200px] lg:w-[500px]  ">
                <div className="flex flex-col justify-start items-center py-2 border border-white bg-slate-100 rounded-md hover:border-orange-500">
                  <div className="text-goldTxt md:mb-6">Contact Us</div>
                  <div className="flex  justify-center items-center text-goldTxt">
                    <Link
                      href="https://twitter.com/LucianRosuATC"
                      target="_blank"
                      className="p-3 hover:text-orange-500 flex select-none flex-col justify-center rounded-md hover:bg-gradient-to-b hover:from-muted/80 hover:to-muted no-underline outline-none focus:shadow-lg
                      border border-slate-100 hover:border-orange-500"
                    >
                      <FaXTwitter className="h-10 w-10" />
                    </Link>
                    <a
                      href="mailto:lucian.atc@gmail.com"
                      target="_blank"
                      className="p-3 mx-5 hover:text-orange-500 flex select-none flex-col justify-center rounded-md hover:bg-gradient-to-b hover:from-muted/80 hover:to-muted no-underline outline-none focus:shadow-lg
                      border border-slate-100 hover:border-orange-500"
                    >
                      <TfiEmail className="h-10 w-10" />
                    </a>
                    <Link
                      href="https://www.linkedin.com/in/lucian-rosu-atc//"
                      target="_blank"
                      className="p-3  hover:text-orange-500 flex select-none flex-col justify-center rounded-md hover:bg-gradient-to-b hover:from-muted/80 hover:to-muted no-underline outline-none focus:shadow-lg
                      border border-slate-100 hover:border-orange-500"
                    >
                      <FaLinkedin className="h-10 w-10" />
                    </Link>
                  </div>
                </div>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Menu */}

      <NavigationMenu className="lg:hidden">
        <NavigationMenuList className="w-full">
          <NavigationMenuItem className="flex justify-center items-center">
            <NavigationMenuTrigger className="ml-40 flex justify-center items-center">
              <GiHamburgerMenu />
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/80 to-muted py-2 px-2 no-underline outline-none focus:shadow-lg
                      border border-white hover:border-orange-500"
                      href="/"
                    >
                      <p className=" text-lg font-medium">Home</p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex py-2 px-2 h-full w-full select-none flex-col justify-center rounded-md hover:bg-gradient-to-b hover:from-muted/80 hover:to-muted  no-underline outline-none focus:shadow-lg
                      border border-white hover:border-orange-500"
                      href="/Movie"
                    >
                      <p className="text-sm font-medium">Movie</p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex py-2 px-2 h-full w-full select-none flex-col justify-center rounded-md hover:bg-gradient-to-b hover:from-muted/80 hover:to-muted  no-underline outline-none focus:shadow-lg
                      border border-white hover:border-orange-500"
                      href="/MovieOfTheDay"
                    >
                      <p className="text-sm font-medium text-muted-foreground">
                        Movie Of The Day
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex py-2 px-2 h-full w-full select-none flex-col justify-center rounded-md hover:bg-gradient-to-b hover:from-muted/80 hover:to-muted  no-underline outline-none focus:shadow-lg
                      border border-white hover:border-orange-500"
                      href="/MovieOfTheWeek"
                    >
                      <p className="text-sm font-medium text-muted-foreground">
                        Movie Of The Week
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex py-2 px-2 h-full w-full select-none flex-col justify-center rounded-md hover:bg-gradient-to-b hover:from-muted/80 hover:to-muted  no-underline outline-none focus:shadow-lg
                      border border-white hover:border-orange-500"
                      href="/TV"
                    >
                      <p className="text-sm font-medium">Tv Shows</p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex py-2 px-2 h-full w-full select-none flex-col justify-center rounded-md hover:bg-gradient-to-b hover:from-muted/80 hover:to-muted  no-underline outline-none focus:shadow-lg
                      border border-white hover:border-orange-500"
                      href="/TvShowOfTheDay"
                    >
                      <p className="text-sm font-medium text-muted-foreground">
                        Tv Show Of The Day
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex py-2 px-2 h-full w-full select-none flex-col justify-center rounded-md hover:bg-gradient-to-b hover:from-muted/80 hover:to-muted  no-underline outline-none focus:shadow-lg
                      border border-white hover:border-orange-500"
                      href="/TvShowOfTheWeek"
                    >
                      <p className="text-sm font-medium text-muted-foreground">
                        Tv Show Of The Week
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>

                <li>
                  <NavigationMenuItem>
                    <div
                      className="flex py-2 px-2 h-full w-full select-none flex-col justify-center rounded-md hover:bg-gradient-to-b hover:from-muted/80 hover:to-muted  no-underline outline-none focus:shadow-lg
                    border border-white hover:border-orange-500"
                    >
                      <div className="">
                        <div className="text-goldTxt">CONTACT US</div>
                        <div className="flex justify-start items-center text-goldTxt">
                          <Link
                            href="https://twitter.com/LucianRosuATC"
                            target="_blank"
                            className="p-2 h-8 hover:text-orange-500"
                          >
                            <FaXTwitter />
                          </Link>
                          <a
                            href="mailto:lucian.rosu.atc@gmail.com"
                            target="_blank"
                            className="p-2 h-8 hover:text-orange-500"
                          >
                            <TfiEmail />
                          </a>
                          <Link
                            href="https://www.linkedin.com/in/lucian-rosu-atc/"
                            target="_blank"
                            className="p-2 h-8 hover:text-orange-500"
                          >
                            <FaLinkedin />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuItem>
                </li>
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
