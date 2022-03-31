import Image from "next/image";
import Link from "next/link";

const Recruiter = () =>
{
  return (
    <>
      <section className="overflow-hidden rounded-lg bg-gray-800 py-10 opacity-80 2xl:py-20">
        <div className="container mx-auto px-4">
          <Image
            className="relative  "
            src="https://static.shuffle.dev/uploads/files/d2/d2b9d71d609f28a869486694342af661027ed370/Clean-Work-Place-LinkedIn-Banner-full-stack-1.png"
            alt=""
            width="1500"
            height="350"
          ></Image>

          <div className="mx-auto max-w-2xl space-y-16 text-center">
            <div className="mx-auto">
              <Link passHref href="/cta">
                <button
                  type="button"
                  className="bg-gradient-to-br from-yellow-200 to-orange-600 bg-clip-text py-4 text-2xl font-bold text-transparent brightness-125 lg:text-6xl"
                >
                  Hire Me!
                </button>
              </Link>
            </div>

            <h2 className="font-heading  text-6xl font-bold text-gray-200 2xl:text-7xl">
              I Love Software
            </h2>
            <p className="mx-auto  max-w-xl text-xl text-gray-200">
              I wake up everyday hoping to bring a smile to someones face with a
              product I built.
            </p>
            <div className=" inline-flex items-center border-t border-gray-500 pt-14">
              <Image
                className=" rounded-full "
                src="https://static.shuffle.dev/uploads/files/d2/d2b9d71d609f28a869486694342af661027ed370/Green-Purple-Computing-Technology-Logo-blackback.png"
                alt=""
                width="50"
                height="50"
              ></Image>
              <div className="text-left">
                <h4 className=" text-2xl font-bold text-gray-50">
                  Joshua Vaughn
                </h4>
              </div>
            </div>
            <div className="mx-auto max-w-xl">
              <p className="text-left text-xl text-gray-200">
                Building applications that help increase the quality of life in
                any person that uses the technology is why I get up in the
                morning.
              </p>
              <p className=" text-left text-xl text-gray-200">
                I am trending to contribute my skills as a full stack developer
                to a company that has a similar vision.
              </p>
              <p className=" text-left text-xl text-gray-200">
                There are so many exciting things to say about software
                development. Helping a company is my one of my primary goals as
                a software developer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Recruiter;
