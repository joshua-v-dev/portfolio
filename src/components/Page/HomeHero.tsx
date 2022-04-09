import HomeOnboarding from "./HomeOnboarding";
import React from "react";
import TailHero from "../Hero/TailHero";

type HeroProps = {
  isMain?: boolean;
};

const HomeHero: React.FC<HeroProps> = () => {
  return (
    <>
      <TailHero />
      <HomeOnboarding />
    </>
  );
};

export default HomeHero;