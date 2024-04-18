
// MARK: NAVIGATION LINKS
export const navigationlinks = [
    { url: "/", name: "All Movies & Tv" },
    { url: "/Movies", name: "New Movies" },
    { url: "/MovieOfTheDay", name: "Movie Of The Day" },
    { url: "/MovieOfTheWeek", name: "Movie Of The Week" },
    { url: "/TV", name: "Tv Shows" },
    { url: "/TvShowOfTheDay", name: "Tv Show Of The Day" },
    { url: "/TvShowOfTheWeek", name: "Tv Show Of The Week" },
];




// MARK: SOCIAL DATA
import { RiLinkedinFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";

export const social = [
    {
        url: "mailto:lucian.rosu.atc@gmail.com",
        name: <TfiEmail />,
    },
    {
        url: "https://www.linkedin.com/feed/?trk=nav_back_to_linkedin",
        name: <RiLinkedinFill />,
    },
    {
        url: "https://twitter.com/LucianRosuATC",
        name: <FaXTwitter />,
    },
];
