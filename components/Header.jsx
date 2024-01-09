"use client";

import React, { useRef, useState } from "react";
import { shareLinks } from "@/data";

import Link from "next/link";
import {
  PiBellSimple,
  PiPhoneLight,
  PiGlobeSimpleThin,
  PiUploadThin,
} from "react-icons/pi";

import { FcCheckmark } from "react-icons/fc";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { BsCopy } from "react-icons/bs";
import Links from "./Links";

function Header() {
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);

  const onCopy = () => {
    navigator.clipboard.writeText(ref.current.innerText);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="w-full">
      <div className=" h-60 relative  w-full -z-10">
        <Image
          width={1000}
          height={1000}
          className=" h-full w-full object-cover blur-xl absolute opacity-40"
          src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>

      <div className=" w-full flex justify-center z-10 relative -top-9">
        <div className="absolute  p-1 rounded-full bg-[#111111]">
          <Image
            width={800}
            height={800}
            className="w-16 h-16 rounded-full object-cover "
            src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </div>

      <div className="max-w-2xl w-full mx-auto p-3">
        <div className=" pt-14">
          <div>
            <div className="text-center">
              <h3 className="font-Intermedium text-white text-2xl flex justify-center items-center gap-x-2">
                Alex Johnson
                <RiVerifiedBadgeFill className="text-[#B5924F] text-xl" />
              </h3>
              <div className="mt-3 text-neutral-500 flex justify-center gap-x-2 items-center font-Interegular">
                <p>Est. 1999</p>
                <span className="w-[3px] h-[3px]  bg-neutral-600 rounded-full" />
                <p>Paris, FR</p>
                <span className="w-[3px] h-[3px]  bg-neutral-600 rounded-full" />
                <p>He/Him</p>
              </div>
            </div>

            <div>
              <p className="font-Intermedium text-neutral-500 text-center my-3">
                Alex Johnson, a tech enthusiast hailing from Paris, is a dynamic
                full-stack web developer known for seamlessly blending
                creativity with technical expertise.
              </p>

              <div className="flex justify-center gap-x-7">
                <Link
                  href={"https://github.com/Alex/"}
                  className="flex items-center gap-x-2 hover:bg-neutral-900 transition-all ease-in duration-100 p-1 px-2 rounded-xl"
                >
                  <PiGlobeSimpleThin className=" text-xl text-neutral-500" />
                  <p className="text-white font-Intermedium">alexjohnson.dev</p>
                </Link>

                <div className=" items-center gap-x-2  flex  cursor-pointer hover:bg-neutral-900 transition-all ease-in duration-100 p-1 px-2 rounded-xl">
                  <PiPhoneLight className=" text-xl text-neutral-500" />
                  <p className="text-white font-Intermedium"> +33 612345678</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-x-2 my-6">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="">Share</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-neutral-950 border-neutral-800 ">
                  <DialogHeader>
                    <DialogTitle>Share this profile</DialogTitle>
                  </DialogHeader>
                  <div className="flex flex-col gap-2">
                    {shareLinks.map((link, index) => (
                      <div
                        key={index}
                        className="flex cursor-pointer hover:bg-neutral-800/50 p-2 rounded-2xl justify-between items-center"
                      >
                        <div className="flex gap-1 items-center">
                          {link.iconFirst} {link.name}
                        </div>
                        {link.lastIcon}
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>

              <Button onClick={onCopy} className="w-full flex">
                <span ref={ref} className="flex-1">
                  alex.johnson.dev@example.com
                </span>
                {copied ? <FcCheckmark /> : <BsCopy />}
              </Button>
            </div>
          </div>
        </div>
        <Links />
      </div>
    </div>
  );
}

export default Header;
