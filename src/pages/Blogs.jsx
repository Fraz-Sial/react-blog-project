import Header from "../components/Header";
import Footer from "../components/Footer";

// function Blogs() {
//   return (
//     <>
//       <Header></Header>
//       <main className="container mx-auto px-4 py-10">
//         <h2 className="text-3xl font-bold">Blogs Page</h2>
//       </main>
//       <Footer></Footer>
//     </>
//   );
// }
// export default Blogs;

// import BlogList from "../components/BlogList";
import { blogsData } from "../data/blogs";

// export default function Blogs() {
//   return (
//     <>
//       <main className="bg-gray-60 min-h-screen">
//         <section className="max-w-6xl mx-auto px-6 py-14">
//           <div className="text-center mb-10">
//             <p className="text-blue-600 font-semibold mb-2 ">Our Blogs</p>
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Latest Articles
//             </h1>
//             <p className="max-w-2xl text-gray-600 mx-auto">
//               Read beginners-friendly articles about React, Components, Props
//               and clean user Interfaces
//             </p>
//           </div>
//           <BlogList blogs={blogs} />
//         </section>
//       </main>
//     </>
//   );
// }

// export default function Blogs({ blogs }) {
//   return (
//     <main className="px-6 py-10">
//       <div className="mx-auto max-w-6xl">
//         <h1 className="mb-3 text-3xl font-bold text-gray-900">All Blogs</h1>
//         <p className="mb-8 text-gray-600">
//           Read the latest posts added to our blog
//         </p>
//         <BlogList blogs={blogs} />
//       </div>
//     </main>
//   );
// }

import { useState } from "react";
import BlogList from "../components/BlogList";

export default function Blogs({ blogs }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 3;

  const categories = ["All", "React", "Javascript", "CSS", "Node.js"];

  // Detect category from title and description
  function getCategory(blog) {
    const text = `${blog.title} ${blog.description}`.toLowerCase();

    if (text.includes("react")) {
      return "React";
    }

    if (text.includes("javascript") || text.includes(" js ")) {
      return "Javascript";
    }

    if (text.includes("css") || text.includes("tailwind")) {
      return "CSS";
    }

    if (text.includes("node")) {
      return "Node.js";
    }

    return "Other";
  }

  // Filter blogs
  const filteredBlogs = blogs.filter((blog) => {
    if (selectedCategory === "All") {
      return true;
    }

    return getCategory(blog) === selectedCategory;
  });

  // Sort blogs
  const sortedBlogs = [...filteredBlogs].sort((a, b) => {
    if (sortBy === "A-Z") {
      return a.title.localeCompare(b.title);
    }

    if (sortBy === "Z-A") {
      return b.title.localeCompare(a.title);
    }

    // Since blogs.js has no date,
    // use id as the order.
    if (sortBy === "Newest") {
      return b.id - a.id;
    }

    if (sortBy === "Oldest") {
      return a.id - b.id;
    }

    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sortedBlogs.length / blogsPerPage);

  const startIndex = (currentPage - 1) * blogsPerPage;

  const displayedBlogs = sortedBlogs.slice(
    startIndex,
    startIndex + blogsPerPage,
  );

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
  }

  function handleSortChange(event) {
    setSortBy(event.target.value);
    setCurrentPage(1);
  }

  function goToPreviousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function goToNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      {/* Heading */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900">All Blogs</h1>

        <p className="mt-2 text-gray-600">
          Explore tutorials, tips, and articles about web development.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Category */}
        <div className="flex items-center gap-2">
          <label htmlFor="category" className="font-medium text-gray-700">
            Category:
          </label>

          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="rounded-lg border border-gray-300 px-3 py-2"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="font-medium text-gray-700">
            Sort by:
          </label>

          <select
            id="sort"
            value={sortBy}
            onChange={handleSortChange}
            className="rounded-lg border border-gray-300 px-3 py-2"
          >
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>
      </div>

      {/* Blogs */}
      {displayedBlogs.length > 0 ? (
        <BlogList blogs={displayedBlogs} />
      ) : (
        <div className="py-10 text-center">
          <p className="text-gray-500">No blogs found.</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            Previous
          </button>

          <span className="font-medium text-gray-700">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      )}
    </main>
  );
}
