import Link from "next/link";
import { useScrollReveal } from "~/hooks";

const HomeCta = () => {
  const revealRef = useScrollReveal<HTMLElement>({
    direction: "up",
    duration: 700,
  });

  return (
    <section
      ref={revealRef}
      className="mx-auto flex max-w-4xl items-center justify-center p-3 "
    >
      <div
        className="border-shadow-2 mx-auto grid items-center justify-center rounded-xl border border-indigo-600 border-opacity-90 bg-black/30
                     object-cover p-2 shadow-indigo-600 outline-2
                    outline-offset-2 outline-black brightness-125 backdrop-blur-sm"
      >
        <div className=" rounded-3xl bg-transparent">
          <div className=" p-3 sm:px-6 lg:flex lg:items-center lg:justify-evenly lg:gap-x-10 lg:p-5">
            <div className="flex flex-col items-center justify-center py-3">
              <h2 className="text-5xl font-extrabold tracking-tight text-blue-400 sm:text-4xl">
                <span className="flex">Ready to dive in?</span>
                <span className="flex text-indigo-600">
                  Let&apos;s solve your technology needs
                </span>
              </h2>
            </div>
            <div className="flex lg:flex-shrink-0 lg:gap-x-4">
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="/contract"
                  className="grid grid-flow-col-dense justify-end rounded-3xl border-2 border-t-2
                    border-double border-indigo-600 border-t-indigo-600  border-opacity-90 bg-black/30 px-3 py-2 text-sm
                    font-normal uppercase leading-normal text-gray-200 shadow-md
                   shadow-indigo-600 outline-2 outline-offset-2 outline-black brightness-125 backdrop-blur-sm transition
                   duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg
                   focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCta;
