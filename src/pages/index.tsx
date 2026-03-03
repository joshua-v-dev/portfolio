import type React from "react";
import GlassTopPicks from "~/components/GlassTopPicks";
import HomeCta from "~/components/HomeCta";
import HomeHero from "~/components/HomeHero";

const Home: React.FC = () => {
  return (
    <div className="-z-100 bg-no-repeat bg-cover bg-[url('/images/heroBg2.svg')] lg:max-w-none">
      <HomeHero />
      <GlassTopPicks />
      <HomeCta />
    </div>
  );
};
export default Home;
