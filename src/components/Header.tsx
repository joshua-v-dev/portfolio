import Image from "next/image";
import Link from "next/link";

type HeaderProps = {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  description?: string;
};

export const headerData: HeaderProps = {
  title: " Digital Solutions",
  subtitle: "Software Development & Consulting",
  description:
    "Available for freelance engagements and full-time roles.",
};
const Header = () => {
  return (
    <div className="bg-transparent">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-transparent px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              <span className="text-emerald-50"> {headerData.title}</span>
              <br />
              {headerData.subtitle}
            </h2>
            <p className="mt-6 text-xl leading-8 text-green-500">
              {headerData.description}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                href="/contract"
                className="rounded-md bg-emerald-50 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </Link>
            </div>
          </div>
          <div className="relative mt-16 lg:mt-8">
            <Image
              className="absolute left-0 top-0 max-w-none rounded-md bg-white/5 ring-1 ring-white/10 object-cover object-left-top sm:object-center lg:object-left-top"
              src="https://res.cloudinary.com/dpytkhyme/image/upload/v1697772998/Portfolio/freelance-vertical_pepxdr.png"
              alt="App screenshot"
              width={400}
              height={1824}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
