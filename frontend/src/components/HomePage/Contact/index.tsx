import Image from "next/image";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28 bg-gray-50 my-[3rem]">
      <h1 className="text-4xl font-bold text-center mb-[4rem]">Get in Touch</h1>
      {/* Container for the layout */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-[7rem] xs:gap-[3rem] md:gap-[8rem] px-6 lg:px-20">
        {/* Image Container */}
        <div className="rounded-lg overflow-hidden w-full xs:w-[50%] lg:w-[30%]">
          <Image
            src="/images/ContactImages/background.png"
            alt="Contact background image"
            className="w-full h-auto object-cover"
            width={600} // Increased width for better quality
            height={400} // Increased height for better quality
            quality={100} // Highest quality setting
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
            priority // Ensures the image is loaded early for better user experience
          />
        </div>

        {/* Newsletter Box */}
        <div className="w-full lg:w-5/12 xl:w-5/12">
          <NewsLatterBox />
        </div>
      </div>
    </section>
  );
};

export default Contact;
