import Image from "next/image";
import type { ReactElement } from "react";
import { TimeLineData } from "~/lib/constants";

export default function Timeline() {
  return (
    <div className=" grid gap-x-10 gap-y-10 space-x-7 space-y-7 sm:px-6 sm:py-32 lg:grid-cols-2">
      <div className=" grid space-x-5 space-y-5">
        <h1 className="tracking-loose font-extrabold uppercase leading-loose text-indigo-700  brightness-125 sm:text-4xl lg:text-7xl ">
          Roadmap
        </h1>
        <p className="text-2xl font-medium text-gray-200 brightness-125">
          Technologies I have used so far to build my projects & a little bit
          about my future.
        </p>

        <dl className="max- grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          {TimeLineData.map(
            (TimeLineData, i): ReactElement => (
              <div key={i} className="grid-col grid">
                <div
                  key={TimeLineData.year}
                  className="space-y-5 border-t border-gray-200 p-5"
                >
                  <dt className="text-3xl text-gray-200 underline">
                    {TimeLineData.year}
                  </dt>
                  <dd className="space-y-5 text-2xl text-gray-200">
                    {TimeLineData.text}
                  </dd>
                </div>
              </div>
            ),
          )}
        </dl>
      </div>
      <div className="relative grid grid-cols-2 grid-rows-2 gap-3 sm:gap-6  lg:gap-8">
        <div className="relative h-full  ">
          <Image
            src="https://res.cloudinary.com/dpytkhyme/image/upload/v1649540674/2_wgngqv.png"
            alt="string"
            className="rounded-lg bg-gray-100"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="relative h-full ">
          <Image
            src="https://res.cloudinary.com/dpytkhyme/image/upload/v1648967003/HybridBox_nwqhlx.png"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="relative h-full ">
          <Image
            src="https://res.cloudinary.com/dpytkhyme/image/upload/v1649540792/12_umzgvm.png"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="relative h-full ">
          <Image
            src="https://res.cloudinary.com/dpytkhyme/image/upload/v1649540780/11_miofs2.png"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </div>
  );
}
