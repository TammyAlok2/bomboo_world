import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 mb-[2rem]">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Image */}
          <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
          <Image
  src="/images/AboutUs/AboutUs.png"
  alt="About us"
  className="object-cover"
  width={700} // Set an appropriate width
  height={500} // Set an appropriate height
  priority={true} // Optional: Use priority if this image is above the fold
/>
          </div>

          {/* Right Side - Content */}
          <div className="text-center lg:text-left w-full lg:w-1/2">
            <h3 className="text-primary font-semibold text-lg uppercase max-[446px]:text-3xl">
              About Us
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mt-4 max-[446px]:text-lg">
              Small Steps Today For Greener Tomorrow
            </h2>
            <p className="text-gray-600 mt-6 leading-relaxed text-justify">
              We believe in building trust, fostering long-term relationships,
              and delivering results that exceed expectations. With a commitment
              to sustainability and excellence, we bring a customer-first
              approach to everything we do, ensuring that your success is at the
              heart of our efforts.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed text-justify">
              At Bomboo World, we are dedicated to redefining excellence in
              every project we undertake. As an innovative and forward-thinking
              company, we specialize in delivering tailored solutions that
              empower businesses and individuals alike. Our mission is simple
              yet impactful: to blend creativity, reliability, and cutting-edge
              technology to create solutions that resonate with your goals.
            </p>
            <button className="mt-6 px-6 py-3 text-white bg-primary rounded-lg shadow hover:bg-green-600 transition">
              Learn More →
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-[8rem] mb-[2rem] text-center">
          <div>
            <Image
              src={"/images/AboutUs/EcoFriendly.png"}
              alt="Ecofriendly"
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <h4 className="text-lg font-semibold">Eco Friendly </h4>
            <p className="text-gray-600 text-sm mt-2">
              We are committed to protecting the environment
            </p>
          </div>
          <div>
            <Image
              src={"/images/AboutUs/AffordabalePrice.png"}
              alt="AffordablePrice"
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <h4 className="text-lg font-semibold">Affordable pricing </h4>
            <p className="text-gray-600 text-sm mt-2">
              Giving the best value for your money with our competitive pricing.
            </p>
          </div>
          <div>
            <Image
              src={"/images/AboutUs/PremiumQuality.png"}
              alt="PreminumQuality"
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <h4 className="text-lg font-semibold">Preminum Quality </h4>
            <p className="text-gray-600 text-sm mt-2">
              Consistently providing high-quality results you can count on.
            </p>
          </div>
          <div>
            <Image
              src={"/images/AboutUs/Reliablity.png"}
              alt="Reliability"
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <h4 className="text-lg font-semibold">Professionalism</h4>
            <p className="text-gray-600 text-sm mt-2">
              Our team is dedicated to delivering reliable, high-quality
              solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;