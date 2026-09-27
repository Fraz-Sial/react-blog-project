import { useState } from "react";

const emptyForm = {
  title: "",
  category: "",
  author: "",
  image: "",
  description: "",
};
function AddBlog({ addBlog }) {
  const [formData, setFormData] = useState(emptyForm);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });

    setSuccessMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBlog = {
      id: Date.now(),
      title: formData.title,
      category: formData.category,
      author: formData.author,
      image: formData.image,
      description: formData.description,
    };

    addBlog(newBlog);
    setFormData(emptyForm);
    setSuccessMessage("Blog added successfully! Go to Blogs page to see it.");
  };
  return (
    <main className="px-6 py-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-3 text-3xl font-bold text-gray-900">Add New Blog</h1>
        <p className="mb-8 text-gray-600">
          Fill this form to add a new blog post to blog list.
        </p>
        {successMessage && (
          <p className="mb-6 rounded-lg bg-green-100 px-4 py-3 text-green-700">
            {successMessage}
          </p>
        )}
        <form
          onSubmit={handleSubmit}
          className="rounded-xl bg-white p-6 shadow-md"
        >
          <div className="mb-5">
            <label
              className="mb-2 block font-medium text-gray-700"
              htmlFor="title"
            >
              Blog Title
            </label>

            <input
              id="title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter blog title"
              className="w-full rounded-lg border-gray-300 px-4 py-3 outline-none focus:border-blue-500 border border-gray-100"
            />
          </div>
          <div className="mb-5">
            <label
              className="mb-2 block font-medium text-gray-700 "
              htmlFor="image"
            >
              Blog Image URL
            </label>

            <input
              id="image"
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Paste Image URL"
              className="w-full rounded-lg border-gray-300 px-4 py-3 outline-none focus:border-blue-500 border border-gray-100"
            />
          </div>
          <div className="mb-5">
            <label
              className="mb-2 block font-medium text-gray-700 "
              htmlFor="image"
            >
              Category
            </label>

            <input
              id="category"
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Select Category"
              className="w-full rounded-lg border-gray-300 px-4 py-3 outline-none focus:border-blue-500 border border-gray-100"
            />
          </div>
          <div className="mb-6">
            <label
              className="mb-2 block font-medium text-gray-700 "
              htmlFor="description"
            >
              Description
            </label>

            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write a short blog description"
              rows="5"
              className="w-full rounded-lg border-gray-300 px-4 py-3 outline-none focus:border-blue-500 border border-gray-100"
            ></textarea>
          </div>
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Add Blog
          </button>
        </form>
      </div>
    </main>
  );
}
export default AddBlog;
