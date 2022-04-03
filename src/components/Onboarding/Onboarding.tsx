// import Image from "next/image";

export default function Onboarding() {
  return (
    <>
      <div className="container mx-auto my-auto grid items-center justify-center space-y-8 px-36">
        <h2 className="  text-6xl font-extrabold tracking-tight text-indigo-600 brightness-125">
          First, What brings you here?
        </h2>
        <p className="grid items-center justify-center  text-3xl font-bold text-gray-700 brightness-200">
          Depending on who you are I&apos;ll show you the content accordingly in
          order to increase your user experience while browsing my portfolio.
        </p>
      </div>
      <div className="my-8 grid items-center sm:justify-center "></div>
    </>
  );
}
