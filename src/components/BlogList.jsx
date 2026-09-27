import BlogCard from "./BlogCard";

export default function BlogList({ blogs }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          description={blog.description}
          image={blog.image}
        ></BlogCard>
      ))}
    </div>
  );
}
