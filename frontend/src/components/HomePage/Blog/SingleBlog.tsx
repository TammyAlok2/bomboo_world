import { Blog } from "@/types/blog";
import Image from "next/image";


const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;
  return (
    <>
      <div className="group relative overflow-hidden bg-white [box-shadow:0_0_0.5rem_0_lightgray] rounded-[.5rem] duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark max-[767px]:w-[22rem] max-[767px]:mx-auto max-[470px]:w-[100%]">
        <div
          className="relative block aspect-[37/22] w-full"
        >
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
          <Image src={image} alt="image" fill />
        </div>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <div
              className="mb-4 block text-xl truncate font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl cursor-pointer"
            >
              {title.substring(0,43)}
            </div>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {paragraph.substring(0, 150) + '...'}
          </p>
          <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={author.image} alt="author" fill />
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  By {author.name}
                </h4>
                <p className="text-xs text-body-color">{author.designation}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Date
              </h4>
              <p className="text-xs text-body-color">{publishDate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
