import Image from "next/image";
import Link from "next/link";
import type { FunctionComponentElement } from "react";
import { useStaggerReveal } from "~/hooks";
import { topPicks } from "~/lib/constants";

const GlassTopPicks = () => {
  const staggerRef = useStaggerReveal<HTMLDivElement>({
    staggerDelay: 150,
    distance: 40,
  });

  return (
    <section id="main-content" className="z-10000 mx-auto grid max-w-4xl p-3">
      <div className="grid items-center justify-center p-3 ">
        <div className="px-3 bg-transparent backdrop-blur-sm border-indigo-600 shadow-indigo-700">
          <h2 className="shadow-accent-1-5xl p-1 text-5xl font-extrabold tracking-medium text-stone-100 brightness-200 ">
            What brings you here?
          </h2>
          <p className="shadow-accent-2-4xl grid p-2 text-2xl font-bold text-stone-100 brightness-125 tracking-wide ">
            Depending on who you are I&apos;ll show you the content accordingly
            in order to increase your user experience while browsing my
            portfolio.
          </p>
        </div>
      </div>

      <div className="mx-auto grid items-center justify-center p-8">
        <div
          ref={staggerRef}
          className="p-15 mx-auto grid max-w-4xl gap-x-8 gap-y-4 bg-transparent shadow-indigo-600 sm:grid-flow-col lg:grid-cols-3"
        >
          {topPicks.map(
            (topPicks, i): FunctionComponentElement<PageTransitionEvent> => (
              <div
                key={i}
                className="border-b-1 relative grid items-center justify-evenly rounded-3xl border-4 border-t-4 border-double border-black border-indigo-600/90 border-t-indigo-600 border-opacity-90 bg-black/30 p-1 p-4 shadow-md shadow-indigo-600 outline-2 outline-offset-2 outline-black brightness-125 backdrop-blur-sm hover:scale-105 sm:grid-flow-col md:grid-flow-row "
              >
                <Link
                  className="mx-auto h-60 w-60 rounded-lg border-double p-2 outline-8 outline-offset-2	outline-black	brightness-100"
                  href={topPicks.href}
                  passHref
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light "
                >
                  <Image
                    className="border-shadow-2 relative mx-auto grid items-center justify-center rounded-xl border border-indigo-600 border-opacity-90 bg-black/30 object-cover p-8 shadow-indigo-600 outline-2 outline-offset-2 outline-black brightness-125 backdrop-blur-sm"
                    src={topPicks.src}
                    alt={topPicks.imageAlt}
                    width={500}
                    height={500}
                    priority
                  />
                </Link>
                <h5 className="shadow-accent-2-2xl grid justify-center p-1  text-xl font-bold leading-relaxed text-blue-400">
                  {topPicks.name}
                </h5>
                <p className="shadow-accent-4-xl grid justify-center p-1 text-sm font-bold  text-indigo-600">
                  {topPicks.description}
                </p>
                <div className="flex flex-wrap items-center justify-center p-2">
                  <Link
                    href={topPicks.href}
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <div className=" grid items-end justify-end p-2">
                      <button
                        type="button"
                        className="grid grid-flow-col-dense justify-end rounded-3xl border-2 border-t-2
                       border-double border-indigo-600 border-t-indigo-600  border-opacity-90 bg-black/30 px-3 py-2 text-xs font-normal uppercase leading-normal text-gray-200 shadow-md
                      shadow-indigo-600 outline-2 outline-offset-2 outline-black brightness-125 backdrop-blur-sm transition duration-150 ease-in-out hover:bg-indigo-900 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-700 active:shadow-lg"
                      >
                        Learn More
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default GlassTopPicks;
