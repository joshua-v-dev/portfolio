/* eslint-disable @next/next/no-html-link-for-pages */
// import Link from 'next/link';
import React from "react";

export default function TailNav ()
{
  return (
    <>
      <section className=" bg-transparent py-8 px-4 lg:px-10 ">
        <nav className="relative flex items-center justify-between ">
          <div className="hidden lg:flex">
            <a
              className=" rounded-full border border-indigo-900 px-8 py-2 font-bold brightness-200  text-blue-900  shadow-green-500/50 hover:brightness-200 hover:text-gray-200 hover:border-gray-300 lg:flex"
              href="#"
            >
              Want To Play A Game?
            </a>
          </div>
          <div className="hidden lg:absolute lg:top-1/2 lg:left-1/2 lg:block lg:-translate-y-1/2 lg:-translate-x-1/2 lg:transform">
            <ul className="flex items-center space-x-10 text-grey-500 brightness-125">
              <li>
                <a className="text-lg font-bold text-gray-500 brightness-125 hover:brightness-200" href="/gallery">
                  Home
                </a>
              </li>
              <li>
                <a className="text-lg font-bold text-gray-500 brightness-125 hover:brightness-200" href="/gallery">
                  Gallery
                </a>
              </li>
              <span>
                <svg
                  width="5"
                  height="5"
                  viewBox="0 0 5 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#5a67d8"></circle>
                </svg>
              </span>
              <li>
                <a className=" hover:brightness-200 text-lg font-bold text-gray-500 brightness-125 hover:text-brightness-200" href="/services">
                  Services
                </a>
              </li>
              <span>
                <svg
                  width="5"
                  height="5"
                  viewBox="0 0 5 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#5a67d8"></circle>
                </svg>
              </span>
              <li>
                <a className=" hover:brightness-200 text-lg font-bold text-gray-500 brightness-125 hover:text-brightness-200" href="/story">
                  Story
                </a>
              </li>
              <span>
                <svg
                  width="5"
                  height="5"
                  viewBox="0 0 5 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#5a67d8"></circle>
                </svg>
              </span>
              <li>
                <a className="hover:brightness-200 text-lg font-bold text-gray-500 brightness-125 hover:text-brightness-200" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className=" flex items-center justify-center space-x-6  ">
            <div>
              <a href="https://github.com/joshua-v-dev">
                <svg
                  stroke="currentColor"
                  className="h-12 w-12 rounded-full bg-indigo-600 hover:bg-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/joshua-vaughn/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-2x1  transition-colors hover:text-white dark:hover:text-indigo-600"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  className="h-12 w-12 rounded-xl bg-indigo-600 p-1"
                  viewBox="0 0 450 510"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
