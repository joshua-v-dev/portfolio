import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const Products = () => {
  return (
    <div className="relative isolate overflow-hidden bg-transparent px-6 py-10 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:max-w-7xl lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="py-1 lg:flex lg:max-w-lg lg:flex-col lg:items-center lg:justify-center">
            <div className="relative w-full ">
              <p className="py-2 text-3xl font-bold leading-7 text-indigo-600 underline brightness-100">
                Templates & Themes
              </p>

              <h1 className="text-lg font-medium leading-7  tracking-tight text-gray-300 ">
                The quickest way to get started with your new business idea.
              </h1>
              <p className="font-base text-md leading-7 text-gray-200">
                I have a range of templates and themes to choose from.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto p-1 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden lg:p-3">
          <Image
            className="object-fit rounded-xl bg-transparent p-5 shadow-xl ring-1 ring-gray-500/10"
            src="https://res.cloudinary.com/dpytkhyme/image/upload/v1684392828/Portfolio/Purple_App_Phone_Mockup_Sales_Marketing_Presentation_cpdlep.png"
            alt=""
            width={1080}
            height={1920}
          />
        </div>
        <div className="lg:max-w-7xl lg:col-span-3 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:grid-cols-2 lg:gap-x-8 lg:px-9">
          <div className="lg:pr-4">
            <div className="text-semibold max-w-xl leading-7 text-gray-400 lg:max-w-lg">
              <p>
                Every template comes with a free domain name and hosting for 1
                year. SSL certificates are also included.
              </p>
              <ul role="list" className="space-y-8 pt-6 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    className="h-5 w-5 flex-none pt-1 text-indigo-600 brightness-125"
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
                    className="h-5 w-5 flex-none pt-1 text-indigo-600 brightness-125"
                    aria-hidden="true"
                  />
                  <span className="text-gray-500">
                    <strong className="font-semibold text-gray-400">
                      Security and Backups
                    </strong>{" "}
                    I take security seriously. I also backup your site daily
                    with feature add-on.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="h-5 w-5 flex-none pt-1 text-indigo-600 brightness-125"
                    aria-hidden="true"
                  />
                  <span className="text-gray-500">
                    <strong className="font-semibold text-gray-400">
                      Hosting
                    </strong>{" "}
                    I host your site for you. No need to worry about hosting.
                    After 1 year, you can renew your hosting with me or move
                    your site to another host.
                  </span>
                </li>
              </ul>
              <p className="pt-8">
                There are many more features to choose from. You can add them on
                at any time.
              </p>
              <h2 className="pt-16 text-2xl font-bold tracking-tight text-indigo-600 underline">
                Support and Maintenance
              </h2>
              <p className="pt-6">
                I offer support and maintenance for your site. I can also help
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
