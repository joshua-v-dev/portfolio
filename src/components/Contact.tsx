export default function Contact() {
  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap">
            <div className="mb-8 w-full px-4 lg:mb-0 lg:w-1/2">
              <div className="max-w-lg">
                <h2 className="font-heading mb-8 text-3xl font-bold leading-tight md:text-4xl md:leading-tight lg:mb-12 lg:text-5xl lg:leading-tight">
                  Lorem ipsum dolor sit amet consectutar domor at elis
                </h2>
                <h3 className="font-heading mb-1 text-2xl font-bold">
                  Address
                </h3>
                <p className="mb-6 text-lg leading-loose text-indigo-500">
                  1686 Geraldine Lane New York, NY 10013
                </p>
                <h3 className="font-heading mb-1 text-2xl font-bold">
                  Contact Us
                </h3>
                <p className="text-lg leading-loose text-indigo-500">
                  hello@wireframes.org
                </p>
                <p className="text-lg leading-loose text-indigo-500">
                  + 7-843-672-431
                </p>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <form action="#">
                <input
                  className="mb-4 w-full rounded border py-3 pl-3"
                  type="text"
                  placeholder="Name"
                ></input>
                <input
                  className="mb-4 w-full rounded border py-3 pl-3"
                  type="email"
                  placeholder="E-mail"
                ></input>
                <textarea
                  className="mb-4 w-full resize-none rounded border p-3"
                  name="message"
                  cols={30}
                  rows={10}
                  placeholder="Your Message..."
                ></textarea>
                <button className="block rounded border border-indigo-500 bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:border-indigo-600 hover:bg-indigo-600">
                  Action
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
