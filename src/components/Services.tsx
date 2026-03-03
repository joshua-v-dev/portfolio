import { CheckIcon } from "@heroicons/react/20/solid";
import { classNames, tiers } from "~/lib/constants";

const Services = () => {
  // const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <section
      id="main-content"
      className="pb-10 px-5 mx-auto grid max-w-4xl lg:max-w-6xl xl:max-w-none"
    >
      <div className="mx-auto py-3 bg-transparent">
        {/* Pricing section */}
        <div className="max-w-7xl mx-auto bg-transparent ">
          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "border-b-1 relative grid items-center justify-evenly rounded-3xl border-4 border-t-4 border-double border-black border-indigo-600/90 border-t-indigo-600 border-opacity-90 bg-black/30 shadow-md shadow-indigo-600 outline-2 outline-offset-2 outline-black brightness-125 backdrop-blur-sm hover:scale-105 sm:grid-flow-col md:grid-flow-row"
                    : "border-b-1 relative grid items-center justify-evenly rounded-3xl border-4 border-t-4 border-double border-black border-indigo-600/90 border-t-indigo-600 border-opacity-90 bg-black/30  shadow-md shadow-indigo-600 outline-2 outline-offset-2 outline-black brightness-125 backdrop-blur-sm hover:scale-105 sm:grid-flow-col md:grid-flow-row",
                  "rounded-3xl p-8 xl:p-10",
                )}
              >
                <div className="flex items-center justify-between gap-x-4">
                  <h2
                    id={tier.id}
                    className="text-lg font-semibold leading-8 text-white"
                  >
                    {tier.name}
                  </h2>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-6 text-sm leading-6 text-gray-300">
                  {tier.description}
                </p>
                {/* <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-white">
                      {tier.price[frequency ? "monthly" : "yearly"]}
                    </span>
                    <span className="text-sm font-semibold leading-6 text-gray-300">
                      {frequency?.priceSuffix}
                    </span>
                  </p> */}
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? "border-b-1 relative grid items-center justify-evenly rounded-3xl border-4 border-t-4 border-double border-black border-indigo-600/90 border-t-indigo-600 border-opacity-90 bg-black/30 shadow-md shadow-indigo-600 outline-2 outline-offset-2 outline-black brightness-125 backdrop-blur-sm hover:scale-105 sm:grid-flow-col md:grid-flow-row"
                      : "border-b-1 relative grid items-center justify-evenly rounded-3xl border-4 border-t-4 border-double border-black border-indigo-600/90 border-t-indigo-600 border-opacity-90 bg-black/30 shadow-md shadow-indigo-600 outline-2 outline-offset-2 outline-black brightness-125 backdrop-blur-sm hover:scale-105 sm:grid-flow-col md:grid-flow-row",
                    "mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                  )}
                >
                  Buy plan
                </a>
                <ul
                  role="list"
                  className="mt-6 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-white"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
