import Image from "next/image";
import { people } from "~/lib/constants";

const Collections = () => {
  return (
    <div className="bg-transparent py-24 md:py-32 lg:py-20">
      <div className="z-100 max-w-7xl mx-auto grid grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            I am a software engineer with a passion for building products that
            make a difference. I have experience in full-stack development,
            building scalable web applications, and creating intuitive user
            interfaces.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 lg:grid-cols-3 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <Image
                className="aspect-[3/2] w-full rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
                width={300}
                height={300}
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-300">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-gray-200">{person.role}</p>
              <p className="mt-4 text-base leading-7 text-gray-200">
                {person.bio}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Collections;
