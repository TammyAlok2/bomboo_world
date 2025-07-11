import SectionTitle from "@/components/Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="dark:bg-bg-color-dark py-16 md:py-20 lg:py-1"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="Explore our latest insights, tips, and stories crafted to inspire and inform. From trending topics to in-depth guides, dive into a world of valuable content that keeps you ahead."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
