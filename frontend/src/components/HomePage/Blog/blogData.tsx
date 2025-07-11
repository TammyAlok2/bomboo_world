import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "The Sustainable Wonders of Bomboo: A Green Revolution",
    paragraph:
      "Dive into the world of bamboo—a versatile, eco-friendly resource transforming industries from construction to fashion.It is very environment friendly",
    image: "/images/blogsimages/GreenResoltion.png",
    author: {
      name: "Anmol kumar",
      image: "/images/TestimonialImage/Men1.jpg",
      designation: "Sustainability Expert",
    },
    tags: ["creative"],
    publishDate: "11/11/2025",
  },
  {
    id: 2,
    title: "Crafting Eco-Chic Interiors with Bamboo",
    paragraph:
      "Learn how bamboo is transforming interior design with its elegant aesthetics, durability, and environmental benefits. Find inspiration for creating eco-friendly spaces at home or work.",
    image: "/images/blogsimages/GreenResoltion.png",
    author: {
      name: "Sahdev Patel",
      image: "/images/TestimonialImage/Men1.jpg",
      designation: "Environmentalalist",
    },
    tags: ["Environment"],
    publishDate: "2024-10-15",
  },
  {
    id: 3,
    title: "The Future of Bamboo in Modern Architecture",
    paragraph:
      "Dive into how bamboo is revolutionizing modern architecture with its strength, versatility, and sustainability. A must-read for architects and eco-conscious builders.",
      image: "/images/blogsimages/GreenResoltion.png",
    author: {
      name: "Tejpal Singh",
      image: "/images/TestimonialImage/Men1.jpg",
      designation: "Rese",
    },
    tags: ["Innovation"],
    publishDate: "2024-09-30",
  },
];
export default blogData;
