"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navigationlinks } from "./(link-data)/social-data";
import Socials from "./Socials";




export default function NavBar() {
  const pathname = usePathname();
  return (
    <div className="flex justify-between lg:justify-center items-center gap-10 h-20 bg-primaryBg border-b border-orange-500 shadow-xl sticky top-0 z-50 px-4 lg:px-10 ">
      <div className="">
      <Link
              href="/">
        <Image
          src="/img/logo/blue_square_1.svg"
          alt="TMDB"
          width={100}
          height={100}
          className="md:ml-10 absolute top-4 left-4"
          />
          </Link>
      </div>

      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList className="gap-10">
  
          <NavigationMenuItem className="border-2 border-primary hover:border-orange-500 rounded-lg">
            <NavigationMenuTrigger>Movies</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b from-muted/80 to-muted p-10 no-underline outline-none focus:shadow-lg
                      border border-white hover:border-orange-500"
                      href="/Movies"
                    >
                      <div className="text-lg font-medium">New Movies</div>
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

          {/* MARK: TV SHOWS 
           */}

          <NavigationMenuItem className="border-2 border-primary hover:border-orange-500 rounded-lg">
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

          {/*MARK: Contact
          */}
          <NavigationMenuItem className="border-2 border-primary hover:border-orange-500 rounded-lg">
            <NavigationMenuTrigger>Contact Us</NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <ul className="grid gap-3 p-6 md:w-[200px] lg:w-[500px]  ">
                <div className="flex flex-col justify-start items-center py-2 border border-white bg-slate-100 rounded-md hover:border-orange-500">
                  <div className="text-2xl text-orange-500 md:mb-6">Contact Us</div>
                  <Socials MyClassName="text-4xl text-orange-500 hover:text-primary transition-all"/>
                </div>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/*MARK: Mobile Menu 
      */}

      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger className="mr-4 border">
            <AlignJustify className="cursor-pointer text-white "/>
          </SheetTrigger>
          <SheetContent className="bg-primaryBg w-full">
            <div className="flex flex-col items-center justify-between h-full py-8">
              <div className="flex flex-col items-center justify-between gap-y-10 md:gap-y-20">
                <SheetClose asChild>
                  <Link href="/">
                    <Image
                      src="/img/logo/blue_square_1.svg"
                      alt="TMDB"
                      width={100}
                      height={100}
                      className="md:ml-10 absolute top-4 left-4"
                      priority
                    />
                  </Link>
                </SheetClose>
                <div className="flex flex-col items-center text-2xl gap-y-8">
                  {navigationlinks.map((navlink) => (
                    <SheetClose asChild key={navlink.url}>
                      <Link
                        href={navlink.url}
                        className="relative text-orange-100 hover:text-goldTxt transition-all"
                      >
                        {navlink.url === pathname && (
                          <motion.span
                            initial={{ y: "-100%" }}
                            animate={{ y: 0 }}
                            transition={{ type: "tween" }}
                            layoutId="underline"
                            className="absolute left-0 top-full h-[2px] bg-goldTxt w-full mt-1"
                          />
                        )}
                        {navlink.name}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </div>

              <SheetClose asChild>
              <Socials MyClassName="text-4xl pb-10 text-orange-500 hover:text-orange-100 transition-all"/>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
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
            className,
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
