import Link from "next/link";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { PiArrowSquareOutThin } from "react-icons/pi";
import { projects } from "@/data";

const LatestPlayed = () => {
  return (
    <div className="bg-[#161616] p-2 rounded-xl mt-3 ">
      <div className=" gap-x-6  flex justify-between ">
        <div className="flex justify-between items-center w-full p-2">
          <p className="text-white font-Intermedium">Portfolio</p>
          <Link
            href={"/"}
            className="p-1 px-2 w-fit rounded-full flex items-center gap-x-2 hover:bg-neutral-800 bg-neutral-900 duration-300 transition-all ease-in font-Intermedium text-neutral-300"
          >
            <BsGithub />
            <span className="font-Intermedium">@alexjohnson</span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className=" bg-[#1f1f1f]/50 items-center gap-4 p-3 rounded-xl flex text-center justify-between flex-col md:flex-row"
          >
            <Image
              width={800}
              height={800}
              className="w-10 h-10 hidden md:block rounded-lg object-cover"
              src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="flex-1 text-center">
              <h4 className="font-Interegular text-white text-lg text-center ">
                {project.title}
              </h4>
              <p className="font-Interegular text-sm text-neutral-500 ">
                {project.description}
              </p>

              <div className="flex gap-2 justify-center">
                {project.techUsed.map((tech, index) => (
                  <div
                    key={index}
                    className="uppercase border border-neutral-800 h-7 w-fit px-2 justify-center text-xs font-Interegular items-center rounded-md text-white mt-3 flex"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <button className="text-white flex items-center gap-x-2 h-fit bg-neutral-800 hover:bg-neutral-700 p-2 rounded-lg transition-all">
              <span className="font-Intermedium text-xs ">View</span>
              <PiArrowSquareOutThin />
            </button>
          </div>
        ))}
        {/* <div className=" bg-[#161616] gap-x-6 p-3 rounded-xl mt-8 flex justify-between ">
          <Image
            width={800}
            height={800}
            className="w-10 h-9 rounded-lg object-cover"
            src="/images/f.jpg"
            alt=""
          />
          <div className="flex-1 ">
            <h4 className="font-Interegular text-white text-lg text-center md:text-left">
              Ultra
            </h4>
            <p className="font-Interegular text-sm text-neutral-500 ">
              A high quality Framer portfolio template <br /> designed for
              creatives.
            </p>

            <div className="uppercase border border-neutral-800 h-7 w-fit px-2 justify-center text-xs font-Interegular items-center rounded-md text-white mt-3 flex">
              Store
            </div>
          </div>

          <button className="text-white flex items-center gap-x-2 h-fit bg-neutral-800 p-2 rounded-lg">
            <span className="font-Intermedium text-xs ">View</span>
            <PiArrowSquareOutThin />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default LatestPlayed;
