import { useStaggerReveal } from "~/hooks";
import { features } from "~/lib/constants";

export default function Technologies() {
  const staggerRef = useStaggerReveal<HTMLDListElement>({
    staggerDelay: 100,
    distance: 25,
  });

  return (
    <div className="mx-auto grid  grid-flow-row bg-transparent">
      <div className="mx-auto   sm:px-4 ">
        <div className=" relative space-y-4 lg:text-center">
          <h1 className=" text-6xl font-extrabold uppercase tracking-wide text-indigo-700 brightness-125">
            Technologies
          </h1>
          <p className=" font-bold tracking-tight text-gray-50 sm:text-3xl lg:mx-auto">
            A better way to Full Stack
          </p>
          <p className="  text-xl font-normal text-gray-50 lg:mx-auto">
            Cross platform, cross browser, cross device. No more headaches. Just
            focus on building your app.
          </p>

          <div className="grid grid-flow-row ">
            <dl
              ref={staggerRef}
              className=" grid grid-cols-2  gap-x-8 gap-y-8  "
            >
              {features.map((feature) => (
                <div key={feature.id} className="relative  ">
                  <dt>
                    <div className="mx-auto grid h-10 w-10 items-center justify-center rounded-md bg-indigo-600 text-gray-50">
                      <feature.icon aria-hidden="true" />
                    </div>
                    <p className="p-1 text-3xl font-extrabold text-indigo-600 brightness-125">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="p-1 text-2xl text-gray-200">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
