"use client";
import Link from "next/link";
import { PiInstagramLogoThin } from "react-icons/pi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { images } from "@/data";

const LatestPhotos = () => {
  return (
    <div className="bg-[#161616] p-2 rounded-xl mt-3 ">
      <div className=" gap-x-6  flex justify-between  ">
        <div className="flex justify-between items-center w-full p-2">
          <p className="text-white font-Intermedium">Latest Photos</p>
          <Link
            href={"/"}
            className="p-1 px-2 w-fit rounded-full flex items-center gap-x-2 hover:bg-neutral-800 bg-neutral-900 duration-300 transition-all ease-in font-Intermedium text-neutral-300"
          >
            <PiInstagramLogoThin />
            <span className="font-Intermedium">@alexjohnson</span>
          </Link>
        </div>
      </div>

      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <img
                src={image}
                className=" w-full h-72 object-cover rounded-md opacity-20"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default LatestPhotos;
