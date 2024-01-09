import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";

const LatestPost = () => {
  return (
    <div className="bg-[#161616] p-2 rounded-xl mt-3 ">
      <div className=" gap-x-6  flex justify-between ">
        <div className="flex justify-between items-center w-full p-2">
          <p className="text-white font-Intermedium">Latest Post</p>
          <Link
            href={"/"}
            className="p-1 px-2 w-fit rounded-full flex items-center gap-x-3 hover:bg-neutral-800 bg-neutral-900 duration-300 transition-all ease-in font-Intermedium text-neutral-300"
          >
            <BsTwitterX />
            <span>@alexjohnson</span>
          </Link>
        </div>
      </div>

      <div className="bg-[#1C1C1C] p-3 rounded-2xl mt-3 ">
        <div className="flex gap-x-4">
          <Image
            width={800}
            height={800}
            className="w-11 h-11 rounded-full"
            src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />

          <div>
            <div className="flex items-center gap-x-2 ">
              <p className="font-Intermedium text-base text-white">
                Alex Johnson
              </p>
              <RiVerifiedBadgeFill className="text-[#26a8ff] text-xl" />
            </div>

            <div className="flex gap-x-2 items-center font-Interegular">
              <span className="text-neutral-400">@Alex</span>
              <span className="w-[3px] h-[3px]  bg-neutral-600 rounded-full" />
              <button className="text-blue-600 font-Intermedium text-sm">
                Follow
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <h3 className="text-base text-white my-3">
            Propting in AI = The new writing
          </h3>
          <div className="flex items-center gap-x-2 font-Intermedium text-neutral-400 text-sm">
            <p className="">10:39 PM </p>
            <span className="w-[3px] h-[3px]  bg-neutral-600 rounded-full" />
            <p>Jul 23, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
