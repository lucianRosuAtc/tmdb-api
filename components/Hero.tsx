import Image from "next/image";

 interface HeroImage {
  heroImage:string,
  heroTitle: string,
  heroAlt:string,
 }

export default function Hero({heroImage, heroAlt, heroTitle }: HeroImage) {
  return (
    <div className="flex items-center justify-center relative pb-10 px-4 mt-4 md:mt-8">
    <Image
      src={`${heroImage}`}
      alt={`${heroAlt}`}
      width={1280}
      height={600}
      className="rounded-lg border border-orange-500 max-h-[600px] object-cover"
    />

    <h1 className="flex justify-center my-10 text-2xl font-semibold shadow-black md:text-7xl lg:text-8xl text-white absolute">
     {`${heroTitle}`}
    </h1>
  </div>
  )
}
