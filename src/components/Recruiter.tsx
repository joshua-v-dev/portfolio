import {
  BoltIcon,
  CalendarDaysIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const primaryFeatures = [
  {
    name: "Frontend Development Expertise",
    description:
      "Specialized in creating robust and efficient user interfaces with ReactJS, adhering to modern best practices.",
    href: "#",
    icon: BoltIcon, // Assuming you have an icon component for this.
  },
  {
    name: "Collaboration Skills",
    description:
      "Experienced in collaborative environments, ensuring seamless teamwork and efficient communication.",
    href: "#",
    icon: UsersIcon,
  },
  {
    name: "Task Scheduling Proficiency",
    description:
      "Skilled in task scheduling to optimize project timelines and deliver high-quality results.",
    href: "#",
    icon: CalendarDaysIcon,
  },
];

const secondaryFeatures = [
  {
    name: "Deployment Automation",
    description:
      "Expertise in setting up automated deployment pipelines for smooth and efficient application releases.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Security Implementation",
    description:
      "Focused on implementing robust security measures, including SSL certificates and advanced security protocols.",
    icon: LockClosedIcon,
  },
  // Add more relevant features based on your expertise.
];

const stats = [
  { id: 1, name: "Years of ReactJS Experience", value: "5+" },
  { id: 2, name: "Completed Projects", value: "20+" },
  { id: 3, name: "GitHub Contributions", value: "1000+" },
];

const Recruiter = () => {
  return (
    <div className="bg-transparent">
      <main>
        {/* Hero section */}
        <div className="relative isolate overflow-hidden">
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-accent-1/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-accent-2/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
            />
          </svg>
          <div
            className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
            aria-hidden="true"
          >
            <div
              className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-accent-1 to-accent-2 opacity-20"
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
            />
          </div>

          {/* Your hero content for job recruiters */}
          <div className="py-5 relative mx-auto flex flex-col items-center justify-center">
            <Image
              className="rounded-full object-contain border-4 border-solid animate-neon"
              src="https://res.cloudinary.com/dpytkhyme/image/upload/v1648330190/JV_LOGO_BLUE_NEON_flabe5.png"
              alt=""
              width={150}
              height={150}
            />
          </div>
        </div>

        {/* Logo cloud */}
        {/* <div className="max-w-7xl mx-auto mt-8 px-6 sm:mt-16 lg:px-8">
       
          <h2 className="text-center text-lg font-semibold leading-8 text-white">
          Trust your next project to a proven professional.
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
              alt="Statamic"
              width={158}
              height={48}
            />

            </div>
        </div> */}

        {/* Feature section */}
        <div className="max-w-7xl mx-auto mt-2 px-6 sm:mt-6 lg:px-8">
          {/* Feature section highlighting your skills and expertise */}
          <div className="mx-auto mt-6 max-w-2xl sm:mt-20 lg:mt-4 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {primaryFeatures.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-2">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-6 px-6 sm:mt-5 md:mt-4 lg:px-8">
          {" "}
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
            {secondaryFeatures.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-white">
                  <feature.icon
                    className="absolute left-1 top-1 h-5 w-5 text-accent-5"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>{" "}
                <dd className="inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Stats */}
        <div className="max-w-7xl mx-auto mt-3 px-6 sm:mt-6 lg:px-8">
          {/* Stats section showcasing your achievements */}
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col justify-center items-center gap-y-3 border-l border-white/10 pl-6"
              >
                <dt className="text-sm leading-6">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* CTA section */}
        <div className="relative isolate mt-2 px-6 py-3 sm:mt-26 sm:py-4 lg:px-8">
          {/* Call-to-action section for job recruiters */}
          <div className="relative isolate mt-32 px-6 py-32 sm:mt-6 sm:py-20 lg:px-8">
            <svg
              className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="1d4240dd-898f-445f-932d-e2872fd12de3"
                  width={200}
                  height={200}
                  x="50%"
                  y={0}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={0} className="overflow-visible fill-gray-800/20">
                <path
                  d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)"
              />
            </svg>
            <div
              className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
              aria-hidden="true"
            >
              <div
                className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
                style={{
                  clipPath:
                    "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                }}
              />
            </div>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to get started?
                <br />
                <span className="text-accent-1">Let's talk.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                I am currently seeking a new opportunity to join a team of
                talented developers. If you are looking for a dedicated,
                hard-working, and experienced developer, I would love to hear
                from you.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/contract"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Recruiter;
