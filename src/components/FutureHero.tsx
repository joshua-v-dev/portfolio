import Link from "next/link";

const FutureHero = () => {
  return (
    <div className="-z-50 bg-[url('/images/heroBg6.svg')] lg:max-w-none">
      <div className="relative isolate overflow-hidden ">
        <div className="max-w-7xl mx-auto pb-14 pt-10 sm:pb-12 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-20">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <div className="mt-24 sm:mt-32 lg:mt-16">
                  <span className="inline-flex space-x-6">
                    <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-300 ring-1 ring-inset ring-indigo-600/10">
                      Coming Soon
                    </span>
                  </span>
                </div>
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
                  Unlocking the Future of Web Development with Software
                </h1>
                <p className="z-50 mt-6 text-lg leading-8 text-gray-50">
                  Hey there! I'm on a mission to supercharge web applications
                  using ReactJS and the latest modern practices. As a passionate
                  ReactJS developer, I'm currently working on groundbreaking
                  projects that push the boundaries of what's possible.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/gallery"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    View Gallery
                  </Link>
                  <a
                    href="https://github.com/joshua-v-dev"
                    className="text-sm font-semibold leading-6 text-gray-100 hover:text-gray-200"
                  >
                    View on GitHub <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-transparent shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                      <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                        <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                          <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                            NotificationSetting.jsx
                          </div>
                          <div className="border-r border-gray-600/10 px-4 py-2">
                            App.jsx
                          </div>
                        </div>
                      </div>
                      <div className="px-6 pb-14 pt-6">
                        <div className="mt-4 text-white">
                          <p className="text-base font-semibold">
                            <span className="text-indigo-400">import</span>{" "}
                            NotificationSetting{" "}
                            <span className="text-indigo-400">from</span>{" "}
                            <span className="text-indigo-400">
                              "@components/NotificationSetting"
                            </span>
                            ;
                          </p>
                          <p className="mt-2 text-sm text-gray-300">
                            <span className="text-indigo-400">
                              export default
                            </span>{" "}
                            function App() {"{"}
                          </p>
                          <p className="mt-2 text-sm text-gray-300">
                            <span className="text-indigo-400">return</span>{" "}
                            {"("}
                          </p>
                          <p className="mt-2 text-sm text-gray-300">
                            <span className="text-indigo-400">{"<div>"}</span>
                          </p>
                          <p className="mt-2 text-sm text-gray-300">
                            <span className="text-indigo-400">
                              {"<NotificationSetting />"}
                            </span>
                          </p>
                          <p className="mt-2 text-sm text-gray-300">
                            <span className="text-indigo-400">{"</div>"}</span>
                          </p>
                          <p className="mt-2 text-sm text-gray-300">
                            <span className="text-indigo-400">);</span>
                          </p>
                          <p className="mt-2 text-sm text-gray-300">{"}"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-4 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  );
};

export default FutureHero;
