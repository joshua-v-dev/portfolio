import Image from "next/image";

const HomeHero = () => {
  return (
    <section className="z-100 mx-auto flex min-h-screen max-w-md flex-col items-center justify-start overflow-hidden bg-transparent pt-5 lg:max-w-6xl lg:flex-1">
      <div className="py-6 relative mx-auto flex flex-col items-center justify-center">
        <Image
          className="rounded-full object-contain border-4 border-solid animate-neon"
          src="https://res.cloudinary.com/dpytkhyme/image/upload/v1648330190/JV_LOGO_BLUE_NEON_flabe5.png"
          alt=""
          width={150}
          height={150}
        />
      </div>

      <div className=" mx-auto flex flex-col items-center justify-center">
        <h1 className="tracking-tightest shadow-accent-2-500/50 py-5 text-center text-lg font-extrabold text-accent-2 outline-1 brightness-190 md:text-4xl lg:text-5xl xl:text-7xl">
          <span className=" text-6xl font-extrabold tracking-wide lg:text-8xl xl:inline brightness-125 ">
            Joshua Vaughn
          </span>
        </h1>

        <h1 className="text-center tracking-tight ">
          <span className="mx-auto shadow-dark-4xl text-2xl lg:text-3xl font-bold tracking-tight text-accent-1 xl:inline brightness-110 ">
            Software Engineer
          </span>
        </h1>
      </div>
    </section>
  );
};

export default HomeHero;
