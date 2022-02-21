//tailwind card with image and ripple effect
import React from "react";
import Image from "next/image";

const topCallouts = [
  {
    id: 1,
    name: "PORTFOLIO",
    description: "React, Tailwind CSS, and Next.js",
    imageSrc:
      "https://res.cloudinary.com/dpytkhyme/image/upload/v1643954107/joshua_vaughn_o8nklp.svg",

    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
];

const Projects = () => (
  <>
    <h2 className="mt-36 flex items-center justify-center text-6xl font-extrabold tracking-tight text-white">
      Top Picks
    </h2>

    <div className=" m-12 flex items-center justify-around p-2">
      <div className="max-w-lg rounded-lg  shadow-lg">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <div className="relative h-full w-full">
            <Image
              className=" rounded-t-lg"
              src="https://res.cloudinary.com/dpytkhyme/image/upload/v1645436154/something_backblk_utxei6.png"
              alt=""
              layout="fill"
            ></Image>
          </div>
        </a>

        <div className="p-6">
          <h5 className="mb-4 text-xl font-medium text-white">
            something for everyone
          </h5>
          <p className="mb-8 text-base text-white">
            Multiplayer online game with a twist.
          </p>
          <button
            type="button"
            className=" inline-block rounded bg-indigo-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
          >
            Learn More
          </button>
        </div>
      </div>
      {topCallouts.map((topCallouts) => (
        <div
          key={topCallouts.id}
          className="flex max-w-sm flex-col justify-around rounded-lg  shadow-lg"
        >
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <div className="relative h-full w-full">
              <Image
                className="rounded-t-lg"
                src={topCallouts.imageSrc}
                alt=""
                layout="fill"
              ></Image>
            </div>
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium text-white">
              This portfolio website
            </h5>
            <p className="mb-4 text-base text-white">
              Built for scalability, performance, and accessibility. Not just
              any portfolio!
            </p>
            <button
              type="button"
              className=" inline-block rounded bg-indigo-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      ))}
      <div className="  flex justify-around p-2">
        <div className="max-w-sm rounded-lg bg-black shadow-lg">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light ">
            <div className="relative h-full w-full">
              <Image
                className=" rounded-t-lg"
                src="https://res.cloudinary.com/dpytkhyme/image/upload/v1643976704/shopify_lvz0ui.png"
                alt=""
                layout="fill"
              ></Image>
            </div>
          </a>

          <div className="p-6">
            <h5 className="mb-4 text-xl font-medium text-white">
              E-Commerce with Shopify
            </h5>
            <p className="mb-8 text-base text-white">
              Custom stores, themes and apps!
            </p>
            <button
              type="button"
              className=" inline-block rounded bg-indigo-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
);
export default Projects;
