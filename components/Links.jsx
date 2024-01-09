import { socialMediaIcons } from "@/data";
import Link from "next/link";

function Links() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {socialMediaIcons.map((link, index) => (
        <Link
          href="/"
          key={index}
          className="bg-neutral-900 py-2 px-3 rounded-3xl w-fit flex gap-2 justify-center items-center hover:bg-neutral-800 transition-all ease-in duration-100 "
        >
          {link.icon}
          {link.handle}
        </Link>
      ))}
    </div>
  );
}

export default Links;
