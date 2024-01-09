import Image from "next/image";
import Link from "next/link";
import { TbBrandYoutubeFilled } from "react-icons/tb";

const LatestVideo = () => {
  return (
    <div className="bg-[#161616] p-2 rounded-xl mt-3  ">
      <div className=" gap-x-6  flex justify-between  ">
        <div className="flex justify-between items-center w-full p-2">
          <p className="text-white font-Intermedium">Latest Video</p>
          <Link
            href={"/"}
            className="p-1 px-2 w-fit rounded-full flex items-center gap-x-2 hover:bg-neutral-800 bg-neutral-900 duration-300 transition-all ease-in font-Intermedium text-neutral-300"
          >
            <TbBrandYoutubeFilled className="text-red-600" />
            <span>@alexjohnson</span>
          </Link>
        </div>
      </div>

      <div className="  mt-3  h-56 w-full">
        <Image
          width={800}
          height={800}
          className="h-full w-full object-cover rounded-2xl"
          src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
};

export default LatestVideo;
