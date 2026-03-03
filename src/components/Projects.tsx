import Head from "next/head";
import Image from "next/image";
import { people } from "~/lib/constants";
import { SimpleLayout } from "../components/SimpleLayout";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Joshua Vaughn</title>
        <meta
          name="description"
          content="Things I've made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="Things I've made trying to put my dent in the universe."
        intro="I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {people.map((project) => (
            <li key={project.name} className="group relative flex flex-col">
              <div className="relative z-10 flex h-48 w-full items-center justify-center overflow-hidden rounded-2xl bg-zinc-800/50 ring-1 ring-zinc-700/50">
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  className="h-32 w-32 object-contain"
                  width={128}
                  height={128}
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                {project.name}
              </h2>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {project.role}
              </p>
              <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {project.bio}
              </p>
            </li>
          ))}
        </ul>
      </SimpleLayout>
    </>
  );
}
