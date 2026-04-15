type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
  category: string;
  content: string; // HTML or JSX string for detailed content
  readTime: string; // e.g., "5 min read"
  views: number;
};
