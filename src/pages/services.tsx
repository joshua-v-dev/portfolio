import Header from "~/components/Header";
import Services from "~/components/Services";
import Technologies from "~/components/Technologies";

const ServicesPage = () => {
  return (
    <div className="-z-1000 bg-[url('/images/heroBg5.svg')] lg:max-w-none">
      <Header />
      <Services />
      <Technologies />
    </div>
  );
};

export default ServicesPage;
