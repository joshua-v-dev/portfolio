import Image from "next/image";

const product = {
  name: "Digital Business Starter Kit",
  version: { name: "1.0", date: "May 13, 2023", datetime: "2023-05-13" },
  price: "$2,200",
  description:
    "Startup Starter Kit is a boilerplate for building SaaS applications, eCommerce sites, and more.",
  highlights: [
    "Digital Design",
    "Custom App/Web Template",
    "Stripe Integration",
  ],
  imageSrc:
    "https://res.cloudinary.com/dpytkhyme/image/upload/v1684393307/Portfolio/Blue_Grey_Modern_Phone_Photo_Collage_wark0k.png",
  imageAlt: "Digital Business Starter Kit",
};

const license = {
  href: "#",
  summary:
    "Apps and services for any type of business or project. Personal and professional use.",
  content: `
    <h4>Overview</h4>
    
    <p> Apps and services for any type of business or project. Personal and professional use.</p>
    
    <ul role="list">
    <li>You're allowed to use your product as legally you see fit.</li>
    <li>Attribution is not required to use the template</li>
    </ul>
    
    <h4>What you can do with it</h4>
    
    <ul role="list">
    <li>Use them freely in your personal and professional work.</li>
    <li> You may transfer ownership</li>
    </ul>
    
    <h4>What you can't do with it</h4>
    
    <ul role="list">
    <li>Don't be greedy.</li>
    <li>Don't be evil. </li>
    </ul>
  `,
};

const ThemeTemplate = () => {
  return (
    <div className="bg-transparent">
      <div className="lg:max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Product */}
        <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
          {/* Product image */}
          <div className="lg:col-span-4 lg:row-end-1">
            <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-transparent">
              <Image
                width={1000}
                height={1200}
                src={product.imageSrc}
                alt={product.imageAlt}
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Product details */}
          <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
            <div className="flex flex-col-reverse">
              <div className="mt-4">
                <h1 className="text-2xl font-bold tracking-tight text-indigo-600 sm:text-3xl">
                  {product.name}
                </h1>

                <h2 id="information-heading" className="sr-only">
                  Product information
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Version {product.version.name} (Updated{" "}
                  <time dateTime={product.version.datetime}>
                    {product.version.date}
                  </time>
                  )
                </p>
              </div>
            </div>

            <p className="mt-6 text-gray-500">{product.description}</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              <button
                type="button"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Pay {product.price}
              </button>
              <button
                type="button"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-50 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Learn More
              </button>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <h3 className="text-sm font-medium text-gray-100">Highlights</h3>
              <div className="prose prose-sm mt-4 text-gray-500">
                <ul role="list">
                  {product.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <h3 className="text-text-gray-200 text-sm font-medium">
                License
              </h3>
              <p className="mt-4 text-sm text-gray-500">
                {license.summary}{" "}
                <a
                  href={license.href}
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Read full license
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeTemplate;
