import Header from "../components/Header";
import BlogCard from "../components/BlogCard";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero></Hero>
      <main className="container mx-auto px-4 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <BlogCard
            title="Learning React"
            description="React Makes Building Interfaces Simple"
          ></BlogCard>
          <BlogCard
            title="Learning Props"
            description="Props Used To Pass Data"
          ></BlogCard>
          <BlogCard
            title="Learning Tailwind CSS"
            description="Tailwind Css Makes Interfaces Modern"
          ></BlogCard>
        </div>
      </main>
    </>
  );
}
export default Home;
