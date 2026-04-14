import Image from "next/image";

const About = () => {
  return (
    <main className="space-y-24 px-6 py-12 md:px-12 lg:px-20">
      <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="space-y-6 max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-800">
            Greenery Ecommerce · Sustainable Living · Bomboo Speciality
          </span>
          <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Welcome to Bomboo World
          </h1>
          <p className="text-gray-600 leading-8">
            Bomboo World brings the calm of nature to every home with handcrafted plant care essentials, eco-friendly products, and a greener shopping experience made for modern living.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-green-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Nature-first quality</h2>
              <p className="mt-2 text-sm text-gray-600">
                Curated botanical products designed to support healthy, sustainable green spaces indoors and out.
              </p>
            </div>
            <div className="rounded-3xl border border-green-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Ethical by design</h2>
              <p className="mt-2 text-sm text-gray-600">
                From biodegradable materials to reusable packaging, we help you shop with a lighter footprint.
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-emerald-50 shadow-lg">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.18),_transparent_45%)]" />
          <div className="relative grid gap-4 p-6 sm:p-8 lg:p-10">
            <Image
              src="/images/ProductsImage/Cup.jpg"
              alt="Green plant lifestyle product"
              width={700}
              height={520}
              className="rounded-3xl object-cover shadow-xl"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <Image
                src="/images/ProductsImage/BrushWithStand.jpg"
                alt="Eco-friendly bamboo brush"
                width={340}
                height={260}
                className="rounded-3xl object-cover"
              />
              <Image
                src="/images/ProductsImage/CombWithCover.jpg"
                alt="Sustainable grooming essentials"
                width={340}
                height={260}
                className="rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-green-100 bg-white p-8 shadow-sm md:p-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.24em] text-green-600">Why Choose Us</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Crafted for a greener lifestyle, built on trust.
            </h2>
            <p className="mt-4 max-w-xl text-gray-600 leading-8">
              At Bomboo, we blend eco-conscious design, premium plant care, and everyday convenience into every product. Our collections are made for customers who want beauty, function, and sustainability in one place.
            </p>
          </div>
          <div className="inline-flex rounded-full bg-green-50 px-5 py-3 text-sm font-semibold text-green-800 shadow-sm">
            100% green care with every order
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-3xl border border-green-100 bg-emerald-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Sustainable Sourcing</h3>
            <p className="mt-3 text-sm text-gray-600">
              We source natural, biodegradable materials and partner with trusted growers for a cleaner supply chain.
            </p>
          </article>
          <article className="rounded-3xl border border-green-100 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">Care for Every Space</h3>
            <p className="mt-3 text-sm text-gray-600">
              From living room greens to desk accessories, our products bring calm and refreshing energy to every room.
            </p>
          </article>
          <article className="rounded-3xl border border-green-100 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">Beautifully Designed</h3>
            <p className="mt-3 text-sm text-gray-600">
              Thoughtful shapes, gentle textures, and modern aesthetics make our range perfect for gifting or daily use.
            </p>
          </article>
          <article className="rounded-3xl border border-green-100 bg-emerald-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Trusted Support</h3>
            <p className="mt-3 text-sm text-gray-600">
              Friendly customer care, easy ordering, and fast delivery help you stay inspired without any hassle.
            </p>
          </article>
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.24em] text-green-600">Benefits of Bomboo Products</p>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Green products that feel as good as they look.
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Eco Conscious Materials</h3>
              <p className="mt-3 text-sm text-gray-600">
                Every Bomboo item is chosen for its biodegradable, recyclable, or reusable qualities.
              </p>
            </div>
            <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Healthier Living</h3>
              <p className="mt-3 text-sm text-gray-600">
                Our plant-friendly tools and containers help nurture indoor greenery and cleaner air.
              </p>
            </div>
            <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Low Waste Packaging</h3>
              <p className="mt-3 text-sm text-gray-600">
                We minimize plastic and ship in recyclable or compostable packaging wherever possible.
              </p>
            </div>
            <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Long-lasting Use</h3>
              <p className="mt-3 text-sm text-gray-600">
                Durable craftsmanship ensures your Bomboo purchase stays beautiful and useful season after season.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 rounded-[2rem] bg-gradient-to-b from-emerald-100 via-white to-emerald-50 p-6 shadow-lg">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] overflow-hidden bg-white shadow-sm">
              <Image
                src="/images/ProductsImage/RazorWithStand.jpg"
                alt="Green grooming product"
                width={520}
                height={360}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="rounded-[1.5rem] overflow-hidden bg-white shadow-sm">
              <Image
                src="/images/ProductsImage/TwoSpoonse.jpg"
                alt="Eco home products"
                width={520}
                height={360}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-green-200 bg-white p-6 text-sm text-gray-700">
            <p className="font-semibold text-slate-900">Bomboo's plant-powered promise</p>
            <p className="mt-3">
              Every product is selected with care, supporting a lifestyle that values green habits, mindful design, and products you can trust.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
