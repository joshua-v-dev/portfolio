import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const Products = () => {
  return (
    <div className="relative isolate overflow-hidden bg-transparent px-6 py-20 lg:overflow-visible lg:px-0">
      {/* <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-transparent">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div> */}
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:max-w-7xl lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-3xl font-bold leading-7 text-indigo-600 underline">
                Products
              </p>
              <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                These are preset templates to choose from to get you started
                with your new business.
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-100">
                This is the best way to test out your new business idea. We have
                a variety of templates to choose from to get you started.
              </p>
            </div>
          </div>
        </div>
        <div className="p-1 lg:p-12 mx-auto lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="p-5 rounded-xl bg-transparent shadow-xl ring-1 ring-gray-400/10 object-fit"
            src="https://res.cloudinary.com/dpytkhyme/image/upload/v1684360175/Portfolio/1_h3jj3j.png"
            alt=""
            width={1920}
            height={1080}
          />
        </div>
        <div className="lg:max-w-7xl lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-200 lg:max-w-lg">
              <p>
                Every template comes with a free domain name and hosting for 1
                year. SSL certificates are also included.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span className="text-gray-500">
                    <strong className="font-semibold text-gray-400">
                      Extra Features
                    </strong>{" "}
                    Add on extra features to your template.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span className="text-gray-500">
                    <strong className="font-semibold text-gray-400">
                      Security and Backups
                    </strong>{" "}
                    We take security seriously. We also backup your site daily
                    with feature add-on.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span className="text-gray-500">
                    <strong className="font-semibold text-gray-400">
                      Hosting
                    </strong>{" "}
                    We host your site for you. No need to worry about hosting.
                    After 1 year, you can renew your hosting with us or move
                    your site to another host.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                There are many more features to choose from. You can add them on
                at any time.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-600 underline">
                Support and Maintenance
              </h2>
              <p className="mt-6">
                We offer support and maintenance for your site. We can also help
                you with your marketing and SEO.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
