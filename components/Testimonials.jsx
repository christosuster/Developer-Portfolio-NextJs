"use client";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data";

function Testimonials() {
  return (
    <div className="bg-[#161616] p-2 rounded-xl mt-3 ">
      <div className="flex w-full p-2">
        <p className="text-white text-left font-Intermedium">Testimonials</p>
      </div>

      <Carousel
        plugins={[
          Autoplay({
            delay: 8000,
            stopOnMouseEnter: true,
          }),
        ]}
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem className="" key={index}>
              <div className="flex flex-col  gap-3 p-3">
                <div className="flex items-center gap-2">
                  <Image
                    width={900}
                    height={900}
                    className="w-12 h-12 rounded-lg object-cover"
                    src={testimonial.photo}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <h4 className="font-Interegular text-white text-lg  ">
                      {testimonial.name}
                    </h4>
                    <p className="font-Interegular text-sm text-neutral-500 ">
                      {testimonial.position}
                    </p>
                    <p className="font-Interegular leading-3 text-sm text-neutral-500 ">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                <p className="font-Interegular text-neutral-500 ">
                  {testimonial.message}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-top-5 right-10 left-auto text-white border-none bg-transparent" />
        <CarouselNext className="-top-5 text-white border-none bg-transparent" />
      </Carousel>
    </div>
  );
}

export default Testimonials;
