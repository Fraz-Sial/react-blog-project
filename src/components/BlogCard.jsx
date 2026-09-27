function BlogCard({ title, description }) {
  return (
    <div className="rounded-lg bg-white p-5 shadow">
      <h3 className="mb-3 text-2xl font-bold">{title}</h3>
      <p className="mb-4 text-gray-600">{description}</p>
      <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Read More
      </button>
    </div>
  );
}
export default BlogCard;
