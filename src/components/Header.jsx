import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-6">
        <h1 className="text-3xl font-bold">My Blog</h1>
        <nav className="flex gap-6">
          <Link to="/" className="hover:text-blue-200">
            Home
          </Link>
          <Link to="/blogs" className="hover:text-blue-200">
            Blogs
          </Link>
          <Link to="/add-blogs" className="hover:text-blue-200">
            Add Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}
export default Header;
