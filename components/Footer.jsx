import React from "react";

function Footer() {
  return (
    <div>
      <div className="flex justify-center flex-col items-center  w-full p-3 mt-6 ">
        <div className="text-neutral-500">
          <span>© {new Date().getFullYear()}</span>
          <span>
            Portfolio by{" "}
            <a
              target="_blank"
              href="https://www.christosuster.me/"
              className="text-neutral-400 hover:text-white"
            >
              Christos Uster Biswas
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
