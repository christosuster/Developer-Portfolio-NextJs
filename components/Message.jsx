import React from "react";

import { usePathname } from "next/navigation";

function Message() {
  const path = usePathname();
  return (
    <div className=" mt-3  bg-[#161616] py-3 px-3 rounded-xl">
      <div className="flex justify-between items-center w-full p-2">
        <p className="text-white font-Intermedium">Leave a Message</p>
      </div>

      <form action="">
        <input
          className="bg-neutral-800 rounded-lg p-2 w-full placeholder:text-neutral-600 mt-2 focus:ring-2 ring-neutral-500 outline-none text-neutral-400 font-Intermedium "
          type="text"
          placeholder="Your name"
          name=""
          id=""
        />
        <input
          className="bg-neutral-800 rounded-lg p-2 w-full placeholder:text-neutral-600 mt-2 focus:ring-2 ring-neutral-500 outline-none text-neutral-400 font-Intermedium "
          type="text"
          placeholder="Your email"
          name=""
          id=""
        />
        <textarea
          className="bg-neutral-800 rounded-lg p-2 w-full placeholder:text-neutral-600 mt-2 focus:ring-2 ring-neutral-500 outline-none text-neutral-400 font-Intermedium "
          rows={5}
          type="text"
          placeholder="Your message"
          name=""
          id=""
        />
        <button className="bg-neutral-800 hover:bg-neutral-700 transition-all p-2 rounded-lg mt-2 w-full text-neutral-200 font-Intermedium">
          Send
        </button>
      </form>
    </div>
  );
}

export default Message;
