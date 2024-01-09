import Link from "next/link";
import { BsSpotify } from "react-icons/bs";
import { PiInstagramLogoThin } from "react-icons/pi";
import { Spotify } from "react-spotify-embed";

const LatestPlayed = () => {
  return (
    <div className="bg-[#161616] p-2 rounded-xl mt-3 ">
      <div className=" gap-x-6  flex justify-between ">
        <div className="flex justify-between items-center w-full p-2">
          <p className="text-white font-Intermedium">Latest Played</p>
          <Link
            href={"/"}
            className="p-1 px-2 w-fit rounded-full flex items-center gap-x-2 hover:bg-neutral-800 bg-neutral-900 duration-300 transition-all ease-in font-Intermedium text-neutral-300"
          >
            <BsSpotify />
            <span className="font-Intermedium">@alexjohnson</span>
          </Link>
        </div>
      </div>
      <Spotify
        className="w-full h-20 my-3"
        link="https://open.spotify.com/playlist/37i9dQZF1DX0A8zVl7p82B?si=c2c06a3f57c24b48"
      />
    </div>
  );
};

export default LatestPlayed;
